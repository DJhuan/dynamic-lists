import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Link, useLocalSearchParams, useNavigation } from "expo-router";
import ItemColumn from "../../src/lista/components/ItemColumn";
import PlusSvg from "../../src/lista/components/PlusSvg";
import LitterSvg from "../../src/lista/components/LitterSvg";
import { DatabaseItemReturn } from "@/Types";

export default function ListScreen() {
  const [items, setItems] = useState<DatabaseItemReturn[]>([]);
  const { idlista, nomelista } = useLocalSearchParams();

  const navigation = useNavigation();
  const fetchItems = async () => {
    // const response = await ItemRepository.getAllItems(Number(idlista));
    // setItems(response);
  };

  useEffect(() => {
    navigation.setOptions({ title: nomelista });
    fetchItems();
  }, []);

  return (
    <>
      <ItemColumn columnItems={items} />
      <View style={styles.buttonContainer}>
        <Link href="/lista/NewItemScreen">
          <View style={styles.deleteButton}>
            <LitterSvg />
          </View>
        </Link>

        <Link href="/lista/NewItemScreen">
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
