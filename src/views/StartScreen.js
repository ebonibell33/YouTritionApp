import React, { Component } from 'react';
import { ScrollView, Text, View, Image, ImageBackground } from 'react-native';
import { Button } from 'native-base';
import Drawer from 'react-native-drawer';
import CustomHeader from '../component/CustomHeader';
import SideMenu from '../component/SideMenu';
import { styles } from './StartScreen_style';

const background = require('../../images/homeBackground.png');
const barcode = require('../../images/scanBarcodeImage.png');

class StartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { drawerOpen: null };
  }

  onScan = () => {
    const { navigation } = this.props;
    navigation.push('Scanner');
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
          <CustomHeader onMenu={this.onMenu} navigation={navigation} showBack />
          <ScrollView>
            <View style={styles.headerContainer}>
              <Text style={styles.headerHeader}>Welcome, Essence!</Text>
              <Text style={styles.headerDescription} numberOfLines={3}>
                Check your notifications, we have some new treats for you! Our
                recommendations are based on your food profile.
              </Text>
            </View>
            <View style={styles.scanContainer}>
              <Text style={styles.scanHeader}>Start scanning</Text>
              <Text style={styles.scanDescription} numberOfLines={3}>
                Find & scan the barcode
              </Text>
              <Image
                source={barcode}
                style={styles.barcode}
                resizeMode="contain"
              />
              <Button style={styles.scanButton} onPress={this.onScan}>
                <Text style={styles.scanButtonText}>Scan Now</Text>
              </Button>
            </View>
          </ScrollView>
        </ImageBackground>
      </Drawer>
    );
  }
}

export default StartScreen;
