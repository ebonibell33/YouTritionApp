import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Button } from 'react-native-elements';
// import { RNCamera, FaceDetector } from 'react-native-camera';
import { styles } from './getStarted_style';

const icon = require('../../images/Logo-full.png');

const FONT_NAME = 'AvenirNext-Regular';

export default class App extends Component {
  render() {
    const { navigation } = this.props;
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
          buttonStyle={{ marginTop: 8 }}
          onPress={() => {
            navigation.push('GetStarted2');
          }}
          rounded
          large
          backgroundColor="#85bf43"
          title="Let’s do this"
          textStyle={{
            fontSize: 20,
            color: '#ffffff',
            fontWeight: 'normal',
            fontFamily: FONT_NAME
          }}
        />
      </View>
    );
  }
}
