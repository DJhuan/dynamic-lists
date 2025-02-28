import ItemProvider from "@/context/ItemContext";
import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

export default function ListTabs() {
  const { idlista } = useLocalSearchParams();
  const [isProviderReady, setIsProviderReady] = useState(false);

  useEffect(() => {
    if (idlista) {
      setIsProviderReady(true);
    }
  }, []);

  if (!isProviderReady) {
    return null;
  }

  return (
    <ItemProvider idlista={Number(idlista)}>
      <Stack
        screenOptions={{ headerShown: false, animation: "fade_from_bottom" }}
      >
        <Stack.Screen name={"ListScreen"} />
        <Stack.Screen name={"AddItem"} />
      </Stack>
    </ItemProvider>
  );
}
