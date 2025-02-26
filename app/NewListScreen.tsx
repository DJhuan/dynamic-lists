import { useState } from "react";
import { useNavigation } from "expo-router";
import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import ConfirmButton from "../src/components/ConfirmButton";
import CancelButton from "../src/components/CancelButton";
import ListRepository from "../database/ListRepository";
import { useListContext } from "../contexts/ListContext";
import ColumnEditor from "@/src/components/ColumnAdder";
import Toast from "react-native-toast-message";

interface Column {
  nomecoluna: string;
}

export default function NewListScreen() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [columns, setColumns] = useState<Column[]>([]);

  const navigation = useNavigation();
  const { fetchLists } = useListContext();

  const newList = async () => {
    if (title && columns.length > 0) {
      await ListRepository.newList({
        nomelista: title,
        descricao: description,
        colunas: columns.map(column => column.nomecoluna),
      });
      fetchLists(); // Updates the list of lists globally
      navigation.goBack();
    } else {
      Toast.show({
        type: "error",
        text1: "Erro",
        text2: "Título e colunas são obrigatórios",
      });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Nome da Lista</Text>
        <TextInput
          maxLength={60}
          placeholder="Minha lista 1"
          style={styles.titleInput}
          value={title}
          onChangeText={setTitle}
        />
        <Text style={styles.title}>Descrição</Text>
        <TextInput
          maxLength={120}
          multiline={true}
          placeholder="Descrição da minha lista 1"
          style={styles.descriptionInput}
          value={description}
          onChangeText={setDescription}
        />
        <ColumnEditor onColumnsChange={setColumns}/>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <CancelButton onPress={() => navigation.goBack()} />
        <ConfirmButton onPress={newList} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1B26",
  },
  scrollContainer: {
    padding: 30,
    paddingBottom: 100, // Adiciona espaço para o contêiner de botões
  },
  title: {
    fontSize: 20,
    alignSelf: "flex-start",
    color: "#FFF",
    padding: 10,
  },
  titleInput: {
    padding: 20,
    backgroundColor: "#71697A",
    borderRadius: 16,
    boxShadow: "inset 4 3 3 #534A5C",
  },
  descriptionInput: {
    padding: 20,
    backgroundColor: "#71697A",
    borderRadius: 16,
    boxShadow: "inset 4 3 3 #534A5C",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 10,
    padding: 20,
  },
});
