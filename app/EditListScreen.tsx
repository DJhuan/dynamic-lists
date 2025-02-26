import { useEffect, useState } from "react";
import { useNavigation, useLocalSearchParams } from "expo-router";
import { View, Text, TextInput, StyleSheet } from "react-native";
import ConfirmButton from "../src/components/ConfirmButton";
import CancelButton from "../src/components/CancelButton";
import ListRepository from "../database/ListRepository";
import { useListContext } from "../contexts/ListContext";
import LitterButton from "@/src/components/LitterButton";
import Toast from "react-native-toast-message";

export default function NewListScreen() {
  const { idlista } = useLocalSearchParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigation = useNavigation();
  const { fetchLists } = useListContext();

  useEffect(() => {
    if (idlista) {
      fetchList();
    }
  }, []);

  const fetchList = async () => {
    const list = await ListRepository.getList({ idlista: Number(idlista) });
    if (list) {
      navigation.setOptions({ title: list.nomelista });
      setTitle(list.nomelista);
      setDescription(list.descricao);
    }
  };

  const newList = async () => {
    if (title) {
      await ListRepository.updateList({
        idlista: Number(idlista),
        nomelista: title,
        descricao: description,
        colunas: [],
      });
      fetchLists();
      navigation.goBack();
    }
  };

  const deleteList = async () => {
    console.log("deleteList");
    if (idlista) {
      await ListRepository.deleteList(Number(idlista));
      fetchLists();
      navigation.goBack();
    }
  };

  const showToast = () => {
    Toast.show({
      type: "info",
      text1: "Apagando um item",
      text2: "Para apagar, segure o botão de apagar",
    });
  };

  return (
    <View style={styles.container}>
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
      <View style={styles.buttonContainer}>
        <LitterButton
          onPress={() => showToast()}
          onLongPress={() => deleteList()}
        />
        <CancelButton onPress={() => navigation.goBack()} />
        <ConfirmButton onPress={newList} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#1E1B26",
    padding: 30,
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
    flex: 1,
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
    position: "absolute",
    alignItems: "center",
    right: 10,
    bottom: 15,
    gap: 10,
  },
});
