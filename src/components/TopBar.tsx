import React, {useState} from 'react';
import {
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Animated,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useAnimatedSearchStore} from '../store/animatedSearch';
import {ScreenNavigationProps} from '../interfaces';
import {useAuthStore} from '../store';

interface Props {
  inputRef: React.RefObject<TextInput>;
}

export const TopBar = ({inputRef}: Props) => {
  const {animation, isOpen, openAnimation, closeAnimation} =
    useAnimatedSearchStore();
  const [query, setQuery] = useState('');
  const navigation = useNavigation<ScreenNavigationProps>();
  const {logOut} = useAuthStore();

  const onSearch = () => {
    if (!isOpen) {
      openAnimation(animation, () => {
        inputRef.current?.focus();
      });
    } else {
      closeAnimation(animation);
      if (query.length > 0) {
        navigation.push('SearchScreen', {search: query});
        setQuery('');
      }
    }
  };

  return (
    <View>
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
      <TouchableOpacity style={styles.logOut} onPress={logOut}>
        <Icon name="sign-out" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 30,
    alignSelf: 'center',
    marginLeft: 50,
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
  logOut: {
    width: 60,
    height: 60,
    backgroundColor: '#5856D6',
    position: 'absolute',
    left: 10,
    marginRight: 20,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
