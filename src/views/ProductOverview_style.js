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
    fontWeight: '600',
    fontFamily: 'Lato',
    marginBottom: 5,
    width: width * 0.4
  },
  productSubtitle: {
    color: '#98989b',
    fontSize: 14,
    fontFamily: 'Avenir',
    marginBottom: 5,
    width: width * 0.4
  },
  version: {
    color: '#98989b',
    fontSize: 14,
    fontFamily: 'Avenir',
    marginBottom: 5
  },
  description: {
    marginTop: 10,
    width: '100%'
  },
  descText: {
    color: '#98989b',
    fontSize: 14,
    fontFamily: 'Avenir',
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
    fontFamily: 'Avenir',
    textDecorationLine: 'underline'
  },
  suggestContainer: {
    alignSelf: 'center',
    backgroundColor: '#FFF',
    elevation: 5,
    marginBottom: width * 0.137,
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
    fontFamily: 'Avenir',
    textAlign: 'center'
  },
  productList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: width * 0.06
  },
  suggest1: {
    height: 0.316 * width,
    width: 0.316 * width
  },
  suggest2: {
    height: 0.316 * width,
    width: 0.316 * width
  },
  productShop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: width * 0.06
  },
  button: {
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
    fontFamily: 'Avenir'
  }
});
