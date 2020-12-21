import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import RecipeDetails from '../screens/recipeDetails';

const screens = {
    Home: {
        screen: Home
    },
    'Recipe Details': {
        screen: RecipeDetails
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);