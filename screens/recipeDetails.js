import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function reviewDetails({ navigation }) {
    return (
       <View style={globalStyles.container}>
           <Text style={globalStyles.titleText}>{ navigation.getParam('title') }</Text>
           <Text style={globalStyles.titleText}>{ navigation.getParam('body') }</Text>
           <Text style={globalStyles.titleText}>{ navigation.getParam('rating') } / 5</Text>
       </View> 
    )
}
