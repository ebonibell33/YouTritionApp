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
import { styles } from './AvoidProfile_style';

const background = require('../../images/homeBackground.png');

// green: 3, blue: 2, other: 1
const backgroundColors = ['#f59331', '#1daeec', '#8fc449', 'rgba(0,0,0,0)'];
const buttons = [
  {
    title: 'None',
    style: 3
  },
  {
    title: 'Gluten',
    style: 2
  },
  {
    title: 'Fish',
    style: 1
  },
  {
    title: 'Dairy',
    style: 2
  },
  {
    title: 'Milk',
    style: 3
  },
  {
    title: 'Poultry',
    style: 2
  },
  {
    title: 'Meet',
    style: 1
  },
  {
    title: 'None-None',
    style: 4
  },
  {
    title: 'Eggs',
    style: 2
  },
  {
    title: 'Peanuts',
    style: 1
  },
  {
    title: 'Soy',
    style: 3
  },
  {
    title: 'Wheat',
    style: 3
  }
];

class AvoidProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: null
    };
  }

  onButton = id => {
    // const { navigation } = this.props;
    console.log('id', id);
    // if (id === 0) {
    //   navigation.push('SignIn');
    // }
    // else {
    //   navigation.push('SignUp');
    // }
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
              <Text style={styles.profileHeader}>I want to avoid...</Text>
              <Text style={styles.profileDescription} numberOfLines={2}>
                Click on all the food that you want to avoid.
              </Text>
              <View style={styles.buttonContainer}>
                {buttons.map((each, index) => (
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
            </View>
          </ScrollView>
        </ImageBackground>
      </Drawer>
    );
  }
}

export default AvoidProfile;
