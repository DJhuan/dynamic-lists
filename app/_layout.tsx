import { Stack } from "expo-router";
import { Suspense } from "react";
import { SQLiteProvider } from "expo-sqlite";
import { initializeDatabase } from "@/database/initializeDatabase";
import LoadingDatabase from "./components/LoadingDatabase";
import { ListProvider } from "@/contexts/ListContext";

export default function RootLayout() {
  return (
    <Suspense fallback={<LoadingDatabase />}>
      <SQLiteProvider databaseName="dylists.db" onInit={initializeDatabase}>
        <ListProvider>
          <Stack>
            <Stack.Screen name="index" options={{ title: "Tela inicial" }} />
            <Stack.Screen
              name="NewListScreen"
              options={{ title: "Nova lista" }}
            />
            <Stack.Screen
              name="itens/ItemScreen"
              options={{ title: "Itens da lista" }}
            />
            <Stack.Screen
              name="itens/NewItemScreen"
              options={{ title: "Itens da lista" }}
            />
          </Stack>
        </ListProvider>
      </SQLiteProvider>
    </Suspense>
  );
}
