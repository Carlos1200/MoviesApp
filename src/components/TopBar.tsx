import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const {width} = Dimensions.get('window');
export const TopBar = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, {width: width * 0.7}]}
        placeholder="Search"
        placeholderTextColor={'#000'}
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.icon} activeOpacity={0.8}>
        <Icon name="search" size={30} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    paddingHorizontal: 20,
    borderRadius: 25,
    backgroundColor: '#fff',
    color: '#000',
    fontSize: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  icon: {
    marginLeft: 10,
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
});
