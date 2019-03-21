import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Header, Left, Body, Right } from 'native-base';
import { styles } from './CustomHeader_style';

const headerBack = require('../../images/headerBack.png');
const headerMenu = require('../../images/headerMenu.png');
const headerLogo = require('../../images/logoText.png');

class CustomHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      badge: 2
    };
  }

  onBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  render() {
    const { onMenu, showBack, showMenu } = this.props;
    const { badge } = this.state;
    return (
      <Header style={styles.header}>
        <Left>
          {showBack !== false && (
            <TouchableOpacity
              onPress={this.onBack}
              style={styles.backContainer}
            >
              <Image
                source={headerBack}
                resizeMode="contain"
                style={styles.headerBack}
              />
            </TouchableOpacity>
          )}
        </Left>
        <Body>
          <Image
            source={headerLogo}
            resizeMode="contain"
            style={styles.headerLogo}
          />
        </Body>
        <Right>
          {showMenu !== false && (
            <TouchableOpacity onPress={onMenu} style={styles.menuTouchable}>
              <View style={styles.menuContainer}>
                <Image
                  source={headerMenu}
                  resizeMode="contain"
                  style={styles.headerMenu}
                />
                <View style={styles.headerBadgeImage}>
                  <Text style={styles.badgeText}>{badge}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        </Right>
      </Header>
    );
  }
}

export default CustomHeader;
