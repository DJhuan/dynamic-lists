import { View, Text, TextInput, StyleSheet } from "react-native";
import { useState, useContext, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

import { ItemContext } from "@/context/ItemContext";
import { ItemContextType } from "@/Types";

import CancelSvg from "@/src/components/CancelSvg";
import PlusSvg from "../../src/lista/components/PlusSvg";
import Toast from "react-native-toast-message";
import ConfirmButton from "@/src/components/ConfirmButton";

export default function AddItem() {
  const [itemname, setItemname] = useState("");
  const { addItem } = useContext(ItemContext) as ItemContextType;
  const { idcoluna } = useLocalSearchParams();

  const handleAddItem = () => {
    if (!itemname) {
      Toast.show({
        type: "error",
        text1: "Erro",
        text2: "O nome do item não pode ser vazio",
      });
    } else {
      addItem(itemname, Number(idcoluna));
      router.navigate("./ListScreen");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Nome do item</Text>
        <TextInput
          placeholder="Nome do novo item"
          style={styles.itemInput}
          value={itemname}
          onChangeText={setItemname}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() =>
            router.navigate({
              pathname: "./ListScreen",
              params: { idcoluna: idcoluna },
            })
          }
        >
          <View style={styles.deleteButton}>
            <CancelSvg />
          </View>
        </TouchableOpacity>

          <ConfirmButton onPress={handleAddItem} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    position: "absolute",
    alignItems: "center",
    right: 10,
    bottom: 15,
    gap: 10,
  },
  plusButton: {
    backgroundColor: "#FFCB47",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    width: 80,
    height: 80,
  },
  deleteButton: {
    backgroundColor: "#FF4747",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    width: 60,
    height: 60,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E1B26",
  },
  title: {
    fontSize: 20,
    alignSelf: "flex-start",
    marginLeft: 20,
    color: "#FFF",
  },
  itemInput: {
    width: "90%",
    padding: 20,
    margin: 10,
    backgroundColor: "#71697A",
    borderRadius: 16,
    boxShadow: "inset 4 3 3 #534A5C",
  },
});
