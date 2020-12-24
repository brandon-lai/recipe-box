import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';

export default function RecipeForm({ addRecipe }) {

    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: '', description: '', rating: '' }}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    addRecipe(values);
                }}
            >
                {(formikProps) => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Recipe Title'
                            onChangeText={formikProps.handleChange('title')} 
                            value={formikProps.values.title}
                        />
                        <TextInput
                            multiline
                            style={globalStyles.input}
                            placeholder='Recipe Description'
                            onChangeText={formikProps.handleChange('description')} 
                            value={formikProps.values.description}
                        />
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Rating (1-5)'
                            onChangeText={formikProps.handleChange('rating')} 
                            value={formikProps.values.rating}
                            keyboardType='numeric'
                        />

                        <Button title='Submit' color={globalStyles.header.backgroundColor} onPress={formikProps.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    )
}