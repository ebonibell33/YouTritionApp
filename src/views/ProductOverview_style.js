import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  drawerStyles: {},
  imgBack: {
    flex: 1,
    width
  },
  mainContainer: {
    alignSelf: 'center',
    backgroundColor: 'white',
    elevation: 5,
    justifyContent: 'flex-start',
    marginTop: width * 0.096,
    padding: width * 0.05,
    shadowColor: 'rgba(0, 0, 0, 0.35)',
    shadowOffset: { width: 3, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 0,
    width: width * 0.92
  },
  product: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
    width: '100%'
  },
  mood: {
    height: width * 0.05,
    left: -5,
    top: -3,
    position: 'absolute',
    width: width * 0.05
  },
  mainProduct: {
    height: width * 0.445,
    marginRight: 5,
    width: width * 0.4
  },
  productInfo: {
    justifyContent: 'center'
  },
  productTitle: {
    color: '#000000',
    fontSize: 18,
    // fontWeight: '600',
    fontFamily: 'Lato-Bold',
    marginBottom: 5,
    width: width * 0.4
  },
  productSubtitle: {
    color: '#98989b',
    fontSize: 14,
    fontFamily: 'Avenir-Roman',
    marginBottom: 5,
    width: width * 0.4
  },
  version: {
    color: '#98989b',
    fontSize: 14,
    fontFamily: 'Avenir-Roman',
    marginBottom: 5
  },
  description: {
    marginTop: 10,
    width: '100%'
  },
  descText: {
    color: '#98989b',
    fontSize: 14,
    fontFamily: 'Avenir-Roman',
    textAlign: 'center'
  },
  readMore: {
    marginTop: 10,
    justifyContent: 'center'
  },
  readMoreText: {
    alignSelf: 'center',
    color: '#98989b',
    fontSize: 14,
    fontFamily: 'Avenir-Roman',
    textDecorationLine: 'underline'
  },
  suggestContainer: {
    alignSelf: 'center',
    backgroundColor: '#FFF',
    elevation: 5,
    flexDirection: 'column',
    marginBottom: width * 0.087,
    marginTop: width * 0.137,
    paddingHorizontal: 0.05 * width,
    paddingVertical: 0.1 * width,
    shadowColor: 'rgba(0, 0, 0, 0.35)',
    shadowOffset: { width: 3, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 0,
    width: width * 0.92
  },
  suggestTitle: {
    alignSelf: 'center',
    color: '#707174',
    fontSize: 18,
    fontFamily: 'Avenir-Roman',
    textAlign: 'center',
    width: '100%'
  },
  productContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: width * 0.06,
    width: '100%'
  },
  productContainerSpecial: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: width * 0.06,
    width: '100%'
  },
  productEach: {
    alignItems: 'center',
    height: 0.448 * width,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 0.05 * width,
    width: 0.316 * width
  },
  suggest1: {
    alignSelf: 'center',
    height: 0.316 * width,
    width: 0.316 * width
  },
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#8fc449',
    borderRadius: 6,
    height: width * 0.103,
    justifyContent: 'center',
    width: width * 0.304
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Avenir-Roman'
  },
  avoidBody: {
    marginTop: 10,
    width: '100%'
  },
  eachFood: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  eachFoodDot: {
    backgroundColor: '#98989b',
    borderRadius: 3,
    height: 6,
    marginRight: 15,
    width: 6
  },
  eachFoodText: {
    color: '#98989b',
    fontSize: 16
  }
});
