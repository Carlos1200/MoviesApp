import React from 'react';
import Lottie from 'lottie-react-native';

export const LoadingFetching = () => {
  return (
    <Lottie
      source={require('../assets/loading.json')}
      autoPlay
      loop
      style={{
        flex: 1,
        position: 'relative',
      }}
    />
  );
};
