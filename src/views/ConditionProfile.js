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
import { styles } from './ConditionProfile_style';

const background = require('../../images/homeBackground.png');

const backgroundColors = ['#f59331', '#1daeec', '#8fc449'];
const buttons = [
  {
    title: 'Weight Control',
    style: 1
  },
  {
    title: 'Type 2 Diabetes',
    style: 3
  },
  {
    title: 'Vegetarian',
    style: 2
  },
  {
    title: 'Gluten Intolerance',
    style: 2
  },
  {
    title: 'Pre-diabetes',
    style: 2
  },
  {
    title: 'Lactose Intolderance',
    style: 1
  },
  {
    title: 'Vegan',
    style: 3
  },
  {
    title: 'High Blood Pressure',
    style: 1
  },
  {
    title: 'General Health',
    style: 3
  }
];

class ConditionProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: null
    };
  }

  onButton = id => {
    const { navigation } = this.props;
    console.log('id', id);
    navigation.push('AvoidProfile');
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
              <Text style={styles.profileHeader}>
                My diet and health {'\n'}concerns are...
              </Text>
              <Text style={styles.profileDescription} numberOfLines={2}>
                Click on all those that apply to you.
              </Text>
              <View style={styles.buttonContainer}>
                {buttons.map((each, index) => (
                  <TouchableOpacity
                    key={each.title}
                    style={[
                      styles.button,
                      { backgroundColor: backgroundColors[each.style - 1] },
                      index >= 3 && index <= 5 && styles.buttonBelow
                    ]}
                    onPress={() => this.onButton(index)}
                  >
                    <Text style={styles.buttonText}>{each.title}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </Drawer>
    );
  }
}

export default ConditionProfile;
