import {useEffect, useState} from 'react';
import movieDB from '../api';
import {Movie, MovieDBMoviesResponse} from '../interfaces';

interface MovieState {
  popular: Movie[];
}

export const useMovies = () => {
  const [loading, setLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<MovieState>({
    popular: [],
  });

  const getMovies = async () => {
    const popularPromise = await movieDB.get<MovieDBMoviesResponse>(
      '/movie/popular',
    );

    const response = await Promise.all([popularPromise]);

    setMoviesState({
      popular: response[0].data.results,
    });
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    ...moviesState,
    loading,
  };
};
