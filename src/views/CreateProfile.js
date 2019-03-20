import React, { Component } from 'react';
import { ScrollView, Text, View, ImageBackground } from 'react-native';
import { Button } from 'native-base';
import Drawer from 'react-native-drawer';
import CustomHeader from '../component/CustomHeader';
import SideMenu from '../component/SideMenu';
import { styles } from './CreateProfile_style';

const background = require('../../images/homeBackground.png');

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { drawerOpen: null };
  }

  onButton = id => {
    const { navigation } = this.props;
    if (id === 0) {
      navigation.push('SignIn');
    } else {
      navigation.push('SignUp');
    }
    this.setState({ drawerOpen: false });
  };

  onViewAll = () => {
    console.log('view all');
  };

  onMenu = () => {
    this.setState({ drawerOpen: true });
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
            <View style={styles.profileContainer}>
              <Text style={styles.profileHeader}>Create Food Profile</Text>
              <Text style={styles.profileDescription}>
                We want to show you food that is best for you.
              </Text>
              <View style={styles.buttonContainer}>
                <Button style={styles.button1} onPress={() => this.onButton(0)}>
                  <Text style={styles.button1Text}>Sign In</Text>
                </Button>
                <Button style={styles.button2} onPress={() => this.onButton(1)}>
                  <Text style={styles.button2Text}>Get Started</Text>
                </Button>
              </View>
            </View>
            <View style={styles.suggestContainer}>
              <Text style={styles.suggestTitle}>Why join Youtrition?</Text>
              <View style={styles.list}>
                <View style={styles.listItem}>
                  <View style={[styles.itemDot, styles.itemColor1]} />
                  <View style={styles.itemTextContainer}>
                    <Text style={styles.itemText} numberOfLines={2}>
                      YouTrition will alert you when an item contains allergens
                    </Text>
                  </View>
                </View>
                <View style={styles.listItem}>
                  <View style={[styles.itemDot, styles.itemColor2]} />
                  <View style={styles.itemTextContainer}>
                    <Text style={styles.itemText} numberOfLines={2}>
                      YouTrition will suggest food for you based on what you
                      like
                    </Text>
                  </View>
                </View>
                <View style={styles.listItem}>
                  <View style={[styles.itemDot, styles.itemColor3]} />
                  <View style={styles.itemTextContainer}>
                    <Text style={styles.itemText} numberOfLines={2}>
                      YouTrition will send free samples based on the items you
                      scan
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </Drawer>
    );
  }
}

export default CreateProfile;
