import ItemRepository from "@/database/ItemRepository";
import { ItemContextType, DatabaseItemReturn } from "@/Types";
import React, { createContext, useState, useEffect } from "react";

export const ItemContext = createContext<ItemContextType | null>(null);

const ItemProvider: React.FC<{ children: React.ReactNode; idlista: number }> = ({ children, idlista }) => {
  const [items, setItems] = useState<DatabaseItemReturn[]>([]);

  const fetchItems = async () => {
    const items = await ItemRepository.getAllItems(idlista);
    setItems(items);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <ItemContext.Provider value={{ idlista, items, fetchItems }}>
      {children}
    </ItemContext.Provider>
  );
};

export default ItemProvider;