import React from 'react';
import {Dimensions, ScrollView, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Loading, MoviePoster} from '../components';
import {useMovies} from '../hooks/useMovies';
import Carousel from 'react-native-reanimated-carousel';

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

export const HomeScreen = () => {
  const {loading, popular} = useMovies();
  const {top} = useSafeAreaInsets();
  if (loading) {
    return <Loading />;
  }
  return (
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        <Carousel
          loop={true}
          data={popular}
          renderItem={({item}) => (
            <MoviePoster
              key={item.id}
              movie={item}
              width={windowWidth}
              height={windowHeight}
            />
          )}
          width={windowWidth}
          height={windowHeight}
          mode="parallax"
        />
      </View>
    </ScrollView>
  );
};
