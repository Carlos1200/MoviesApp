import {useEffect, useState} from 'react';
import movieDB from '../api';
import {Movie, MovieDBMoviesResponse} from '../interfaces';

interface Props {
  search: string;
}

export const useMoviesSearch = ({search}: Props) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<Movie[]>([]);

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
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return {
    movies,
    loading,
  };
};
