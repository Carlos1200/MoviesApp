import create from 'zustand';
import {ColorsStoreState} from '../interfaces';

export const useColorsStore = create<ColorsStoreState>(set => ({
  colors: {
    primary: '#5856D6',
    secondary: '#5856D6',
  },
  prevColors: {
    primary: 'transparent',
    secondary: 'transparent',
  },
  setMainColors: colors =>
    set(state => ({
      ...state,
      colors,
    })),
  setPrevMainColors: colors =>
    set(state => ({
      ...state,
      prevColors: colors,
    })),
}));
