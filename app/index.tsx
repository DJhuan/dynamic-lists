import { Link } from "expo-router";
import { View, ScrollView, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useListContext } from "@/context/ListContext";
import ListCard from "../src/components/ListCard";
import PlusSvg from "@/src/lista/components/PlusSvg";

export default function Index() {
  const { lists, fetchLists } = useListContext();

  return (
    <View style={styles.container}>
      <Link href="/Teste" asChild>
        <Text style={{color: "yellow"}}>Teste</Text>
      </Link>
      <ScrollView contentContainerStyle={styles.listContainer}>
        {lists.map((list, index) => (
          <ListCard key={index} list={list} />
        ))}
      </ScrollView>

      <View style={styles.buttonContainer}>
        <Link href="/NewListScreen" asChild>
          <TouchableOpacity>
            <View style={styles.plusButton}>
              <PlusSvg />
            </View>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131112",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "white",
    marginBottom: 20,
  },
  listContainer: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    position: "absolute",
    alignItems: "center",
    right: 10,
    bottom: 15,
  },
  plusButton: {
    backgroundColor: "#FFCB47",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    width: 80,
    height: 80,
  },
});
