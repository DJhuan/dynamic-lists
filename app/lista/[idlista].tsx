import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";

import PlusSvg from "../../src/lista/components/PlusSvg";
import LitterSvg from "../../src/lista/components/LitterSvg";
import ItemRepository from "@/database/ItemRepository";
import { DatabaseItemReturn } from "@/Types";
import ColumnContainer from "@/src/lista/components/ColumnContainer";
import CancelSvg from "@/src/components/CancelSvg";
import ListRepository from "@/database/ListRepository";

interface coluna {
  nomecoluna: string;
  oredemlista: number;
}

export default function ListScreen() {
  const navigation = useNavigation();

  const { idlista, nomelista } = useLocalSearchParams();
  const [items, setItems] = useState<DatabaseItemReturn[]>([]);
  const [editing, setEditing] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [itemname, setItemname] = useState("");
  const [cols, setCols] = useState<coluna[]>([]);

  const getColumns = async () => {
    setCols(await ListRepository.getAllColumns(Number(idlista)));
  };

  const newItem = async () => {
    if (itemname) {
      await ItemRepository.newItem(itemname, Number(idlista));
      setItemname("");
    }
  };

  const fetchItems = async () => {
    setItems(await ItemRepository.getAllItems(Number(idlista)));
  };

  const handlePlusAction = () => {
    if (editing) {
      newItem();
      setEditing(false);
    } else {
      if (deleting) {
        setDeleting(false);
      } else {
        setEditing(true);
      }
    }
  };

  const handleCancelAction = () => {
    if (editing) {
      setEditing(false);
    } else {
      setDeleting(true);
    }
  };

  // Updates the title of the screen
  useEffect(() => {
    navigation.setOptions({ title: nomelista });
    getColumns();
  }, []);

  // Updates the items
  useEffect(() => {
    fetchItems();
  }, [newItem]);

  return (
    <>
      {!editing ? (
        <ColumnContainer items={items} columns={cols} />
      ) : (
        <View style={styles.textContainer}>
          <Text style={styles.title}>Nome do item</Text>
          <TextInput
            placeholder="Nome do novo item"
            style={styles.itemInput}
            value={itemname}
            onChangeText={setItemname}
          />
        </View>
      )}

      <View style={styles.buttonContainer}>
        {!deleting ? (
          <TouchableOpacity onPress={handleCancelAction}>
            <View style={styles.deleteButton}>
              {!editing ? <LitterSvg /> : <CancelSvg />}
            </View>
          </TouchableOpacity>
        ) : null}

        <TouchableOpacity onPress={handlePlusAction}>
          <View style={styles.plusButton}>
            {!deleting ? <PlusSvg /> : <CancelSvg />}
          </View>
        </TouchableOpacity>
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
