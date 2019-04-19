import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const FONT_NAME = 'Avenir-Roman';
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
  },
  button: { marginTop: 8 },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'normal',
    fontFamily: FONT_NAME
  },
  buttonFontLarge: {
    fontSize: 20
  },
  scanArea: {
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    borderWidth: 1,
    borderColor: 'white',
    height: width * 0.618,
    marginTop: 15,
    marginBottom: 15,
    width: width * 0.926
  },
  cameraContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  cameraBody: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  cameraView: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  detectStatus: {
    fontSize: 24,
    fontWeight: 'normal',
    fontFamily: FONT_NAME,
    color: 'white'
  },
  barcode: {
    fontSize: 20,
    color: 'white',
    margin: 8,
    marginBottom: 16,
    fontWeight: 'bold'
  },
  barcodeButtons: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 8
  },
  continueButton: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'normal',
    fontFamily: FONT_NAME
  },
  avoidAlert: {
    alignSelf: 'center',
    backgroundColor: '#333',
    marginTop: (height - 200) / 2,
    height: 200,
    width: 300,
    padding: 20
  },
  avoidHead: {},
  avoidHeadText: {
    color: 'rgb(29, 173, 235)',
    fontSize: 24,
    fontFamily: 'Avenir-Roman',
    textAlign: 'center'
  },
  avoidBody: {
    width: 300
  },
  eachFood: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  eachFoodDot: {
    backgroundColor: '#CCC',
    borderRadius: 3,
    height: 6,
    marginRight: 15,
    width: 6
  },
  eachFoodText: {
    color: '#CCC',
    fontSize: 16
  },
  avoidFooter: {},
  closerAlertButton: {
    alignSelf: 'center',
    backgroundColor: 'rgb(29, 173, 235)',
    borderRadius: 5,
    height: width * 0.1455,
    justifyContent: 'center',
    marginTop: width * 0.096,
    width: width * 0.426
  },
  closerAlertButtonText: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'Avenir-Roman'
  }
});
