import { useState, useEffect, useContext } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ItemCard from "./ItemCard";
import { DatabaseItemReturn } from "@/Types";
import { ItemContext } from "@/context/ItemContext";
import { ItemContextType } from "@/Types";

interface ItemColumnProps {
  currentColumnId: number;
  deleting: boolean;
}

export default function ItemColumn({currentColumnId, deleting}: ItemColumnProps) {
  const {items} = useContext(ItemContext) as ItemContextType;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        {items.filter((i) => i.coluna === currentColumnId).map((item, index) => (
          <ItemCard
            key={index}
            item={item}
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
