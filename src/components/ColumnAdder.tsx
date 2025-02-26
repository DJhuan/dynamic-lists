import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

interface Column {
  nomecoluna: string;
}

interface ColumnAdderProps {
  onColumnsChange: (columns: Column[]) => void;
}

export default function ColumnAdder({ onColumnsChange }: ColumnAdderProps) {
  const [columns, setColumns] = useState<Column[]>([]);
  const [editingColumn, setEditingColumn] = useState<number | null>(null);
  const [newColumnName, setNewColumnName] = useState<string>("");
  const [newColumnInput, setNewColumnInput] = useState<string>("");

  useEffect(() => {
    onColumnsChange(columns);
  }, [columns]);

  const handleEditColumn = (index: number) => {
    setEditingColumn(index);
    const column = columns[index];
    if (column) {
      setNewColumnName(column.nomecoluna);
    }
  };

  const handleSaveColumn = async (index: number) => {
    const updatedColumns = [...columns];
    updatedColumns[index].nomecoluna = newColumnName;
    setColumns(updatedColumns);
    setEditingColumn(null);
    setNewColumnName("");
  };

  const handleDeleteColumn = (index: number) => {
    const updatedColumns = [...columns];
    updatedColumns.splice(index, 1);
    setColumns(updatedColumns);
  };

  const handleAddColumn = () => {
    if (newColumnInput.trim() !== "") {
      setColumns([...columns, { nomecoluna: newColumnInput }]);
      setNewColumnInput("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Colunas</Text>
      {columns.map((column, index) => (
        <View key={index} style={styles.columnContainer}>
          {editingColumn === index ? (
            <>
              <TextInput
                style={styles.input}
                value={newColumnName}
                onChangeText={setNewColumnName}
              />
              <TouchableOpacity onPress={() => handleSaveColumn(index)}>
                <Text style={styles.saveButton}>Salvar</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Text style={styles.columnName}>{column.nomecoluna}</Text>
              <TouchableOpacity onPress={() => handleEditColumn(index)}>
                <Text style={styles.editButton}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteColumn(index)}>
                <Text style={styles.deleteButton}>Deletar</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      ))}
      <View style={styles.addColumnContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nova coluna"
          value={newColumnInput}
          onChangeText={setNewColumnInput}
        />
        <TouchableOpacity onPress={handleAddColumn}>
          <Text style={styles.addButton}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#1E1B26",
  },
  title: {
    fontSize: 20,
    color: "#FFF",
    marginBottom: 20,
  },
  columnContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  columnName: {
    flex: 1,
    fontSize: 18,
    color: "#FFF",
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: "#71697A",
    borderRadius: 8,
    color: "#FFF",
  },
  editButton: {
    color: "#FFCB47",
    marginLeft: 10,
  },
  saveButton: {
    color: "#4CAF50",
    marginLeft: 10,
  },
  deleteButton: {
    color: "#FF4747",
    marginLeft: 10,
  },
  addColumnContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  addButton: {
    color: "#4CAF50",
    marginLeft: 10,
  },
});
