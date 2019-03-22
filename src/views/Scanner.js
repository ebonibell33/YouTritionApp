import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Modal,
  // Alert,
  ScrollView,
  Dimensions
} from 'react-native';
import { Button } from 'react-native-elements';
import { RNCamera } from 'react-native-camera';
import { GET } from '../utils/functions';
import { styles } from './Scanner_style';

const { width } = Dimensions.get('window');

const loaderimage = require('../../images/loaderImage.png');
const unhealthyimage = require('../../images/unhealthyimage.png');
const healthyimage = require('../../images/healthyimage.png');
// const scnnerImage = require('../../images/scnnerImage.png');

const FONT_NAME = 'AvenirNext-Regular';

export default class Scanner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // torchMode: 'off',
      // cameraType: 'back',
      barcode: '',
      showCamera: true,
      loading: false,
      result: ''
    };
  }

  componentWillReceiveProps() {
    setTimeout(() => {
      this.setState({ showCamera: true });
    }, 300);
  }

  barcodeReceived(e) {
    console.log(`Barcode---Type: `, e);
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
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log('===onGoogleVisionBarcodesDetected===', barcodes);
          }}
        />

        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
          }}
        >
          <View
            style={{
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1
            }}
          >
            <View
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                backgroundColor: 'rgba(0,0,0,0)'
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 'normal',
                  fontFamily: FONT_NAME,
                  color: 'white'
                }}
              >
                {barcode ? 'Barcode Detected' : 'Position Barcode Here'}
              </Text>
              <View style={styles.scanArea} />
              {barcode.length > 0 && (
                <Text
                  style={{
                    fontSize: 20,
                    color: 'white',
                    margin: 8,
                    marginBottom: 16,
                    fontWeight: 'bold'
                  }}
                >
                  {barcode}
                </Text>
              )}

              <View
                style={{
                  flex: 0,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingBottom: 8
                }}
              >
                {barcode.length > 0 && (
                  <Button
                    onPress={() => {
                      this.setState(
                        { barcode: '', loading: false, result: '' },
                        () => {
                          // this.fetchData();
                        }
                      );
                    }}
                    rounded
                    backgroundColor="#85bf43"
                    title="CONTINUE"
                    textStyle={{
                      fontSize: 20,
                      color: '#ffffff',
                      fontWeight: 'normal',
                      fontFamily: FONT_NAME
                    }}
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

  fetchData = () => {
    this.setState({ loading: true });
    this.fetchIngredeants((food, error) => {
      if (food) {
        this.fetchResult(
          food.foodContentsLabel,
          (result, err, ingredients, healthy) => {
            if (result) {
              this.setState({
                loading: false,
                result: { healthy, message: result, ingredients }
              });
            } else {
              this.setState({ loading: false, showCamera: true });
              setTimeout(() => {
                alert(err.message);
                this.setState({ barcode: '' });
              }, 500);
            }
          }
        );
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
            // const { label, foodContentsLabel } = food;
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

  fetchResult = (ingredients, fnc) => {
    const url = `http://13.232.170.63/ing_app/public/api/v1/ingredients`;
    GET(
      url,
      {},
      {
        alt_names: ingredients,
        limit: 1,
        page: 1
      },
      (error, response) => {
        // debugger;
        if (response) {
          const { data, message } = response;
          if (data.length > 0) {
            const result = data[0];
            const { bad_reason: badReason } = result.attributes;
            fnc(badReason, error, ingredients, false);
          } else {
            fnc(message, error, ingredients, true);
          }
        } else {
          fnc(null, error, ingredients, true);
        }
      }
    );
  };

  render() {
    const { loading, result, showCamera } = this.state;
    console.log('====state====', this.state);
    if (loading) {
      return this.renderLoader();
    }
    if (result) {
      return this.renderResult();
    }
    return (
      <View style={styles.mainContainer}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={showCamera}
          onRequestClose={() => {
            // Alert.alert('Modal has been closed.');
          }}
        >
          {this.renderCamera()}
        </Modal>
      </View>
    );
  }
}
