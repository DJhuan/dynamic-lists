import { Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";
import { initializeDatabase } from "@/database/initializeDaatbase";

export default function RootLayout() {
  return (
    <SQLiteProvider databaseName="dylists.db" onInit={initializeDatabase}>
      <Stack> 
        <Stack.Screen name="index" options={{ title: "Tela inicial" }} />
        <Stack.Screen name="itens/ItemScreen" options={{ title: "Itens da lista" }} />
        <Stack.Screen name="itens/NewItemScreen" options={{ title: "Itens da lista" }} />
      </Stack>
    </SQLiteProvider>
  );
}
