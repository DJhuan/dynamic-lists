import { DatabaseListReturn } from "@/Types";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import PenSvg from "./PenSvg.jsx";
import ListRepository from "@/database/ListRepository";
import { useListContext } from "@/contexts/ListContext";
import { Link } from "expo-router";

export default function ListCard({ list }: { list: DatabaseListReturn }) {
  const { fetchLists } = useListContext();

  const deleteList = async () => {
    try {
      ListRepository.deleteList(list.idlista);
      fetchLists();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Link
      href={{ pathname: "/lista/[idlista]", params: { idlista: list.idlista, nomelista: list.nomelista } }}
      asChild
    >
      <TouchableOpacity style={styles.listItem}>
        <Text style={styles.listTitle}>{list.nomelista}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.listDescription}>{list.descricao}</Text>
          <TouchableOpacity onPress={deleteList}>
            <PenSvg />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 10,
    backgroundColor: "#71697A",
    borderRadius: 16,
  },
  listTitle: {
    fontSize: 20,
    padding: 3,
    fontWeight: "bold",
    backgroundColor: "#D9D9D9",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    boxShadow: "0px 6px 4px rgba(0, 0, 0, 0.25)",
  },
  listDescription: {
    fontSize: 16,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
});
