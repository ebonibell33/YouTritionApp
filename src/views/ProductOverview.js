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

  extractURLs = str => {
    // eslint-disable-next-line
    const urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
    const urls = [];
    str.replace(urlRegex, url => {
      urls.push(url);
    });
    return urls;
  };

  render() {
    const { navigation } = this.props;
    const { drawerOpen, showMore } = this.state;
    const healthy = navigation.getParam('healthy', '');
    const message = navigation.getParam('message', '');
    const recommend = navigation.getParam('recommend', '');
    const food = navigation.getParam('food', {});
    const realMsg = showMore ? message : message.substring(0, 100);
    const background = healthy ? backgroundClean : backgroundHarm;

    const urls =
      recommend === null ? [] : this.extractURLs(recommend.product_url);
    // console.log('===healthy===', food);
    // console.log('===recommend===', recommend);
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
              {!showMore && message.length > 100 && (
                <TouchableOpacity
                  onPress={this.onReadmore}
                  style={styles.readMore}
                >
                  <Text style={styles.readMoreText}>Read More</Text>
                </TouchableOpacity>
              )}
            </View>
            {!healthy && recommend != null && (
              <View style={styles.suggestContainer}>
                <Text style={styles.suggestTitle}>
                  Might we suggest you try
                </Text>
                <View
                  style={
                    urls.length === 1
                      ? styles.productContainerSpecial
                      : styles.productContainer
                  }
                >
                  {urls.map(url => (
                    <View style={styles.productEach}>
                      <Image
                        key={url}
                        source={{ uri: url }}
                        resizeMode="contain"
                        style={styles.suggest1}
                      />
                      <Button style={styles.button}>
                        <Text style={styles.buttonText}>Shop</Text>
                      </Button>
                    </View>
                  ))}
                </View>
              </View>
            )}
          </ScrollView>
        </ImageBackground>
      </Drawer>
    );
  }
}

export default ProductOverview;
