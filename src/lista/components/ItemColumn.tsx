import { useState, useEffect, useContext } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ItemCard from "./ItemCard";
import { ItemContext } from "@/context/ItemContext";
import { ItemContextType, SurroundingColumns } from "@/Types";

interface ItemColumnProps {
  surroundingColumns: SurroundingColumns;
  deleting: boolean;
}

export default function ItemColumn({
  surroundingColumns,
  deleting,
}: ItemColumnProps) {
  const { items } = useContext(ItemContext) as ItemContextType;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        {items
          .filter((i) => i.coluna === surroundingColumns.current)
          .map((item, index) => (
            <ItemCard key={index} item={item} deleting={deleting} surroundingColumns={surroundingColumns}/>
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
