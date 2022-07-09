import React, {useState} from 'react';
import {TextInput, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useAnimatedSearchStore} from '../store/animatedSearch';
import {ScreenNavigationProps} from '../interfaces';

interface Props {
  inputRef: React.RefObject<TextInput>;
}

export const TopBar = ({inputRef}: Props) => {
  const {animation, isOpen, openAnimation, closeAnimation} =
    useAnimatedSearchStore();
  const [query, setQuery] = useState('');
  const navigation = useNavigation<ScreenNavigationProps>();

  const onSearch = () => {
    if (!isOpen) {
      openAnimation(animation, () => {
        inputRef.current?.focus();
      });
    } else {
      closeAnimation(animation);
      if (query.length > 0) {
        navigation.push('SearchScreen', {search: query});
      }
    }
  };

  return (
    <Animated.View style={[styles.container, {width: animation}]}>
      <TextInput
        ref={inputRef}
        style={styles.input}
        placeholder="Search"
        placeholderTextColor={'#000'}
        autoCapitalize="none"
        onSubmitEditing={onSearch}
        onChangeText={text => setQuery(text)}
        value={query}
      />
      <TouchableOpacity style={styles.searchContainer} onPress={onSearch}>
        <Icon name="search" style={styles.icon} />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 30,
    alignSelf: 'center',
  },
  searchContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#5856D6',
    position: 'absolute',
    right: 0,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginRight: 60,
    marginLeft: 20,
    color: '#000',
    fontSize: 16,
  },
  icon: {
    color: '#fff',
    fontSize: 25,
  },
});
