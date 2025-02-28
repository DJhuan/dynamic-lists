import { useEffect, useState } from "react";
import { useNavigation, useLocalSearchParams, router } from "expo-router";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import ColumnContainer from "@/src/lista/components/ColumnContainer";

import PlusSvg from "@/src/lista/components/PlusSvg";
import LitterSvg from "@/src/lista/components/LitterSvg";
import CancelSvg from "@/src/components/CancelSvg";
import CheckSvg from "@/src/components/CheckSvg";

export default function ListScreen() {
  const navigation = useNavigation();
  const { nomelista } = useLocalSearchParams();
  const [columnid, setColumnid] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Updates the title of the screen, columns and items when the screen is loaded
  useEffect(() => {
    navigation.setOptions({ title: nomelista });
  }, []);

  const handleCancelAction = () => {
    setDeleting(!deleting);
  };

  const handlePlusAction = () => {
    if (deleting) {
      setDeleting(false);
    } else {
      router.push({
        pathname: "./AddItem",
        params: { idcoluna: columnid },
      });
    }
  };

  const handleColumnChange = (idcoluna: number) => {
    setColumnid(idcoluna);
  };

  return (
    <View style={{ flex: 1 }}>
      <ColumnContainer
        deleting={deleting}
        onColumnChange={handleColumnChange}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleCancelAction}>
          <View style={styles.deleteButton}>
            {deleting ? <CancelSvg /> : <LitterSvg />}
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handlePlusAction()}>
          <View style={styles.plusButton}>
            {deleting ? <CheckSvg /> : <PlusSvg />}
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
