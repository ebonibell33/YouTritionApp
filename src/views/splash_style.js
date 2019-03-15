import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

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
    fontSize: 24,
    color: 'black',
    textAlign: 'center'
  },
  imageContentArea: { width: width - 50, height: width - 50 }
});
