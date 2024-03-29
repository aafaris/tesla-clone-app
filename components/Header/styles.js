import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    zIndex: 100,
    flexDirection: 'row', // display on same row
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },

  logo: {
    width: 100,
    height: 20,
    resizeMode: 'contain', // display image in full
  },

  menu: {
    width: 25,
    height: 25,
    resizeMode: 'contain', // display image in full
  }
});


export default styles;