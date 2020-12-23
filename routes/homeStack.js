import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import RecipeDetails from '../screens/recipeDetails';
import { globalStyles } from '../styles/global';
import Header from '../shared/header';
import React from 'react';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerStyle: {
                    backgroundColor: globalStyles.header.backgroundColor
                },
                headerTitle: () => <Header navigation={navigation} />,
            }
        }
    },
    RecipeDetails: {
        screen: RecipeDetails,
        navigationOptions: {
            title: 'Recipe Details',
        }
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);