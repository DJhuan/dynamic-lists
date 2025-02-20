import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import ListRepository from "@/database/ListRepository";
import { List } from "@/Types";

export default function Index() {
  const [lists, setLists] = useState<List[]>([]);

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const allLists = await ListRepository.getAllLists();
        setLists(allLists);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLists();
  }, []);

  return (
    <View style={styles.container}>
      <Link href="/NewListScreen" style={styles.link}>
        Adicionar uma lista
      </Link>
      <ScrollView contentContainerStyle={styles.listContainer}>
        {lists.map((list, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.listTitle}>{list.nomelista}</Text>
            <Text style={styles.listDescription}>{list.descricao}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  link: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "blue",
    marginBottom: 20,
  },
  listContainer: {
    width: "100%",
  },
  listItem: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  listDescription: {
    fontSize: 14,
    color: "#789",
  },
});
