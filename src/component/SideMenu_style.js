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
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    marginTop: 7
  },
  headerBody: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: 10
  },
  menuHeaderText: {
    color: '#333',
    fontSize: 18
  },
  headerMenu: {
    flexDirection: 'row',
    display: 'flex',
    padding: 4
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
