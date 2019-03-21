import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import { Button } from 'native-base';
import Drawer from 'react-native-drawer';
import CustomHeader from '../component/CustomHeader';
import SideMenu from '../component/SideMenu';
import { styles } from './HomeScreen_style';

const background = require('../../images/homeBackground.png');
const barcode = require('../../images/scanBarcodeImage.png');
const suggestBack = require('../../images/suggestBackground.png');

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { drawerOpen: null };
  }

  componentDidMount() {
    this.setState({ drawerOpen: null });
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
        onClose={this.onCloseMenu}
        panOpenMask={0.8}
        captureGestures="open"
        acceptPan={false}
      >
        <ImageBackground
          source={background}
          style={styles.imgBack}
          resizeMode="stretch"
        >
          <CustomHeader
            onMenu={this.onMenu}
            navigation={navigation}
            showBack={false}
          />
          <ScrollView>
            <View style={styles.scanContainer}>
              <Text style={styles.scanHeader}>Start Scanning</Text>
              <Text style={styles.scanDescription}>
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
            <View style={styles.suggestContainer}>
              <Text style={styles.suggestTitle}>Might we suggest you try</Text>
              <TouchableOpacity onPress={this.onViewAll}>
                <Image
                  source={suggestBack}
                  style={styles.suggestImage}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </ImageBackground>
      </Drawer>
    );
  }
}

export default HomeScreen;
