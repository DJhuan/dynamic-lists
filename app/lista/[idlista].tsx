import { useEffect, useState } from "react";
import { useNavigation, useLocalSearchParams } from "expo-router";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import ColumnContainer from "@/src/lista/components/ColumnContainer";
import ItemProvider from "@/context/ItemContext";

import PlusSvg from "@/src/lista/components/PlusSvg";
import LitterSvg from "@/src/lista/components/LitterSvg";
import CancelSvg from "@/src/components/CancelSvg";

export default function ListScreen() {
  const navigation = useNavigation();
  const { nomelista, idlista } = useLocalSearchParams();
  const [editing, setEditing] = useState(false);
  const [deleting, setDeleting] = useState(false);

  // Updates the title of the screen, columns and items when the screen is loaded
  useEffect(() => {
    navigation.setOptions({ title: nomelista });
  }, []);

  const handlePlusAction = () => {
    if (editing) {
      //newItem();
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

  return (
    <View style={{ flex: 1 }}>
      <ItemProvider idlista={Number(idlista)}>
        <ColumnContainer deleting={deleting} />
      </ItemProvider>

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
