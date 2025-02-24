import { Link } from "expo-router";
import { View, ScrollView, StyleSheet } from "react-native";
import { useListContext } from "@/contexts/ListContext";
import ListCard from "../src/components/ListCard";

export default function Index() {
  const { lists, fetchLists } = useListContext();

  return (
    <View style={styles.container}>
      <Link href="/NewListScreen" style={styles.link}>
        Adicionar uma lista
      </Link>
      <ScrollView contentContainerStyle={styles.listContainer}>
        {lists.map((list, index) => (
          <ListCard key={index} list={list} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131112",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "blue",
    marginBottom: 20,
  },
  listContainer: {
    flex: 1,
  },
});
