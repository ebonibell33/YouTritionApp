import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  imgBack: {
    flex: 1,
    width: '100%'
  },
  profileContainer: {
    alignItems: 'flex-start',
    alignSelf: 'center',
    backgroundColor: '#FFF',
    display: 'flex',
    elevation: 5,
    height: width * 1.392,
    marginTop: width * 0.12,
    paddingHorizontal: width * 0.05,
    shadowColor: 'rgba(0, 0, 0, 0.35)',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 0,
    width: width * 0.92
  },
  profileHeader: {
    color: '#707174',
    fontSize: 18,
    fontFamily: 'Lato-Bold',
    // fontWeight: '600',
    marginTop: width * 0.1
  },
  profileDescription: {
    color: '#707174',
    fontSize: 12,
    fontFamily: 'Avenir-Roman',
    marginTop: 10
  },
  inputContainer: {
    marginTop: width * 0.1,
    width: '100%'
  },
  inputEach: {
    marginTop: width * 0.03,
    position: 'relative',
    width: '100%'
  },
  textInput: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    fontSize: 15,
    fontFamily: 'Avenir-Roman',
    paddingVertical: 8,
    width: '100%'
  },
  textLabel: {
    color: '#000',
    fontSize: 9,
    marginTop: 4,
    fontFamily: 'Avenir-Roman',
    textTransform: 'uppercase'
  },
  eyeIconContainer: {
    height: 20,
    position: 'absolute',
    top: 5,
    right: 5,
    width: 20
  },
  eyeIcon: {
    height: 20,
    width: 20
  },
  buttonContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    width: width * 0.731
  },
  button1: {
    alignSelf: 'center',
    backgroundColor: '#1dadeb',
    borderColor: '#1dadeb',
    borderWidth: 1,
    borderRadius: 5,
    height: width * 0.1455,
    justifyContent: 'center',
    marginTop: width * 0.3,
    width: width * 0.347
  },
  button1Text: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'Avenir-Roman'
  },
  button2: {
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    borderColor: 'rgba(0,0,0,0)',
    borderWidth: 1,
    borderRadius: 5,
    height: width * 0.1,
    justifyContent: 'center',
    marginTop: width * 0.05,
    width: '100%'
  },
  button2Text: {
    color: '#1dadeb',
    fontSize: 20,
    fontFamily: 'Avenir-Roman'
  },
  suggestContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#FFF',
    elevation: 5,
    height: width * 0.688,
    marginTop: width * 0.15,
    paddingVertical: 10,
    shadowColor: 'rgba(0, 0, 0, 0.35)',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 0,
    width: width * 0.8
  },
  suggestTitle: {
    color: '#707174',
    fontSize: 18,
    marginBottom: width * 0.08,
    marginTop: width * 0.04,
    textAlign: 'center',
    fontFamily: 'Lato-Bold'
  },
  help: {
    alignSelf: 'center',
    marginBottom: width * 0.05,
    marginTop: width * 0.05,
    paddingHorizontal: width * 0.05,
    width: width * 0.8
  },
  helpText: {
    color: '#707174',
    fontSize: 12,
    fontFamily: 'Avenir-Roman'
  },
  textUnderline: {
    textDecorationLine: 'underline'
  }
});
