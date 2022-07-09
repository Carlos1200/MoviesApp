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

  const getMovieDetails = async () => {
    const movieDetailPromise = await movieDB.get<MovieFull>(`/${movieId}`);
    const castPromise = await movieDB.get<CreditsResponse>(
      `/${movieId}/credits`,
    );
    const similarMoviesPromise = await movieDB.get<MovieDBMoviesResponse>(
      `/${movieId}/similar`,
    );
    const [movieDetailsResp, castResp, similarMoviesResp] = await Promise.all([
      movieDetailPromise,
      castPromise,
      similarMoviesPromise,
    ]);

    setstate({
      isLoading: false,
      movieFull: movieDetailsResp.data,
      cast: castResp.data.cast,
      similarMovies: similarMoviesResp.data.results,
    });
  };
  useEffect(() => {
    getMovieDetails();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  return {
    ...state,
  };
};
