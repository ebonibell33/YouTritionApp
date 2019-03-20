import { createStackNavigator, createAppContainer } from 'react-navigation';
import Scanner from './Scanner';

const AppNavigator = createStackNavigator(
  {
    Scanner
  },
  {
    headerMode: 'none'
  }
);

export default createAppContainer(AppNavigator);
