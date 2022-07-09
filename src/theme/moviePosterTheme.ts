import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  button: {
    marginHorizontal: 2,
    paddingBottom: 20,
    paddingHorizontal: 7,
  },
  image: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  imageContainer: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 10,
  },
  imageBorder: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  infoContainer: {
    backgroundColor: '#fff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 10,
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#000',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginLeft: 10,
  },
  detail: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
    fontWeight: '700',
  },
  textJustify: {
    textAlign: 'justify',
    fontWeight: 'normal',
    padding: 10,
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
});
