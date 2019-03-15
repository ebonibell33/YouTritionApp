import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import { Button, CheckBox } from 'react-native-elements';
// import { RNCamera, FaceDetector } from 'react-native-camera';
import { storeData } from '../utils/functions';

const icon = require('../../images/logo.png');

const { width } = Dimensions.get('window');
const FONT_NAME = 'AvenirNext-Regular';

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
          <View style={{ alignSelf: 'stretch' }}>
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
          buttonStyle={{
            marginTop: 16,
            paddingHorizontal: 40
          }}
          onPress={this.continue}
          rounded
          large
          backgroundColor="#85bf43"
          title="Continue"
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

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8
  },
  sliderItemContainer: {
    alignSelf: 'stretch',
    paddingHorizontal: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    flexDirection: 'column'
  },
  textContentAreaTitle: {
    margin: 16,
    fontSize: 16,
    color: '#333333',
    textAlign: 'center',
    fontFamily: FONT_NAME
  },
  imageContentArea: {
    width: width * 0.5,
    height: width * 0.5,
    marginVertical: 8,
    marginBottom: 40
  },
  checkBoxStyle: {
    fontSize: 16,
    color: '#333333',
    fontWeight: 'normal',
    fontFamily: FONT_NAME
  }
});
