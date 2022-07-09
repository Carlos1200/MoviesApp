import {Dimensions, StyleSheet} from 'react-native';

const screenHeight = Dimensions.get('screen').height;

export const detailStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  posterImage: {
    flex: 1,
  },
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,

    elevation: 9,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginLeft: 10,
  },
  backButtom: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 30,
    left: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 10,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
  },
  justifyContent: {
    flexDirection: 'row',
    alignContent: 'center',
    marginVertical: 5,
  },
  contentCenter: {
    justifyContent: 'center',
  },
  contentEvenly: {
    justifyContent: 'space-evenly',
  },
  loadingContainer: {
    width: '50%',
    marginHorizontal: '25%',
  },
});
