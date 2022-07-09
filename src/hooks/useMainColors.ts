import {useEffect} from 'react';
import {useColorsStore} from '../store/colors';
import {getImageColors} from '../helpers/getImageColors';
import {Movie} from '../interfaces/index';

interface Props {
  movies: Movie[];
}

export const useMainColors = ({movies}: Props) => {
  const {setMainColors} = useColorsStore();

  const getPosterColors = async (index: number) => {
    const movie = movies[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const [primary = 'green', secondary = 'orange'] = await getImageColors(uri);

    setMainColors({primary, secondary});
  };

  useEffect(() => {
    if (movies.length > 0) {
      getPosterColors(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movies]);

  return {
    getPosterColors,
  };
};
