import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import ItemColumn from "./components/ItemColumn";
import PlusSvg from "../../assets/svg/Mais.svg";
import LitterSvg from "../../assets/svg/Lixeira.svg";

export default function ItemScreen() {
  const [items, setItems] = useState([
    { name: "joaoasd", index: 1, column: 0 },
    { name: "maria", index: 2, column: 0 },
  ]);

  return (
    <>
      <ItemColumn items={items} />
      <View style={styles.buttonContainer}>
        <Link href="/itens/NewItemScreen">
          <View style={styles.deleteButton}>
            <LitterSvg />
          </View>
        </Link>

        <Link href="/itens/NewItemScreen">
          <View style={styles.plusButton}>
            <PlusSvg />
          </View>
        </Link>
      </View>
    </>
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
});
