import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Movie, ScreenNavigationProps} from '../interfaces';
import {styles} from '../theme/moviePosterTheme';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
  information?: boolean;
}

export const MoviePoster = ({
  movie,
  width,
  height,
  information = true,
}: Props) => {
  const {poster_path} = movie;

  const uri = `https://image.tmdb.org/t/p/w500${poster_path}`;

  const navigation = useNavigation<ScreenNavigationProps>();
  return (
    <TouchableOpacity
      style={{
        width,
        height,
        ...styles.button,
      }}
      activeOpacity={0.9}
      onPress={() => navigation.push('DetailScreen', movie)}>
      <View
        style={[
          styles.imageContainer,
          !information ? styles.imageBorder : null,
        ]}>
        <Image
          source={{uri}}
          style={[styles.image, !information ? styles.imageBorder : null]}
          resizeMode={'cover'}
        />
      </View>
      {information && (
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <View style={[styles.justifyContent, styles.contentEvenly]}>
            <View style={[styles.justifyContent, styles.contentCenter]}>
              <Icon name="calendar" size={25} color="#000" />
              <Text style={styles.subTitle}>{movie.release_date}</Text>
            </View>
            <View style={[styles.justifyContent, styles.contentCenter]}>
              <Icon name="star" size={25} color="#ffd30f" />
              <Text style={styles.subTitle}>{movie.vote_average}</Text>
            </View>
          </View>
          <Text numberOfLines={4} style={[styles.detail, styles.textJustify]}>
            {movie.overview}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};
