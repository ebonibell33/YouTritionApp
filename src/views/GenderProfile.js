import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import Drawer from 'react-native-drawer';
import CustomHeader from '../component/CustomHeader';
import SideMenu from '../component/SideMenu';
import { styles } from './GenderProfile_style';

const background = require('../../images/homeBackground.png');

class GenderProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: null
    };
  }

  onButton = id => {
    const { navigation } = this.props;
    console.log('id', id);
    if (id === 0) {
      navigation.push('ConditionProfile');
    } else {
      navigation.push('ConditionProfile');
    }
  };

  onViewAll = () => {
    console.log('view all');
  };

  onMenu = () => {
    this.setState({ drawerOpen: true });
  };

  onCloseMenu = () => {
    this.setState({ drawerOpen: false });
  };

  render() {
    const { navigation } = this.props;
    const { drawerOpen } = this.state;
    return (
      <Drawer
        open={drawerOpen}
        content={
          <SideMenu navigation={navigation} onClose={this.onCloseMenu} />
        }
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
              <Text style={styles.profileHeader}>I am ...</Text>
              <Text style={styles.profileDescription} numberOfLines={2}>
                Click on your gender.
              </Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.button1}
                  onPress={() => this.onButton(0)}
                >
                  <Text style={styles.buttonText}>Female</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button2}
                  onPress={() => this.onButton(1)}
                >
                  <Text style={styles.buttonText}>Male</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </Drawer>
    );
  }
}

export default GenderProfile;
