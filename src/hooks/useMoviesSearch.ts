import {useNetInfo} from '@react-native-community/netinfo';
import {useEffect, useState} from 'react';
import movieDB from '../api';
import {Movie, MovieDBMoviesResponse} from '../interfaces';

interface Props {
  search: string;
}

export const useMoviesSearch = ({search}: Props) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<Movie[]>([]);
  const {isConnected} = useNetInfo();
  const [error, setError] = useState({
    message: '',
    status: false,
  });

  const getMovies = async () => {
    try {
      const popularPromise = await movieDB.get<MovieDBMoviesResponse>(
        '/search/movie',
        {
          params: {
            query: search,
          },
        },
      );
      setMovies(popularPromise.data.results);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

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
    movies,
    loading,
    error,
  };
};
