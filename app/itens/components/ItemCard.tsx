import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function ItemCard({ name }: { name: string}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text>Back</Text>
            </TouchableOpacity>
            <Text style={styles.itemName}>{name}</Text>
            <TouchableOpacity>
                <Text>Next</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginVertical: 5,
    },
    itemName: {
        fontSize: 16,
    },
});