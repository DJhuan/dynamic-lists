import { Link, Stack } from "expo-router";
import { View, StyleSheet, Text } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Hummm... Me perdi!" }} />
      <View style={styles.container}>
            <Text style={styles.notFound}>404</Text>
            <Text style={styles.text}>Whoops... Parece que você se perdeu!</Text>
        <Link style={styles.link} href="/">Voltar para tela inicial!</Link>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#131112",
  },
  link: {
    borderRadius: 100,
    padding: 20,
    fontSize: 20,
    backgroundColor: "#FFCB47",
  },
  text: {
    fontSize: 20,
    color: "#B9D8C2",
  },
  notFound: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#FF4747",
  }
});
