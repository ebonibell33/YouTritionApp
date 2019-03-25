import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  menuContainer: {
    borderLeftColor: '#CCC',
    borderLeftWidth: 2,
    flex: 1,
    backgroundColor: '#FFF',
    display: 'flex',
    justifyContent: 'flex-start'
  },
  menuHeader: {
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    borderTopWidth: 0,
    elevation: 0,
    height: 85
  },
  headerBody: {
    alignSelf: 'flex-end',
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15
  },
  menuHeaderText: {
    color: '#333',
    fontSize: 18,
    marginLeft: 10
  },
  hamburgerIcon: {
    height: 25,
    position: 'relative',
    top: 3,
    width: 25
  },
  headerMenu: {
    flexDirection: 'row',
    display: 'flex',
    paddingHorizontal: 18,
    paddingVertical: 4
  },
  headerMenuIcon: {
    height: 20,
    position: 'relative',
    top: 3,
    width: 20
  },
  headerMenuText: {
    color: '#333',
    fontSize: 18,
    marginLeft: 10
  },
  menuSettings: {
    bottom: 0,
    borderTopColor: '#CCC',
    borderTopWidth: 1,
    paddingVertical: 5,
    position: 'absolute',
    width: '100%'
  }
});
