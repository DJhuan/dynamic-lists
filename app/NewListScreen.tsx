import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, StyleSheet } from "react-native";
import ConfirmButton from "./components/ConfirmButton";
import CancelButton from "./components/CancelButton";
import ListRepository from "../database/ListRepository";

export default function NewListScreen() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigation = useNavigation();

  const newList = async () => {
    if (title) {
      await ListRepository.newList({
        nomelista: title,
        descricao: description,
        colunas: ["c1"],
      });
      navigation.goBack();
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Nome da Lista</Text>
        <TextInput
          placeholder="Minha lista 1"
          style={styles.titleInput}
          value={title}
          onChangeText={setTitle}
        />
        <Text style={styles.title}>Descrição</Text>
        <TextInput
          placeholder="Descrição da minha lista 1"
          style={styles.descriptionInput}
          value={description}
          onChangeText={setDescription}
        />
        <View style={styles.buttonContainer}>
          <CancelButton onPress={() => navigation.goBack()} />
          <ConfirmButton onPress={newList} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    alignSelf: "flex-start",
    marginLeft: 20,
  },
  titleInput: {
    width: "90%",
    padding: 20,
    margin: 10,
    backgroundColor: "#71697A",
    borderRadius: 16,
    boxShadow: "inset 4 3 3 #534A5C",
  },
  descriptionInput: {
    width: "90%",
    height: 200,
    padding: 20,
    margin: 10,
    backgroundColor: "#71697A",
    borderRadius: 16,
    boxShadow: "inset 4 3 3 #534A5C",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    position: "absolute",
    alignItems: "center",
    right: 10,
    bottom: 15,
  },
});
