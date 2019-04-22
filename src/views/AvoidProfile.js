import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import { Button } from 'react-native-elements';
import Drawer from 'react-native-drawer';
import CustomHeader from '../component/CustomHeader';
import SideMenu from '../component/SideMenu';
import { storeData } from '../utils/functions';
import { avoidButtons } from '../constants/all';
import { styles } from './AvoidProfile_style';

const background = require('../../images/homeBackground.png');

// green: 3, blue: 2, other: 1
const backgroundColors = ['#f59331', '#1daeec', '#8fc449', 'rgba(0,0,0,0)'];

class AvoidProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: null,
      avoidFoods: []
    };
  }

  onButton = id => {
    const { avoidFoods } = this.state;
    if (avoidButtons[id].title === 'None') {
      const { navigation } = this.props;
      storeData('avoidFoods', JSON.stringify([]), () => {
        navigation.push('HomeScreen');
      });
    } else if (!avoidFoods.includes(avoidButtons[id].title)) {
      avoidFoods.push(avoidButtons[id].title.toLowerCase());
    }
  };

  onDoneButton = () => {
    const { navigation } = this.props;
    const { avoidFoods } = this.state;
    storeData('avoidFoods', JSON.stringify(avoidFoods), () => {
      navigation.push('HomeScreen');
    });
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
          <CustomHeader
            onMenu={this.onMenu}
            showMenu={false}
            showBack={false}
          />
          <ScrollView>
            <View style={styles.profileContainer}>
              <Text style={styles.profileHeader}>I want to avoid...</Text>
              <Text style={styles.profileDescription} numberOfLines={2}>
                Click on all the food that you want to avoid.
              </Text>
              <View style={styles.buttonContainer}>
                {avoidButtons.map((each, index) => (
                  <TouchableOpacity
                    key={each.title}
                    style={[
                      styles.button,
                      { backgroundColor: backgroundColors[each.style - 1] },
                      index >= 4 && index <= 7 && styles.buttonBelow,
                      index === 7 && styles.hideButton
                    ]}
                    onPress={() => this.onButton(index)}
                  >
                    <Text style={styles.buttonText}>{each.title}</Text>
                  </TouchableOpacity>
                ))}
              </View>
              <View style={styles.doneButtonDiv}>
                <Button
                  buttonStyle={styles.doneButton}
                  onPress={this.onDoneButton}
                  rounded
                  large
                  title="Done"
                  textStyle={styles.doneButtonText}
                />
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </Drawer>
    );
  }
}

export default AvoidProfile;
