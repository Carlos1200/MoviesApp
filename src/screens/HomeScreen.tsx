import React, {useRef} from 'react';
import {TextInput, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import OutsideView from 'react-native-detect-press-outside';
import {
  GradientBackground,
  LoadingFetching,
  MyCarousel,
  TopBar,
} from '../components';
import {useMovies} from '../hooks';
import {useAnimatedSearchStore} from '../store/animatedSearch';

export const HomeScreen = () => {
  const {loading, popular} = useMovies();
  const {top} = useSafeAreaInsets();
  const {closeAnimation, animation} = useAnimatedSearchStore();

  const inputRef = useRef<TextInput>(null);

  return (
    <GradientBackground>
      <OutsideView
        childRef={inputRef}
        onPressOutside={() => closeAnimation(animation)}>
        <View style={{marginTop: top + 20}}>
          <TopBar inputRef={inputRef} />
          {loading ? (
            <View
              style={{
                marginVertical: '25%',
              }}>
              <LoadingFetching />
            </View>
          ) : (
            <MyCarousel movies={popular} />
          )}
        </View>
      </OutsideView>
    </GradientBackground>
  );
};
