import React from 'react';
import {Image, View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Movie} from '../interfaces';
import {styles} from '../theme/moviePosterTheme';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MoviePoster = ({movie, width, height}: Props) => {
  const {poster_path} = movie;

  const uri = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <TouchableOpacity
      style={{
        width,
        height,
        ...styles.button,
      }}
      activeOpacity={0.9}>
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.image} resizeMode={'cover'} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{movie.title}</Text>
        <View style={styles.justifyContent}>
          <View>
            <Icon name="calendar" size={12} color="#000" style={styles.icon} />
            <Text style={styles.detail}>{movie.release_date}</Text>
          </View>
          <View>
            <Icon name="star" size={12} color="#f1c40f" style={styles.icon} />

            <Text style={styles.detail}>{movie.vote_average}</Text>
          </View>
        </View>
        <Text style={[styles.detail, styles.textJustify]}>
          {movie.overview}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
