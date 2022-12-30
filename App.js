import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import useResults from './src/hooks/useResults';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen,
  },
  {
    intialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Buisness Search',
    },
  }
);

export default createAppContainer(navigator);
