import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import ColumnRepository from "@/database/ColumnRepository";

interface Column {
  idcoluna: number;
  nomecoluna: string;
  oredemlista: number;
}

interface ColumnEditorProps {
  idlista: number;
}

const ColumnEditor: React.FC<ColumnEditorProps> = ({ idlista }) => {
  const [columns, setColumns] = useState<Column[]>([]);
  const [editingColumn, setEditingColumn] = useState<number | null>(null);
  const [newColumnName, setNewColumnName] = useState<string>("");

  useEffect(() => {
    fetchColumns();
  }, []);

  const fetchColumns = async () => {
    if (idlista){
        const cols = await ColumnRepository.getAllColumns(idlista);
        setColumns(cols);
    }
  };

  const handleEditColumn = (id: number) => {
    setEditingColumn(id);
    const column = columns.find((col) => col.idcoluna === id);
    if (column) {
      setNewColumnName(column.nomecoluna);
    }
  };

  const handleSaveColumn = async (id: number) => {
    await ColumnRepository.updateColumn(id, newColumnName);
    setEditingColumn(null);
    setNewColumnName("");
    fetchColumns();
  };

  const handleDeleteColumn = async (id: number) => {
    await ColumnRepository.deleteColumn(id);
    fetchColumns();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Colunas</Text>
      {columns.map((column) => (
        <View key={column.idcoluna} style={styles.columnContainer}>
          {editingColumn === column.idcoluna ? (
            <>
              <TextInput
                style={styles.input}
                value={newColumnName}
                onChangeText={setNewColumnName}
              />
              <TouchableOpacity onPress={() => handleSaveColumn(column.idcoluna)}>
                <Text style={styles.saveButton}>Salvar</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Text style={styles.columnName}>{column.nomecoluna}</Text>
              <TouchableOpacity onPress={() => handleEditColumn(column.idcoluna)}>
                <Text style={styles.editButton}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteColumn(column.idcoluna)}>
                <Text style={styles.deleteButton}>Deletar</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#1E1B26",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
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
});

export default ColumnEditor;