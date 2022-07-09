import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {RootStackParams} from '../navigation/Navigation';
import {detailStyles} from '../theme/detailTheme';
import {useMovieDetails} from '../hooks/useMovieDetails';
import {LoadingFetching, MovieDetails} from '../components';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

export const DetailScreen = ({route, navigation}: Props) => {
  const movie = route.params;

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const {isLoading, cast, similarMovies, movieFull} = useMovieDetails(movie.id);

  return (
    <ScrollView style={detailStyles.container}>
      <View>
        <View style={detailStyles.imageContainer}>
          <Image source={{uri}} style={detailStyles.posterImage} />
        </View>
      </View>

      <View style={detailStyles.marginContainer}>
        <Text style={detailStyles.title}>{movie.title}</Text>
        <View style={[detailStyles.justifyContent, detailStyles.contentEvenly]}>
          <View
            style={[detailStyles.justifyContent, detailStyles.contentCenter]}>
            <Icon name="calendar" size={25} color="#fff" />
            <Text style={detailStyles.subTitle}>{movie.release_date}</Text>
          </View>
          <View
            style={[detailStyles.justifyContent, detailStyles.contentCenter]}>
            <Icon name="star" size={25} color="#ffd30f" />
            <Text style={detailStyles.subTitle}>{movie.vote_average}</Text>
          </View>
        </View>
        {isLoading ? (
          <View style={detailStyles.loadingContainer}>
            <LoadingFetching />
          </View>
        ) : (
          <MovieDetails
            movieFull={movieFull!}
            cast={cast}
            similarMovies={similarMovies}
          />
        )}
      </View>
      <TouchableOpacity
        style={detailStyles.backButtom}
        onPress={() => navigation.pop()}>
        <Icon color="white" name="arrow-left" size={30} />
      </TouchableOpacity>
    </ScrollView>
  );
};
