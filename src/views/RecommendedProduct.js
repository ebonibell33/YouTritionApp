import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Linking,
} from 'react-native';
import { Button } from 'native-base';
import Drawer from 'react-native-drawer';
import CustomHeader from '../component/CustomHeader';
import SideMenu from '../component/SideMenu';
import { styles } from './RecommendedProduct_style';

const background = require('../../images/recommendBackground.png');
const main = require('../../images/productMain.png');
const suggest1 = require('../../images/productSuggest1.png');
const suggest2 = require('../../images/productSuggest2.png');
const moodIcon = require('../../images/noMoodIcon.png');

class RecommendedProduct extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      drawerOpen: null,
      showMore: false,
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

  goShop = (url) => {
    Linking.openURL(url);
  }

  render() {
    const { navigation } = this.props;
    const { drawerOpen, showMore } = this.state;
    const url = navigation.getParam('url', "");
    const info = navigation.getParam('info', {});
    const others = navigation.getParam('others', []);
    const realMsg = showMore ? info.product_response : info.product_response.substring(0, 100);
    // console.log('***url***', url);
    // console.log('***info***', info);
    // console.log('***others***', others);

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
                  source={{ uri: url }}
                  style={styles.mainProduct}
                  resizeMode="contain"
                />
                <View style={styles.productInfo}>
                  <Text style={styles.productTitle} numberOfLines={2}>{info.label}</Text>
                  <Text style={styles.price}>${info.price}</Text>
                  <Button style={styles.shopButton} onPress={() => this.goShop(info.link_to_buy)}>
                    <Text style={styles.shopButtonText}>Shop</Text>
                  </Button>
                </View>
              </View>
              <View style={styles.description}>
                <Text style={styles.descText}>
                  {realMsg}
                </Text>
              </View>
              {!showMore && info.product_response.length > 100 && (
                <TouchableOpacity
                  onPress={this.onReadmore}
                  style={styles.readMore}
                >
                  <Text style={styles.readMoreText}>Read More</Text>
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.suggestContainer}>
              <Text style={styles.suggestTitle}>Other options</Text>
              <View
                style={
                  others.length === 1
                    ? styles.productContainerSpecial
                    : styles.productContainer
                }
              >
                {others.map((other, index) => (
                  <View style={styles.productEach} key={index}>
                    <Image
                      key={other.label}
                      source={{ uri: other.image }}
                      resizeMode="contain"
                      style={styles.suggest1}
                    />
                    <Button style={styles.button} onPress={() => this.goShop(other.shop_link)}>
                      <Text style={styles.buttonText}>Shop</Text>
                    </Button>
                  </View>
                ))}
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </Drawer>
    );
  }
}

export default RecommendedProduct;
