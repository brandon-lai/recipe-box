import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function Home({ navigation }) {
    const [recipes, setRecipes] = useState([
        { title: 'Shrimp Scampi', rating: 5, body: 'Easy, delicious shrimp scampi recipe', key: '1' },
        { title: 'Brioche French Toast', rating: 4, body: 'Fluffy french toast', key: '2' },
        { title: 'Oatmeal Chocolate Chip Cookies', rating: 5, body: 'Easy, delicious oatmeal chocolate chip cookies', key: '3' },
    ]);
    
    return (
       <View style={globalStyles.container}>
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
