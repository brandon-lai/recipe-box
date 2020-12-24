import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { Rating } from 'react-native-elements';

export default function reviewDetails({ navigation }) {
    const rating = navigation.getParam('rating');

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>{ navigation.getParam('title') }</Text>
            <Text style={globalStyles.titleText}>{ navigation.getParam('description') }</Text>
            <Rating 
                type='custom' 
                imageSize={30} 
                readonly 
                startingValue={rating} 
                ratingBackgroundColor={globalStyles.ratings.backgroundColor} 
                ratingColor={globalStyles.ratings.color} 
                tintColor={globalStyles.ratings.backgroundColor} 
                style={{ 
                    alignItems: 'flex-start', 
                    marginTop: 15
                }} 
            />
       </View> 
    )
}