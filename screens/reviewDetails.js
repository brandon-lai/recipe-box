import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function reviewDetails() {
    return (
       <View style={globalStyles.container}>
           <Text style={globalStyles.titleText}>Review Details Screen</Text>
       </View> 
    )
}
