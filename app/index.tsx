import { Link } from "expo-router";
import { View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/itens/ItemScreen" style={styles.link}>
        Ir para os itens
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  link: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "blue",
  },
});