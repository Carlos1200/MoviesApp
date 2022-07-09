import React from 'react';
import {View, Text, FlatList} from 'react-native';
import currencyFormatter from 'currency-formatter';
import {MovieFull, Cast, Movie} from '../interfaces';
import {CastItem} from './CastItem';
import {MoviePoster} from './MoviePoster';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
  similarMovies: Movie[];
}

export const MovieDetails = ({movieFull, cast, similarMovies}: Props) => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginLeft: 5}}>
            {movieFull.genres.map(g => g.name).join(', ')}
          </Text>
        </View>

        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Story
        </Text>
        <Text style={{fontSize: 16}}>{movieFull.overview}</Text>

        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Budget
        </Text>
        <Text style={{fontSize: 18}}>
          {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
        </Text>
      </View>

      <View style={{marginTop: 10}}>
        <Text
          style={{
            fontSize: 23,
            marginTop: 10,
            fontWeight: 'bold',
            marginHorizontal: 20,
          }}>
          Cast
        </Text>

        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CastItem actor={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 10}}
        />
      </View>
      <View style={{marginTop: 10, marginBottom: 100}}>
        <Text
          style={{
            fontSize: 23,
            marginTop: 10,
            fontWeight: 'bold',
            marginHorizontal: 20,
          }}>
          Similar Movies
        </Text>

        <FlatList
          data={similarMovies}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <MoviePoster
              movie={item}
              width={100}
              height={150}
              information={false}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 10}}
        />
      </View>
    </>
  );
};
