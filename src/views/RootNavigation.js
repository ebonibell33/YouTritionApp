import { createStackNavigator, createAppContainer } from 'react-navigation';
import GetStarted from './getStarted';
import GetStarted2 from './getStarted2';
import Scanner from './scanner';

const AppNavigator = createStackNavigator(
  {
    GetStarted,
    GetStarted2,
    Scanner
  },
  {
    headerMode: 'none'
  }
);

export default createAppContainer(AppNavigator);
