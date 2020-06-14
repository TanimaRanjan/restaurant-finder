import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'; 
import SearchScreen from './src/screens/SearchScreen';
import ResultDetailScreen from './src/screens/ResultDetailScreen';


const navigator = createStackNavigator({
    Search:SearchScreen, 
    Detail:ResultDetailScreen
  }, 
  {
    initialRouteName:'Search',
    defaultNavigationOptions: {
      title:'Restaurant Search'
    }
  }
)

export default createAppContainer(navigator)