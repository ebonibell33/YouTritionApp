import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  // Alert,
  ScrollView,
  Dimensions,
  Modal
} from 'react-native';
import { Button } from 'react-native-elements';
import { RNCamera } from 'react-native-camera';
import { GET, retrieveData } from '../utils/functions';
import { getDataOnce } from '../utils/fire';

import { styles } from './Scanner_style';

const { width } = Dimensions.get('window');

const loaderimage = require('../../images/loaderImage.png');
const unhealthyimage = require('../../images/unhealthyimage.png');
const healthyimage = require('../../images/healthyimage.png');
// const FONT_NAME = 'Avenir-Roman';

export default class Scanner extends Component {
  constructor(props) {
    super(props);

    const { navigation } = props;
    this.state = {
      // torchMode: 'off',
      // cameraType: 'back',
      barcode: '',
      showCamera: false,
      loading: false,
      result: '',
      importData: [],
      altData: [],
      recommendData: [],
      waitingMax: 0,
      waitingCount: 0,
      avoidFoods: [],
      // hasAvoidFood: false,
      includeFood: [],
      avoidFoodsData: {}
    };

    navigation.addListener('willFocus', () => {
      // payload
      this.setState({ showCamera: true });
    });
  }

  componentDidMount() {
    this.showCamera();
    getDataOnce('import', snapshot => {
      const data = snapshot.val();
      const altData = [];

      // eslint-disable-next-line
      data.map((each, index) => {
        const splits = each.alt_names.split(';');
        // eslint-disable-next-line
        splits.map(split => {
          if (split.length > 0) {
            altData.push({ alt: split.trim(), id: index });
          }
        });
      });
      this.setState({ importData: data, altData });
    });

    getDataOnce('recommend', snapshot => {
      const data = snapshot.val();
      this.setState({ recommendData: data });
    });

    getDataOnce('avoid', snapshot => {
      const data = snapshot.val();
      const avoidData = {};
      for (let i = 0; i < data.length; i += 1) {
        const each = [];
        each.productArray = data[i].product_names.replace(/\s/g, '').split(',');
        each.ingredientsArray = data[i].specific_ingredients
          .replace(/\s/g, '')
          .split(',');
        avoidData[data[i].food_item_avoid] = each;
      }
      this.setState({ avoidFoodsData: avoidData });
    });

    retrieveData('avoidFoods', result => {
      this.setState({ avoidFoods: JSON.parse(result) });
    });
  }

  showCamera() {
    this.setState({ showCamera: true });
  }

  barcodeReceived() {
    // e
  }

