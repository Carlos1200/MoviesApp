import React from 'react';
import Lottie from 'lottie-react-native';
import {View} from 'react-native';
import {loadingStyles} from '../theme/loadingTheme';

export const Loading = () => {
  return (
    <View style={loadingStyles.container}>
      <Lottie source={require('../assets/popcorn.json')} autoPlay loop />
    </View>
  );
};
