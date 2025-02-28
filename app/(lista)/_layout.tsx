import { Stack } from "expo-router";

export default function ListTabs() {
  return (
    <Stack screenOptions={{ headerShown: false, animation: "fade_from_bottom" }}>
      <Stack.Screen name={"[idlista]/ListScreen"} />
      <Stack.Screen name={"[idlista]/AddItem"} />
    </Stack>
  );
}
