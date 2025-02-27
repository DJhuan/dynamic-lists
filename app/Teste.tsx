import ItemProvider, { ItemContext } from "@/context/ItemContext";
import { ItemContextType } from "@/Types";
import { useContext, useEffect } from "react";
import { View, Text } from "react-native";

export default function Teste() {
  return (
    <ItemProvider idlista={35}>
      <TesteComponents />
    </ItemProvider>
  );
}

function TesteComponents() {
  const { items } = useContext(ItemContext) as ItemContextType;

  return (
    <View>
      <Text>Teste</Text>
      <View>
        {items.map((item) => (
          <Text key={item.iditem}>{item.nomeitem}</Text>
        ))}
      </View>
    </View>
  );
}
