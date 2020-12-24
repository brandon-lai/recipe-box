import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button';

const reviewSchema = yup.object({
    title: yup.string()
        .required()
        .min(4),
    description: yup.string()
        .required()
        .min(8),
    rating: yup.string()
        .required()
        .test('is-num-1-5', 'rating must be a number 1 - 5', (val) => {
            return parseInt(val) < 6 && parseInt(val) > 0;
        })
})

export default function RecipeForm({ addRecipe }) {

    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: '', description: '', rating: '' }}
                validationSchema={reviewSchema}
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
                            onBlur={formikProps.handleBlur('title')}
                            value={formikProps.values.title}
                        />
                        <Text style={globalStyles.errorText}> { formikProps.touched.title && formikProps.errors.title } </Text>

                        <TextInput
                            multiline
                            style={globalStyles.input}
                            placeholder='Recipe Description'
                            onChangeText={formikProps.handleChange('description')} 
                            onBlur={formikProps.handleBlur('description')}
                            value={formikProps.values.description}
                        />
                        <Text style={globalStyles.errorText}> {  formikProps.touched.description && formikProps.errors.description } </Text>

                        <TextInput
                            style={globalStyles.input}
                            placeholder='Rating (1-5)'
                            onChangeText={formikProps.handleChange('rating')} 
                            value={formikProps.values.rating}
                            onBlur={formikProps.handleBlur('rating')}
                            keyboardType='numeric'
                        />
                        <Text style={globalStyles.errorText}> { formikProps.touched.rating && formikProps.errors.rating } </Text>

                        {/* <Button title='Save' color={globalStyles.header.backgroundColor} onPress={formikProps.handleSubmit} /> */}
                        <FlatButton text='Save' onPress={formikProps.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    )
}