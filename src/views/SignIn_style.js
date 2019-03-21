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
  inputContainer: {
    marginTop: width * 0.1,
    width: '100%'
  },
  inputEach: {
    marginBottom: width * 0.01,
    position: 'relative',
    width: '100%'
  },
  textInput: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    fontSize: 15,
    // fontFamily: 'Avenir',
    paddingVertical: 8,
    width: '100%'
  },
  textLabel: {
    color: '#000',
    fontSize: 9,
    marginTop: 4,
    // fontFamily: 'Avenir',
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
    fontSize: 20
    // fontFamily: 'Avenir',
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
    textAlign: 'center'
    // fontFamily: 'Avenir',
  },
  suggestContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#FFF',
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
    textAlign: 'center'
    // fontFamily: 'Lato',
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
    marginRight: width * 0.01,
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
    fontSize: 14
    // fontFamily: 'Avenir',
  }
});
