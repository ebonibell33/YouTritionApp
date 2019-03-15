import { createStackNavigator, createAppContainer } from 'react-navigation';
import GetStarted from './getStatred';
import GetStarted2 from './getStatred2';
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
