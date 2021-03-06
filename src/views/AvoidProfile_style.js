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
    marginBottom: width * 0.12,
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
    fontSize: 14,
    fontFamily: 'Avenir-Roman',
    marginTop: width * 0.07
  },
  buttonContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    height: width * 1.2,
    justifyContent: 'space-between',
    marginTop: width * 0.115,
    marginBottom: width * 0.115,
    width: '100%'
  },
  button: {
    alignItems: 'center',
    borderRadius: width * 0.19,
    height: width * 0.251,
    justifyContent: 'center',
    padding: width * 0.05,
    width: width * 0.267
  },
  buttonBelow: {
    position: 'relative',
    top: width * 0.16
    // marginTop: width * 0.0675,
  },
  hideButton: {
    opacity: 0
  },
  buttonText: {
    alignSelf: 'center',
    color: '#fffefc',
    fontSize: 18,
    fontFamily: 'Avenir-Roman',
    textAlign: 'center'
  },
  doneButtonDiv: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
  },
  doneButton: {
    alignSelf: 'center',
    backgroundColor: 'rgb(29, 173, 235)',
    borderRadius: 5,
    height: width * 0.1455,
    justifyContent: 'center',
    marginBottom: width * 0.096,
    width: width * 0.426
  },
  doneButtonText: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'Avenir-Roman'
  }
});
