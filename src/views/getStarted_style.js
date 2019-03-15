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
    backgroundColor: 'white',
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
    width: width - 50,
    height: width - 50,
    marginVertical: 8
  },
  button: { marginTop: 8 },
  buttonText: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'normal',
    fontFamily: FONT_NAME
  }
});
