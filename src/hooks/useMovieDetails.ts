import {useNetInfo} from '@react-native-community/netinfo';
import {useEffect, useState} from 'react';
import movieDB from '../api';
import {
  Cast,
  CreditsResponse,
  Movie,
  MovieDBMoviesResponse,
  MovieFull,
} from '../interfaces';

interface MovieDetails {
  isLoading: boolean;
  movieFull?: MovieFull;
  cast: Cast[];
  similarMovies: Movie[];
}

export const useMovieDetails = (movieId: number) => {
  const [state, setstate] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
    similarMovies: [],
  });
  const {isConnected} = useNetInfo();
  const [error, setError] = useState({
    message: '',
    status: false,
  });

  const getMovieDetails = async () => {
    try {
      const movieDetailPromise = await movieDB.get<MovieFull>(
        `/movie/${movieId}`,
      );
      const castPromise = await movieDB.get<CreditsResponse>(
        `/movie/${movieId}/credits`,
      );
      const similarMoviesPromise = await movieDB.get<MovieDBMoviesResponse>(
        `/movie/${movieId}/similar`,
      );
      const [movieDetailsResp, castResp, similarMoviesResp] = await Promise.all(
        [movieDetailPromise, castPromise, similarMoviesPromise],
      );

      setstate({
        isLoading: false,
        movieFull: movieDetailsResp.data,
        cast: castResp.data.cast,
        similarMovies: similarMoviesResp.data.results,
      });
    } catch (e) {
      setError({
        message: 'Something went wrong',
        status: true,
      });
      setstate(prevState => ({
        ...prevState,
        isLoading: false,
      }));
    }
  };
  useEffect(() => {
    getMovieDetails();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  useEffect(() => {
    if (!isConnected) {
      setError({
        message: 'No internet connection',
        status: true,
      });
    } else {
      setError({
        message: '',
        status: false,
      });
    }
  }, [isConnected]);

  return {
    ...state,
    error,
  };
};
