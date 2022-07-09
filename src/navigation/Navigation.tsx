import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DetailScreen, HomeScreen, LoginScreen, SearchScreen} from '../screens';
import {useStore} from '../store';
import {Loading} from '../components';
import {Movie} from '../interfaces';

export type RootStackParams = {
  LoginScreen: undefined;
  HomeScreen: undefined;
  DetailScreen: Movie;
  SearchScreen: {search: string};
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  const {loading, status, getAuthenticatedUser} = useStore();

  useEffect(() => {
    getAuthenticatedUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {status === 'unauthenticated' ? (
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      ) : (
        <>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="DetailScreen" component={DetailScreen} />
          <Stack.Screen name="SearchScreen" component={SearchScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};
