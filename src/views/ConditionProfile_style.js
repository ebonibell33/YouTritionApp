import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

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
    height: height * 0.7,
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
    // fontFamily: 'Lato',
    fontWeight: '600',
    marginTop: width * 0.1
  },
  profileDescription: {
    color: '#707174',
    fontSize: 12,
    // fontFamily: 'Avenir',
    marginTop: 10
  },
  buttonContainer: {
    marginTop: width * 0.15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%'
  },
  button: {
    alignItems: 'center',
    borderRadius: width * 0.19,
    height: width * 0.267,
    justifyContent: 'center',
    padding: width * 0.05,
    width: width * 0.267
  },
  buttonBelow: {
    marginTop: width * 0.135
  },
  buttonText: {
    alignSelf: 'center',
    color: '#fffefc',
    fontSize: 14,
    textAlign: 'center'
  }
});
