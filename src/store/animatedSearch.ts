import {Animated, Dimensions} from 'react-native';
import create from 'zustand';
import {AnimatedSearchStoreState} from '../interfaces';
const {width} = Dimensions.get('window');

export const useAnimatedSearchStore = create<AnimatedSearchStoreState>(set => ({
  animation: new Animated.Value(60),
  isOpen: false,
  closeAnimation: animation => {
    Animated.spring(animation, {
      toValue: 60,
      useNativeDriver: false,
    }).start(({finished}) => {
      if (finished) {
        set(state => ({...state, isOpen: false}));
      }
    });
  },
  openAnimation: (animation, callBack) => {
    Animated.spring(animation, {
      toValue: width * 0.7,
      useNativeDriver: false,
    }).start(({finished}) => {
      if (finished) {
        set(state => ({...state, isOpen: true}));
        callBack();
      }
    });
  },
}));
