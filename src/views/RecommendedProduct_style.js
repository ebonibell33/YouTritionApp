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
    fontSize: 11,
    // fontWeight: '600',
    fontFamily: 'Lato-Bold',
    marginBottom: 5
  },
  productSubtitle: {
    color: '#98989b',
    fontSize: 14,
    fontFamily: 'Avenir-Roman',
    marginBottom: 5
  },
  version: {
    color: '#98989b',
    fontSize: 14,
    fontFamily: 'Avenir-Roman',
    marginBottom: 5
  },
  price: {
    color: '#707174',
    fontSize: 17,
    fontFamily: 'Avenir-Roman'
  },
  shopButton: {
    alignItems: 'center',
    backgroundColor: '#8fc449',
    borderRadius: 6,
    height: width * 0.127,
    justifyContent: 'center',
    marginTop: 8,
    width: width * 0.362
  },
  shopButtonText: {
    color: '#ffffff',
    fontSize: 17,
    fontFamily: 'Avenir-Roman'
  },
  description: {
    marginTop: 14,
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
    marginBottom: width * 0.137,
    marginTop: width * 0.137,
    paddingHorizontal: 0.05 * width,
    paddingVertical: 0.06 * width,
    shadowColor: 'rgba(0, 0, 0, 0.35)',
    shadowOffset: { width: 3, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 0,
    width: width * 0.92
  },
  suggestTitle: {
    alignSelf: 'center',
    color: '#98999b',
    fontSize: 18,
    fontFamily: 'Avenir-Roman',
    textAlign: 'center'
  },
  productList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: width * 0.04
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
    borderRadius: 4,
    height: width * 0.093,
    justifyContent: 'center',
    width: width * 0.262
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Avenir-Roman'
  }
});
