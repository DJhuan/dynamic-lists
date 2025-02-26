import { Stack } from "expo-router";
import { Suspense } from "react";
import { SQLiteProvider } from "expo-sqlite";
import { initializeDatabase } from "@/database/initializeDatabase";
import LoadingDatabase from "../src/components/LoadingDatabase";
import { ListProvider } from "@/contexts/ListContext";

import Toast from "react-native-toast-message";

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
              name="EditListScreen"
              options={{ title: "Editar lista" }}
            />
            <Stack.Screen name="lista/[idlista]" options={{ title: "Lista" }} />
          </Stack>
          <Toast />
        </ListProvider>
      </SQLiteProvider>
    </Suspense>
  );
}
