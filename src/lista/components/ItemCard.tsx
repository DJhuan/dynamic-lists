import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import LArrowSvg from "./LArrowSvg";
import RArrowSvg from "./RArrowSvg";
import LitterSvg from "./LitterSvg";
import { useContext } from "react";
import { DatabaseItemReturn, ItemContextType } from "@/Types";
import { ItemContext } from "@/context/ItemContext";

interface ItemCardProps {
  item: DatabaseItemReturn;
  deleting: boolean;
}

export default function ItemCard({ item, deleting }: ItemCardProps) {
  const { deleteItem } = useContext(ItemContext) as ItemContextType;

  const handleDelete = () => {
    deleteItem(item.iditem);
  };

  if (deleting) {
    return (
      <View style={styles.container}>
        <Text style={styles.itemName}>{item.nomeitem}</Text>
        <TouchableOpacity style={styles.topc} onPress={() => handleDelete()}>
          <LitterSvg color="#FF4747" />
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.topc}>
          <LArrowSvg />
        </TouchableOpacity>
        <Text style={styles.itemName}>{item.nomeitem}</Text>
        <TouchableOpacity style={styles.topc}>
          <RArrowSvg />
        </TouchableOpacity>
      </View>
    );
  }
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
