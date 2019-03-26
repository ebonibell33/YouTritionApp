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
import { styles } from './ProductOverview_style';

const backgroundHarm = require('../../images/productBackground.png');
const backgroundClean = require('../../images/recommendBackground.png');
// const main = require('../../images/productMain.png');
const suggest1 = require('../../images/productSuggest1.png');
const suggest2 = require('../../images/productSuggest2.png');
const moodIcon = require('../../images/noMoodIcon.png');

class ProductOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: null,
      showMore: false
    };
  }

  componentDidMount() {
    this.setState({ drawerOpen: null });
  }

  onMenu = () => {
    this.setState({ drawerOpen: true });
  };

  onCloseMenu = () => {
    this.setState({ drawerOpen: false });
  };

  onReadmore = () => {
    this.setState({ showMore: true });
  };

  render() {
    const { navigation } = this.props;
    const { drawerOpen, showMore } = this.state;
    const healthy = navigation.getParam('healthy', '');
    const message = navigation.getParam('message', '');
    const food = navigation.getParam('food', {});
    const realMsg = showMore ? message : message.substring(0, 100);
    const background = healthy ? backgroundClean : backgroundHarm;

    console.log('===healthy===', healthy);
    console.log('===back===', background);
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
            showMenu={false}
          />
          <ScrollView>
            <View style={styles.mainContainer}>
              <View style={styles.product}>
                <Image
                  source={{ uri: food.image }}
                  style={styles.mainProduct}
                  resizeMode="stretch"
                />
                <View style={styles.productInfo}>
                  <Text style={styles.productTitle}>{food.brand}</Text>
                  <Text style={styles.productSubtitle}>{food.label}</Text>
                </View>
                {!healthy && (
                  <Image
                    source={moodIcon}
                    style={styles.mood}
                    resizeMode="contain"
                  />
                )}
              </View>
              <View style={styles.description}>
                <Text style={styles.descText}>{realMsg}</Text>
              </View>
              {!showMore && (
                <TouchableOpacity
                  onPress={this.onReadmore}
                  style={styles.readMore}
                >
                  <Text style={styles.readMoreText}>Read More</Text>
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.suggestContainer}>
              <Text style={styles.suggestTitle}>Might we suggest you try</Text>
              <View style={styles.productList}>
                <Image
                  source={suggest1}
                  resizeMode="contain"
                  style={styles.suggest1}
                />
                <Image
                  source={suggest2}
                  resizeMode="contain"
                  style={styles.suggest2}
                />
              </View>
              <View style={styles.productShop}>
                <Button style={styles.button}>
                  <Text style={styles.buttonText}>Shop</Text>
                </Button>
                <Button style={styles.button}>
                  <Text style={styles.buttonText}>Shop</Text>
                </Button>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </Drawer>
    );
  }
}

export default ProductOverview;
