import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    header: {
        backgroundColor: '#ffbf69',
        color: '#fff'
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
    titleText: {
        fontFamily: 'cereal-medium',
        fontSize: 18,
        color: '#333',
        marginTop: 20,
        marginLeft: 7
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20
    },
    ratings: {
        backgroundColor: '#fff',
        color: '#ffbf69',
        alignItems: 'flex-end'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6
    },
    errorText: {
        color: '#ffbf69',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center'
    }
});