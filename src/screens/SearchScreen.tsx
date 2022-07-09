import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/Navigation';
import {useMoviesSearch} from '../hooks/useMoviesSearch';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {GradientBackground, LoadingFetching, MyCarousel} from '../components';

interface Props extends StackScreenProps<RootStackParams, 'SearchScreen'> {}

export const SearchScreen = ({route}: Props) => {
  const {search} = route.params;
  const {loading, movies} = useMoviesSearch({search});
  const {top} = useSafeAreaInsets();
  return (
    <GradientBackground>
      <View style={{marginTop: top + 20}}>
        <Text style={styles.title}>Searching for: {search}</Text>
        {loading ? (
          <View
            style={{
              marginVertical: '25%',
            }}>
            <LoadingFetching />
          </View>
        ) : (
          <MyCarousel movies={movies} />
        )}
      </View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: {width: 1, height: -1},
    textShadowRadius: 10,
  },
});
