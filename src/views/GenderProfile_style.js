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
    elevation: 5,
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
  buttonContainer: {
    marginTop: width * 0.15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  button1: {
    alignItems: 'center',
    backgroundColor: '#8fc449',
    borderRadius: width * 0.19,
    height: width * 0.38,
    justifyContent: 'center',
    width: width * 0.38
  },
  button2: {
    alignItems: 'center',
    backgroundColor: '#f59331',
    borderRadius: width * 0.19,
    height: width * 0.38,
    justifyContent: 'center',
    width: width * 0.38
  },
  buttonText: {
    alignSelf: 'center',
    color: '#fffefc',
    fontSize: 14,
    fontFamily: 'Avenir-Roman'
  }
});
