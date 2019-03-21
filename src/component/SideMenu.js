import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Header, Body } from 'native-base';
import { styles } from './SideMenu_style';

const menuIcons = [
  // eslint-disable-next-line
  require('../../images/profile.png'),
  // eslint-disable-next-line
  require('../../images/try_new.png'),
  // eslint-disable-next-line
  require('../../images/activity.png'),
  // eslint-disable-next-line
  require('../../images/settings.png')
];

class SideMenu extends Component {
  onMenu = id => {
    const { navigation, onClose } = this.props;
    console.log(navigation, id);
    if (id === 0) {
      navigation.push('CreateProfile');
    } else if (id === 1) {
      navigation.push('ProductOverview');
    } else {
      navigation.push('RecommendedProduct');
    }
    if (onClose) {
      onClose();
    }
  };

  render() {
    return (
      <View style={styles.menuContainer}>
        <Header style={styles.menuHeader}>
          <Body style={styles.headerBody}>
            <Text style={styles.menuHeaderText}>Guest</Text>
          </Body>
        </Header>
        <View>
          <TouchableOpacity onPress={() => this.onMenu(0)}>
            <View style={styles.headerMenu}>
              <Image
                source={menuIcons[0]}
                style={styles.headerMenuIcon}
                resizeMode="contain"
              />
              <Text style={styles.headerMenuText}>Create Food Profile</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onMenu(1)}>
            <View style={styles.headerMenu}>
              <Image
                source={menuIcons[1]}
                style={styles.headerMenuIcon}
                resizeMode="contain"
              />
              <Text style={styles.headerMenuText}>Try New Food</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onMenu(2)}>
            <View style={styles.headerMenu}>
              <Image
                source={menuIcons[2]}
                style={styles.headerMenuIcon}
                resizeMode="contain"
              />
              <Text style={styles.headerMenuText}>Your Activity</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => this.onMenu(3)}
          style={styles.menuSettings}
        >
          <View style={styles.headerMenu}>
            <Image
              source={menuIcons[3]}
              style={styles.headerMenuIcon}
              resizeMode="contain"
            />
            <Text style={styles.headerMenuText}>Settings</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default SideMenu;
