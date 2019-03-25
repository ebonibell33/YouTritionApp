import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  imgBack: {
    flex: 1,
    width: '100%'
  },
  headerContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#FFF',
    display: 'flex',
    elevation: 5,
    height: width * 0.55,
    marginTop: width * 0.12,
    paddingHorizontal: width * 0.02,
    shadowColor: 'rgba(0, 0, 0, 0.35)',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 0,
    width: width * 0.8
  },
  headerHeader: {
    color: '#707174',
    fontSize: 18,
    fontFamily: 'Lato',
    fontWeight: '600',
    marginTop: width * 0.15
  },
  headerDescription: {
    color: '#707174',
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Avenir',
    marginTop: 25,
    textAlign: 'center'
  },
  scanContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    display: 'flex',
    height: width * 0.85,
    marginTop: width * 0.05,
    width: width * 0.8
  },
  scanHeader: {
    color: '#707174',
    fontSize: 18,
    fontFamily: 'Lato',
    fontWeight: '600',
    marginTop: width * 0.1
  },
  scanDescription: {
    color: '#707174',
    fontSize: 18,
    fontFamily: 'Avenir',
    marginTop: 10
  },
  barcode: {
    height: width * 0.192,
    marginTop: width * 0.06,
    width: width * 0.288
  },
  scanButton: {
    alignSelf: 'center',
    backgroundColor: 'rgb(29, 173, 235)',
    borderRadius: 5,
    height: width * 0.1455,
    justifyContent: 'center',
    marginTop: width * 0.096,
    width: width * 0.426
  },
  scanButtonText: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'Avenir'
  },
  suggestContainer: {
    backgroundColor: '#FFF',
    marginTop: width * 0.15
  },
  suggestTitle: {
    color: '#707174',
    fontSize: 18,
    marginBottom: width * 0.04,
    marginTop: width * 0.04,
    textAlign: 'center',
    fontFamily: 'Avenir'
  },
  suggestImage: {
    alignSelf: 'center',
    display: 'flex',
    width: width * 0.9,
    height: width * 0.4
  }
});
