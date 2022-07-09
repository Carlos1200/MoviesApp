import React from 'react';
import {Dimensions} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {useMainColors} from '../hooks';
import {MoviePoster} from './MoviePoster';
import {Movie} from '../interfaces';

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

interface Props {
  movies: Movie[];
}

export const MyCarousel = ({movies}: Props) => {
  const {getPosterColors} = useMainColors({movies});
  return (
    <Carousel
      style={{
        marginTop: -25,
      }}
      loop={true}
      data={movies}
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
      onSnapToItem={getPosterColors}
    />
  );
};
