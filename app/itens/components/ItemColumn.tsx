import { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ItemCard from "./ItemCard";

interface Item {
  name: string;
  index: number;
  column: number;
}

interface ItemColumnProps {
  items: Item[];
}

export default function ItemColumn({ items }: ItemColumnProps) {
  const [itens, setItens] = useState(items);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        {itens.map((item) => (
          <ItemCard key={item.index} name={item.name} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  link: {
    alignSelf: "flex-end",
    fontSize: 20,
    textDecorationLine: "underline",
    color: "blue",
    padding: 5,
    height: "10%",
  },
});
