import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Button, CheckBox } from 'react-native-elements';
// import { RNCamera, FaceDetector } from 'react-native-camera';
import { storeData } from '../utils/functions';
import { styles } from './getStarted2_style';

const icon = require('../../images/logo.png');

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { selectedIndex: 0 };
  }

  continue = () => {
    const { navigation } = this.props;
    const { selectedIndex } = this.state;
    if (selectedIndex === 0) {
      alert('Please select one option.');
      return;
    }
    storeData('getting_Started', `${selectedIndex}`);
    navigation.push('Scanner');
  };

  render() {
    const { selectedIndex } = this.state;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.sliderItemContainer}>
          <Image
            source={icon}
            style={styles.imageContentArea}
            resizeMode="contain"
          />
          <Text style={styles.textContentAreaTitle}>
            Why are you choosing this app?
          </Text>
          <View style={styles.stretch}>
            <CheckBox
              textStyle={styles.checkBoxStyle}
              title="I have diabetes"
              checked={selectedIndex === 1}
              onPress={() => {
                this.setState({ selectedIndex: 1 });
              }}
            />
            <CheckBox
              textStyle={styles.checkBoxStyle}
              title="I have a food allergy"
              checked={selectedIndex === 2}
              onPress={() => {
                this.setState({ selectedIndex: 2 });
              }}
            />
            <CheckBox
              textStyle={styles.checkBoxStyle}
              title="I just want to be healthy"
              checked={selectedIndex === 3}
              onPress={() => {
                this.setState({ selectedIndex: 3 });
              }}
            />
          </View>
        </View>

        <Button
          buttonStyle={styles.button}
          onPress={this.continue}
          rounded
          large
          backgroundColor="#85bf43"
          title="Continue"
          textStyle={styles.buttonText}
        />
      </View>
    );
  }
}
