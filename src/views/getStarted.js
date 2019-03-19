import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Button } from 'react-native-elements';
// import { RNCamera, FaceDetector } from 'react-native-camera';
import { styles } from './getStarted_style';

const icon = require('../../images/Logo-full.png');

export default class App extends Component {
  render() {
    const { navigation } = this.props;
    console.log('navigation', navigation);
    return (
      <View style={styles.mainContainer}>
        <View style={styles.sliderItemContainer}>
          <Image
            source={icon}
            style={styles.imageContentArea}
            resizeMode="contain"
          />
          <Text style={styles.textContentAreaTitle}>
            The app that lets you know if your food is good for you based on the
            ingredients
          </Text>
        </View>
        <Button
          buttonStyle={styles.button}
          onPress={() => {
            navigation.push('GetStarted2');
          }}
          rounded
          large
          backgroundColor="#85bf43"
          title="Let’s do this"
          textStyle={styles.buttonText}
        />
      </View>
    );
  }
}
