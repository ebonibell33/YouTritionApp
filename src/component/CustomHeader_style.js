import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFF',
    height: 85,
    paddingTop: 25
  },
  headerLogo: {
    alignSelf: 'center',
    height: width * 0.085,
    width: '100%'
  },
  headerBack: {
    height: 25,
    width: 25
  },
  menuContainer: {
    height: 30,
    position: 'relative',
    width: 30
  },
  headerMenu: {
    display: 'flex',
    height: 25,
    width: 25
  },
  headerBadgeImage: {
    backgroundColor: '#fc363b',
    borderRadius: 9,
    display: 'flex',
    height: 18,
    justifyContent: 'center',
    position: 'absolute',
    top: -2,
    right: 0,
    width: 18
  },
  badgeText: {
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: 14
  },
  backTouchable: {
    marginLeft: 10,
    marginTop: 10
  },
  menuTouchable: {
    marginRight: 0,
    marginTop: 10
  }
});
