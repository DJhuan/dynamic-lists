import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { DatabaseItemReturn } from "@/Types";

import Columnheader from "./Columnheader";
import ItemColumn from "./ItemColumn";

interface coluna {
  nomecoluna: string;
  oredemlista: number;
}

interface ColumnContainerProps {
  items: DatabaseItemReturn[];
  columns: coluna[];
  onDelete: (idItem: number) => void;
  deleting: boolean;
}

export default function ColumnContainer({
  items,
  columns,
  onDelete,
  deleting,
}: ColumnContainerProps) {
  const [colNumber, setColnumber] = useState(0);

  const updateColNumber = (shift: number) => {
    const newCol = colNumber + shift;
    if (newCol >= columns.length) {
      setColnumber(columns.length - 1);
    } else if (newCol < 0) {
      setColnumber(0);
    } else {
      setColnumber(newCol);
    }
  };

  function filteredItems(idcol: number) {
    return items.filter((item) => item.coluna === idcol);
  }

  // When the items are still loading
  if (columns.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.noColumnsText}>Nenhuma coluna disponível</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Columnheader
        columnTitle={columns[colNumber].nomecoluna}
        callback={updateColNumber}
      />
      <ItemColumn
        columnItems={filteredItems(colNumber)}
        onDeleteItem={onDelete}
        deleting={deleting}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131112",
  },
  header: {
    backgroundColor: "#FFCB47",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  scrollContainer: {
    padding: 10,
  },
  noColumnsText: {
    color: "#FFF",
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },
});
