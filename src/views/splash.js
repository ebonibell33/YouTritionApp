import React, { Component } from 'react';
import { View, Image } from 'react-native';
import AppNavigator from './RootNavigation';
import AppNavigator2 from './RootNavigation2';
import { retrieveData } from '../utils/functions';
import { styles } from './splash_style';

const icon = require('../../images/Logo-full.png');

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { gettingStarted: 0 };
  }

  componentDidMount = () => {
    retrieveData('getting_Started', result => {
      // error
      setTimeout(() => {
        if (result) {
          this.setState({ gettingStarted: 2 });
        } else {
          this.setState({ gettingStarted: 1 });
        }
      }, 2000);
    });
  };

  render() {
    const { gettingStarted } = this.state;
    console.log('gettingStarted', gettingStarted);
    if (gettingStarted === 1) {
      return <AppNavigator />;
    } else if (gettingStarted === 2) {
      return <AppNavigator2 />;
    }
    return (
      <View style={styles.mainContainer}>
        <Image
          source={icon}
          style={styles.imageContentArea}
          resizeMode="contain"
        />
      </View>
    );
  }
}
