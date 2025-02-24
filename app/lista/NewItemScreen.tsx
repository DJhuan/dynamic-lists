import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const NewItemScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add New Item</Text>
            <TextInput style={styles.input} placeholder="Item Name" />
            <Button title="Add Item" onPress={() => {}} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
});

export default NewItemScreen;