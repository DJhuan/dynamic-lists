import { View, Text, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";

import CancelSvg from "@/src/components/CancelSvg";
import PlusSvg from "../../../src/lista/components/PlusSvg";

export default function AddItem() {
  const [itemname, setItemname] = useState("");

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
        <TouchableOpacity onPress={() => router.navigate("./ListScreen")}>
          <View style={styles.deleteButton}>
            <CancelSvg />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <View style={styles.plusButton}>
            <PlusSvg />
          </View>
        </TouchableOpacity>
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
