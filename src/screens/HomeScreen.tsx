import React, {useEffect} from 'react';
import {Dimensions, ScrollView, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-reanimated-carousel';
import {GradientBackground, Loading, MoviePoster} from '../components';
import {useMovies} from '../hooks/useMovies';
import {useColorsStore} from '../store/colors';
import {getImageColors} from '../helpers/getImageColors';

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

export const HomeScreen = () => {
  const {loading, popular} = useMovies();
  const {top} = useSafeAreaInsets();

  const {setMainColors} = useColorsStore();

  const getPosterColors = async (index: number) => {
    const movie = popular[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const [primary = 'green', secondary = 'orange'] = await getImageColors(uri);

    setMainColors({primary, secondary});
  };

  useEffect(() => {
    if (popular.length > 0) {
      getPosterColors(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [popular]);

  if (loading) {
    return <Loading />;
  }
  return (
    <GradientBackground>
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
            onSnapToItem={getPosterColors}
          />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};
