import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import LArrowSvg from "./LArrowSvg";
import RArrowSvg from "./RArrowSvg";

export default function ItemCard({ name }: { name: string }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.topc}>
        <LArrowSvg />
      </TouchableOpacity>
      <Text style={styles.itemName}>{name}</Text>
      <TouchableOpacity style={styles.topc}>
        <RArrowSvg />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#131112",
    borderBottomWidth: 1,
    borderBottomColor: "#B9D8C2",
    paddingLeft: 5,
    paddingRight: 5,
  },
  itemName: {
    fontSize: 20,
    color: "#B9D8C2",
    textAlign: "left",
    flex: 3,
    paddingLeft: 30,
  },
  topc: {
    flexDirection: "row",
    height: "100%",
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
