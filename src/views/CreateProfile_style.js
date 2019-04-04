import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  imgBack: {
    flex: 1,
    width: '100%'
  },
  profileContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#FFF',
    display: 'flex',
    elevation: 5,
    height: width * 0.63,
    marginTop: width * 0.12,
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
    fontSize: 18,
    fontFamily: 'Avenir-Roman',
    marginTop: 10,
    textAlign: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.731
  },
  button1: {
    alignSelf: 'center',
    backgroundColor: '#FFF',
    borderColor: '#1dadeb',
    borderWidth: 2,
    borderRadius: 5,
    height: width * 0.1455,
    justifyContent: 'center',
    marginTop: width * 0.096,
    width: width * 0.347
  },
  button1Text: {
    color: '#1dadeb',
    fontSize: 20,
    fontFamily: 'Avenir-Roman'
  },
  button2: {
    alignSelf: 'center',
    backgroundColor: '#1dadeb',
    borderColor: '#1dadeb',
    borderWidth: 1,
    borderRadius: 5,
    height: width * 0.1455,
    justifyContent: 'center',
    marginTop: width * 0.096,
    width: width * 0.347
  },
  button2Text: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'Avenir-Roman'
  },
  suggestContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#FFF',
    elevation: 5,
    height: width * 0.688,
    marginBottom: width * 0.075,
    marginTop: width * 0.15,
    paddingVertical: 10,
    shadowColor: 'rgba(0, 0, 0, 0.35)',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 0,
    width: width * 0.92
  },
  suggestTitle: {
    color: '#707174',
    fontSize: 18,
    marginBottom: width * 0.08,
    marginTop: width * 0.04,
    textAlign: 'center',
    fontFamily: 'Lato-Bold'
  },
  list: {
    marginLeft: width * 0.05,
    marginRight: width * 0.05
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginBottom: 10
  },
  itemDot: {
    alignSelf: 'center',
    borderRadius: width * 0.033,
    height: width * 0.066,
    marginRight: width * 0.025,
    width: width * 0.066
  },
  itemColor1: {
    backgroundColor: '#8fc449'
  },
  itemColor2: {
    backgroundColor: '#f59331'
  },
  itemColor3: {
    backgroundColor: '#1daeec'
  },
  itemTextContainer: {
    flexDirection: 'row',
    width: width * 0.622
  },
  itemText: {
    color: '#707174',
    flexWrap: 'wrap',
    fontSize: 14,
    fontFamily: 'Avenir-Roman'
  }
});
