import { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ItemCard from "./ItemCard";
import { DatabaseItemReturn } from "@/Types";

interface ItemColumnProps {
  columnItems: DatabaseItemReturn[];
  onDeleteItem: (idItem: number) => void;
  deleting: boolean;
}

export default function ItemColumn({
  columnItems,
  onDeleteItem,
  deleting,
}: ItemColumnProps) {
  const [items, setItems] = useState<DatabaseItemReturn[]>(columnItems);

  useEffect(() => {
    setItems(columnItems);
  }, [columnItems]);

  useEffect(() => {}, [deleting]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        {items.map((item, index) => (
          <ItemCard
            key={index}
            item={item}
            onDelete={onDeleteItem}
            deleting={deleting}
          />
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
