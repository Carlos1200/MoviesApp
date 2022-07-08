import React, {useEffect} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useFadeHook} from '../hooks/useFadeHook';
import {useColorsStore} from '../store/colors';
interface Props {
  children: JSX.Element | JSX.Element[];
}

export const GradientBackground = ({children}: Props) => {
  const {colors, prevColors, setPrevMainColors} = useColorsStore();

  const {opacity, fadeIn, fadeOut} = useFadeHook();
  useEffect(() => {
    fadeIn(() => {
      setPrevMainColors(colors);
      fadeOut(0);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colors]);

  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={[prevColors.primary, prevColors.secondary, '#313131']}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.5, y: 0.7}}
      />

      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          opacity,
        }}>
        <LinearGradient
          colors={[colors.primary, colors.secondary, '#313131']}
          style={{...StyleSheet.absoluteFillObject}}
          start={{x: 0.1, y: 0.1}}
          end={{x: 0.5, y: 0.7}}
        />
      </Animated.View>
      {children}
    </View>
  );
};
