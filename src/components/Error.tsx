import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Lottie from 'lottie-react-native';

interface ErrorProps {
  message: string;
}

export const Error = ({message}: ErrorProps) => {
  return (
    <View style={styles.container}>
      <Lottie
        style={styles.icon}
        source={require('../assets/error.json')}
        speed={0.7}
        autoPlay
        loop
      />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: '25%',
  },
  icon: {
    width: '100%',
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});
