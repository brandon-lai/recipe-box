import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import RecipeForm from './recipeForm';
import uuid from 'react-uuid';
import SwipeableRow from '../shared/swipeable';

export default function Home({ navigation }) {
    const [modalOpen, setModalOpen] = useState(false);

    const [recipes, setRecipes] = useState([
        { title: 'Shrimp Scampi', rating: 5, description: 'Easy, delicious shrimp scampi recipe', key: '1' },
        { title: 'Brioche French Toast', rating: 4, description: 'Fluffy french toast', key: '2' },
        { title: 'Oatmeal Chocolate Chip Cookies', rating: 5, description: 'Easy, delicious oatmeal chocolate chip cookies', key: '3' },
    ]);
    
    const addRecipe = (recipe) => {
        recipe.key = uuid();
        setRecipes((currentRecipes) => {
            return [recipe, ...currentRecipes]
        });
        setModalOpen(false);
    }

    var deleteRecipe = (key) => {
        setRecipes((prevRecipes) => {
            return prevRecipes.filter(recipe => recipe.key != key);
        });
    }

    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons 
                            name='close'
                            size={24}
                            style={{ ...styles.modalToggle, ...styles.modalClose }}
                            onPress={() => setModalOpen(false)}
                        />
                        <RecipeForm addRecipe={addRecipe} />
                    </View>
                </TouchableWithoutFeedback>
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
                        <SwipeableRow itemKey={item.key} deleteFunction={() => deleteRecipe(item.key)}>
                            <TouchableOpacity onPress={() => navigation.navigate('RecipeDetails', item)}>
                                <Card>
                                    <Text style={globalStyles.titleText}>{ item.title } {item.key}</Text>
                                </Card>
                            </TouchableOpacity>
                        </SwipeableRow>
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