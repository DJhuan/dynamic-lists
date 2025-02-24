import { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ItemCard from "./ItemCard";
import { DatabaseItemReturn } from "@/Types";

interface ItemColumnProps {
  columnItems: DatabaseItemReturn[];
}

export default function ItemColumn({ columnItems }: ItemColumnProps) {
  const [items, setItems] = useState<DatabaseItemReturn[]>(columnItems);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        {items.map((item, index) => (
          <ItemCard key={index} name={item.nomeitem} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#131112",
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
