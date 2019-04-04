/** @format */

import { AppRegistry } from 'react-native';
import App from './src/views/Splash';
import { info } from './appInfo';
import 'babel-polyfill';

AppRegistry.registerComponent(info.name, () => App);
