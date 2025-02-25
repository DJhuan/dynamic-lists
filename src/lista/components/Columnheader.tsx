import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

import LArrowSvg from "./LArrowSvg";
import RArrowSvg from "./RArrowSvg";

interface columnHeaderProps {
  columnTitle: string;
  callback: (shift: number) => void;
}

export default function Columnheader({
  columnTitle,
  callback,
}: columnHeaderProps) {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.topc} onPress={() => callback(-1)}>
        <LArrowSvg />
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.headerText}>{columnTitle}</Text>
      </View>
      <TouchableOpacity style={styles.topc} onPress={() => callback(1)}>
        <RArrowSvg />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFCB47",
    alignItems: "center",
    padding: 5,
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  topc: {
    flexDirection: "row",
    height: "100%",
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