  renderLoader() {
    const { barcode } = this.state;
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.textContentAreaTitle}>{barcode}</Text>
        <View style={styles.sliderItemContainer}>
          <Image
            source={loaderimage}
            style={styles.loaderimage}
            resizeMode="contain"
          />
        </View>
      </View>
    );
  }

  renderResult() {
    const { result } = this.state;
    const { healthy, message, ingredients } = result;

    const mainstyle = {
      ...styles.mainContainer,
      backgroundColor: healthy ? '#85bf43' : '#eb8c30'
    };
    const textstyle = { ...styles.textContentAreaTitle, color: 'white' };
    const image = healthy ? healthyimage : unhealthyimage;

    return (
      <View style={mainstyle}>
        <ScrollView>
          <View style={styles.sliderItemContainer}>
            <Image
              source={image}
              style={styles.loaderimage}
              resizeMode="contain"
            />
            <Text style={textstyle}>{message}</Text>
            <Text style={[textstyle, { textAlign: 'left' }]}>
              <Text style={[textstyle, { fontWeight: '600' }]}>
                Ingredients:&nbsp;
              </Text>
              {ingredients}
            </Text>
          </View>
          <Button
            buttonStyle={styles.button}
            onPress={this.checkAnotherProduct}
            rounded
            large
            backgroundColor={!healthy ? '#85bf43' : '#eb8c30'}
            title="Check Another Product"
            textStyle={styles.buttonText}
          />
        </ScrollView>
      </View>
    );
  }

  onCancelCamera = () => {
    const { navigation } = this.props;
    this.setState({ showCamera: false });
    navigation.goBack();
  };

  checkAnotherProduct = () => {
    const { navigation } = this.props;
    this.setState({ showCamera: false, loading: false, result: null });
    navigation.goBack();
  };

  renderCamera() {
    const { showCamera, barcode } = this.state;
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          barcodeFinderWidth={width * 0.926}
          barcodeFinderHeight={width * 0.618}
          barcodeFinderVisible
          barcodeFinderBorderColor="red"
          barcodeFinderBorderWidth={3}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle='"YouTrition" Would Like to Access the Camera'
          permissionDialogMessage="You need to allow camera access to be able to scan UPC codes and use food recognition."
          onBarCodeRead={barcodes => {
            if (showCamera) {
              this.setState(
                { barcode: barcodes.data, showCamera: false },
                () => {
                  this.fetchData();
                }
              );
            }
          }}
          onGoogleVisionBarcodesDetected={() => {}}
        />

        <View style={styles.cameraContainer}>
          <View style={styles.cameraBody}>
            <View style={styles.cameraView}>
              <Text style={styles.detectStatus}>
                {barcode ? 'Barcode Detected' : 'Position Barcode Here'}
              </Text>
              <View style={styles.scanArea} />
              {barcode.length > 0 && (
                <Text style={styles.barcode}>{barcode}</Text>
              )}

              <View style={styles.barcodeButtons}>
                {barcode.length > 0 && (
                  <Button
                    onPress={() => {
                      this.setState(
                        { barcode: '', loading: false, result: '' },
                        () => {}
                      );
                    }}
                    rounded
                    backgroundColor="rgb(29, 173, 235)"
                    title="CONTINUE"
                    textStyle={styles.continueButton}
                  />
                )}

                <Button
                  onPress={this.onCancelCamera}
                  rounded
                  large
                  title="CANCEL"
                  textStyle={[styles.buttonText, styles.buttonFontLarge]}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }

  fetchResult = (food, callback) => {
    const { importData, altData, recommendData } = this.state;
    if (
      importData.length > 0 &&
      altData.length > 0 &&
      recommendData.length > 0
    ) {
      let mIndex = -1;
      let rIndex = -1;
      const data = food.foodContentsLabel.split(';');
      const foodLabel = food.label.toLowerCase();
      // eslint-disable-next-line
      for (let i = 0; i < data.length; i = i + 1) {
        data[i] = data[i].trim().toLowerCase();
      }
      // eslint-disable-next-line
      altData.map(each => {
        // eslint-disable-next-line
        data.map(every => {
          if (every.includes(each.alt.toLowerCase())) {
            mIndex = each.id;
          }
        });
        if (mIndex !== -1) {
          return true;
        }
        // if (data.includes(each.alt.toLowerCase())) {
        //   mIndex = each.id;
        // }
      });
      // eslint-disable-next-line
      recommendData.map((each, index) => {
        if (foodLabel.includes(each.bad_ingredient_product.toLowerCase())) {
          rIndex = index;
        }
      });

      if (mIndex !== -1) {
        callback({
          error: false,
          match: importData[mIndex],
          recommend: rIndex === -1 ? null : recommendData[rIndex],
          message: importData[mIndex].bad_reason
        });
      } else {
        callback({
          error: false,
          match: null,
          recommend: null,
          message:
            'Way to go! This item does not contain any ingredients that we believe are bad for your health.'
        });
      }
    } else {
      const { waitingCount, waitingMax } = this.state;
      if (waitingCount < waitingMax) {
        this.setState({ waitingCount: waitingCount + 1 });
        setTimeout(() => {
          this.fetchResult(food, callback);
        });
      } else {
        callback({
          error: true,
          match: null,
          recommend: null,
          message: "Sorry, we can't get the required data."
        });
      }
    }
  };

  fetchData = () => {
    const { navigation } = this.props;
    const { avoidFoods, avoidFoodsData } = this.state;
    this.setState({ loading: true, waitingMax: 4, waitingCount: 0 });
    this.fetchIngredeants((food, error) => {
      if (food) {
        const foodContent = food.foodContentsLabel.toLowerCase();
        const foodLabel = food.label.toLowerCase();
        const includeFood = [];
        let hasAvoidFood = false;
        // console.log('foodContent===', foodContent);
        // console.log('avoidFoods===', avoidFoods);
        // console.log('avoidButtons===', avoidButtons);
        // console.log('avoidFoodsData===', avoidFoodsData);
        if (avoidFoods.length > 0) {
          if (avoidFoods.length === 1 && avoidFoods === 'None') {
            console.log('Do not avoid the foods');
          } else {
            // eslint-disable-next-line
            avoidFoods.map((avoidFood, ind) => {
              const avoid = avoidFoodsData[avoidFood];
              let match = false;
              if (avoid) {
                // eslint-disable-next-line
                avoid.productArray.map(product => {
                  if (foodLabel.includes(product.toLowerCase())) {
                    match = true;
                    return true;
                  }
                });
                // eslint-disable-next-line
                avoid.ingredientsArray.map(ingredient => {
                  if (foodContent.includes(ingredient.toLowerCase())) {
                    match = true;
                    return true;
                  }
                });
              }
              if (match) {
                hasAvoidFood = true;
                includeFood.push(avoidFood);
              }
            });
          }
        }

        this.fetchResult(food, result => {
          if (result.error) {
            this.setState({ loading: false, showCamera: true });
            setTimeout(() => {
              alert(result.message);
              this.setState({ barcode: '' });
            }, 500);
          } else {
            navigation.push('ProductOverview', {
              healthy: result.match === null, // match === null means healthy
              message: result.message,
              recommend: result.recommend,
              hasAvoidFood,
              includeFood,
              food
            });
            setTimeout(() => {
              this.setState({
                loading: false,
                barcode: ''
              });
            }, 500);
          }
        });
      } else {
        this.setState({ loading: false, showCamera: true });
        setTimeout(() => {
          alert(error.message);
        }, 500);
      }
    });
  };

  fetchIngredeants = fnc => {
    const { barcode } = this.state;
    const url = `https://api.edamam.com/api/food-database/parser`;
    GET(
      url,
      {},
      {
        upc: barcode,
        app_id: 'c7547c4f',
        app_key: 'f799a9b249c3a96f17d715a58a31cac9'
      },
      (error, response) => {
        if (response) {
          const { hints } = response;
          if (hints && hints.length > 0) {
            const hint = hints[0];
            const { food } = hint;
            fnc(food, error);
          } else {
            fnc(null, response);
          }
        } else {
          fnc(null, error);
        }
      }
    );
  };

  render() {
    const { loading, showCamera, includeFood } = this.state;
    if (loading) {
      return this.renderLoader();
    }
    return (
      <View style={styles.mainContainer}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={showCamera}
          onRequestClose={() => {}}
        >
          {this.renderCamera()}
        </Modal>
      </View>
    );
  }
}
