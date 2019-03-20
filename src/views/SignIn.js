import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import { Button } from 'native-base';
import Drawer from 'react-native-drawer';
import CustomHeader from '../component/CustomHeader';
import SideMenu from '../component/SideMenu';
import { styles } from './SignIn_style';

const background = require('../../images/homeBackground.png');
const eyeIcon = require('../../images/eyeIcon.png');

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: null,
      email: '',
      password: '',
      passwordSecure: true
    };
  }

  onButton = id => {
    const { navigation } = this.props;
    console.log('id', id);
    if (id === 1) {
      navigation.push('StartScreen');
    }
    // else {
    //   navigation.push('SignUp');
    // }
  };

  onPressSecure = () => {
    const { passwordSecure } = this.state;
    this.setState({ passwordSecure: !passwordSecure });
  };

  onViewAll = () => {
    console.log('view all');
  };

  onMenu = () => {
    this.setState({ drawerOpen: true });
  };

  render() {
    const { navigation } = this.props;
    const { email, password, passwordSecure, drawerOpen } = this.state;
    return (
      <Drawer
        open={drawerOpen}
        content={<SideMenu navigation={navigation} />}
        type="static"
        side="right"
        tapToClose
        styles={styles.drawerStyles}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        onClose={() => {
          this.setState({ drawerOpen: false });
        }}
        panOpenMask={0.8}
        captureGestures="open"
        acceptPan={false}
      >
        <ImageBackground
          source={background}
          style={styles.imgBack}
          resizeMode="stretch"
        >
          <CustomHeader onMenu={this.onMenu} showBack={false} />
          <ScrollView>
            <View style={styles.profileContainer}>
              <Text style={styles.profileHeader}>Sign Into your Account</Text>
              <Text style={styles.profileDescription}>
                Sign in with your email and password
              </Text>
              <View style={styles.inputContainer}>
                <View style={styles.inputEach}>
                  <TextInput
                    style={styles.textInput}
                    maxLength={25}
                    onChangeText={e => this.setState({ email: e })}
                    value={email}
                    placeholder="Email"
                  />
                  <Text style={styles.textLabel}>Email Address:</Text>
                </View>
                <View style={styles.inputEach}>
                  <TextInput
                    style={styles.textInput}
                    maxLength={25}
                    onChangeText={e => this.setState({ password: e })}
                    secureTextEntry={passwordSecure}
                    value={password}
                    placeholder="Password"
                  />
                  <Text style={styles.textLabel}>Password:</Text>
                  <TouchableOpacity
                    style={styles.eyeIconContainer}
                    onPress={this.onPressSecure}
                  >
                    <Image
                      source={eyeIcon}
                      style={styles.eyeIcon}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.buttonContainer}>
                <Button style={styles.button1} onPress={() => this.onButton(1)}>
                  <Text style={styles.button1Text}>Sign In</Text>
                </Button>
                <TouchableOpacity
                  style={styles.button2}
                  onPress={() => this.onButton(2)}
                >
                  <Text style={styles.button2Text}>Forgot your password?</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </Drawer>
    );
  }
}

export default SignIn;
