import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen';
import CreateProfile from './CreateProfile';
import SignIn from './SignIn';
import SignUp from './SignUp';
import GenderProfile from './GenderProfile';
import ConditionProfile from './ConditionProfile';
import StartScreen from './StartScreen';
import GetStarted from './getStarted';
import GetStarted2 from './getStarted2';
import Scanner from './Scanner';
import ProductOverview from './ProductOverview';
import RecommendedProduct from './RecommendedProduct';
import AvoidProfile from './AvoidProfile';

const AppNavigator = createStackNavigator(
  {
    AvoidProfile,
    HomeScreen,
    CreateProfile,
    SignIn,
    SignUp,
    StartScreen,
    GenderProfile,
    ConditionProfile,
    GetStarted,
    GetStarted2,
    Scanner,
    ProductOverview,
    RecommendedProduct
  },
  {
    headerMode: 'none'
  }
);

export default createAppContainer(AppNavigator);
