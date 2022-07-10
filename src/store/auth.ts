import create from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StoreState} from '../interfaces';

export const useAuthStore = create<StoreState>(set => ({
  loading: true,
  status: 'unauthenticated',
  authenticatedUser: async token => {
    await AsyncStorage.setItem('token', token);
    set(state => ({
      ...state,
      status: 'authenticated',
      loading: false,
    }));
  },
  notAuthenticatedUser: () => {
    set(state => ({
      ...state,
      status: 'unauthenticated',
      loading: false,
    }));
  },
  getAuthenticatedUser: async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      set(state => ({
        ...state,
        status: 'authenticated',
        loading: false,
      }));
    } else {
      set(state => ({
        ...state,
        status: 'unauthenticated',
        loading: false,
      }));
    }
  },
  logOut: async () => {
    await AsyncStorage.removeItem('token');
    set(state => ({
      ...state,
      status: 'unauthenticated',
      loading: false,
    }));
  },
}));
