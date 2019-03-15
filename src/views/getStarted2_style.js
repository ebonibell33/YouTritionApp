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
    alignSelf: 'stretch',
    paddingHorizontal: '5%',
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
    width: width * 0.5,
    height: width * 0.5,
    marginVertical: 8,
    marginBottom: 40
  },
  checkBoxStyle: {
    fontSize: 16,
    color: '#333333',
    fontWeight: 'normal',
    fontFamily: FONT_NAME
  },
  button: {
    marginTop: 16,
    paddingHorizontal: 40
  },
  buttonText: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'normal',
    fontFamily: FONT_NAME
  },
  stretch: { alignSelf: 'stretch' }
});
