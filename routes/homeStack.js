import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import RecipeDetails from '../screens/recipeDetails';
import { globalStyles } from '../styles/global';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Recipes!',
        }
    },
    RecipeDetails: {
        screen: RecipeDetails,
        navigationOptions: {
            title: 'Recipe Details',
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: globalStyles.mainLabelColor,
        headerTintColor: '#fff'
    }
});

export default createAppContainer(HomeStack);