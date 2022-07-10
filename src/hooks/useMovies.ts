import {useNetInfo} from '@react-native-community/netinfo';
import {useEffect, useState} from 'react';
import movieDB from '../api';
import {Movie, MovieDBMoviesResponse} from '../interfaces';

interface MovieState {
  popular: Movie[];
}

export const useMovies = () => {
  const [loading, setLoading] = useState(true);
  const {isConnected} = useNetInfo();
  const [error, setError] = useState({
    message: '',
    status: false,
  });
  const [moviesState, setMoviesState] = useState<MovieState>({
    popular: [],
  });

  const getMovies = async () => {
    try {
      const popularPromise = await movieDB.get<MovieDBMoviesResponse>(
        '/movie/popular',
      );

      const response = await Promise.all([popularPromise]);

      setMoviesState({
        popular: response[0].data.results,
      });
    } catch (e) {
      setError({
        message: 'Something went wrong',
        status: true,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

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
    ...moviesState,
    loading,
    error,
  };
};
