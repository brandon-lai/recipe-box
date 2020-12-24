import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';

export default function Header({ navigation }) {
    const iconPress = () => {
        alert("Icon Pressed");
    }

    return (
        <View style={styles.header}>
            <MaterialIcons name='menu' size={28} onPress={iconPress} style={styles.icon} />
            <View>
                <Text style={styles.headerText}>Recipes!</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: globalStyles.header.backgroundColor
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: globalStyles.header.color,
        letterSpacing: 1
    },
    icon: {
        position: 'relative',
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        color: globalStyles.header.color
    }
})