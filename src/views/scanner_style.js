import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const FONT_NAME = 'AvenirNext-Regular';
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8
  },
  sliderItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  textContentAreaTitle: {
    margin: 16,
    fontSize: 16,
    color: '#333333',
    textAlign: 'center',
    fontFamily: FONT_NAME
  },
  imageContentArea: {
    width: width * 0.5,
    height: width * 0.5,
    marginVertical: 8,
    marginBottom: 40
  },
  loaderimage: {
    width: width * 0.8,
    height: width * 0.8,
    marginVertical: 8,
    marginBottom: 40
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
});
