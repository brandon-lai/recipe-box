import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function FlatButton({ text, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{ text } </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: globalStyles.header.backgroundColor
    },
    buttonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 18,
        textAlign: 'center'
    }
})