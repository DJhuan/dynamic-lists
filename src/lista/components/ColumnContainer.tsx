import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import {
  DatabaseColumnReturn,
  SurroundingColumns,
  ItemContextType,
} from "@/Types";

import Columnheader from "./Columnheader";
import ColumnRepository from "@/database/ColumnRepository";
import { ItemContext } from "@/context/ItemContext";
import ItemColumn from "./ItemColumn";

interface ColumnContainerProps {
  deleting: boolean;
  onColumnChange: (idcoluna: number) => void;
}

export default function ColumnContainer({
  deleting,
  onColumnChange,
}: ColumnContainerProps) {
  const [colNumber, setColnumber] = useState(0);
  const [columns, setColumns] = useState<DatabaseColumnReturn[]>([]);
  const { idlista } = useContext(ItemContext) as ItemContextType;

  useEffect(() => {
    fetchColumns();
  }, []);

  useEffect(() => {
    if (columns.length > 0) {
      onColumnChange(columns[colNumber].idcoluna);
    }
  }, [colNumber, columns]);

  const fetchColumns = async () => {
    ColumnRepository.getAllColumns(idlista).then((columns) => {
      setColumns(columns);
      onColumnChange(columns[colNumber].idcoluna);
    });
  };

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

  const getSurroundingColumns = () => {
    const current = columns[colNumber].idcoluna;
    let next = null;
    if (colNumber < columns.length - 1) {
      next = columns[colNumber + 1].idcoluna;
    }
    let prev = null;
    if (colNumber > 0) {
      prev = columns[colNumber - 1].idcoluna;
    }
    return { prev, current, next };
  };

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
        surroundingColumns={getSurroundingColumns() as SurroundingColumns}
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
  noColumnsText: {
    color: "#FFF",
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },
});
