import create from 'zustand';
import {ColorsStoreState} from '../interfaces';

export const useColorsStore = create<ColorsStoreState>(set => ({
  colors: {
    primary: 'transparent',
    secondary: 'transparent',
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
