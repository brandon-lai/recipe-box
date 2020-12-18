import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function reviewDetails({ navigation }) {
    const pressHandler = () => {
        navigation.goBack();
    }

    return (
       <View style={globalStyles.container}>
           <Text style={globalStyles.titleText}>Review Details Screen</Text>
           <Button title='back to home screen' onPress={pressHandler} />
       </View> 
    )
}
