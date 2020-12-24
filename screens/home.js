import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import RecipeForm from './recipeForm';

export default function Home({ navigation }) {
    const [modalOpen, setModalOpen] = useState(false);

    const [recipes, setRecipes] = useState([
        { title: 'Shrimp Scampi', rating: 5, body: 'Easy, delicious shrimp scampi recipe', key: '1' },
        { title: 'Brioche French Toast', rating: 4, body: 'Fluffy french toast', key: '2' },
        { title: 'Oatmeal Chocolate Chip Cookies', rating: 5, body: 'Easy, delicious oatmeal chocolate chip cookies', key: '3' },
    ]);
    
    return (
        <View style={globalStyles.container}>

            <Modal visible={modalOpen} animationType='slide'>
                <View style={styles.modalContent}>
                    <MaterialIcons 
                        name='close'
                        size={24}
                        style={{ ...styles.modalToggle, ...styles.modalClose }}
                        onPress={() => setModalOpen(false)}
                    />
                    <RecipeForm />
                </View>
            </Modal>

            <MaterialIcons 
                name='add'
                size={24}
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}
            />

            <Text style={globalStyles.titleText}>Home Screen</Text>
            <FlatList
                data={recipes}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('RecipeDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{ item.title } </Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View> 
    )
}

const styles = StyleSheet.create({
    modalToggle: {
    },
    modalClose: {
        marginTop: 50,
        marginLeft: 20
    },
    modalContent: {
        flex: 1,
    }
})