import { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Link } from "expo-router";
import ItemColumn from "./components/ItemColumn";

export default function ItemScreen() {
  const [items, setItems] = useState([
    { name: "joao", index: 1, column: 0 },
    { name: "maria", index: 2, column: 0 },
  ]);

  return (
    <>
      <ItemColumn items={items} />
      <Link href="/itens/NewItemScreen" style={styles.link}>
        Ir para os itens
      </Link>
    </>
  );
}

const styles = StyleSheet.create({
  link: {
    alignSelf: "flex-end",
    fontSize: 20,
    textDecorationLine: "underline",
    color: "blue",
    padding: 5,
    height: '10%',
  },
});
