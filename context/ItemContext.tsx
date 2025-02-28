import ItemRepository from "@/database/ItemRepository";
import { ItemContextType, DatabaseItemReturn } from "@/Types";
import React, { createContext, useState, useEffect } from "react";

export const ItemContext = createContext<ItemContextType | null>(null);

const ItemProvider: React.FC<{
  children: React.ReactNode;
  idlista: number;
}> = ({ children, idlista }) => {
  const [items, setItems] = useState<DatabaseItemReturn[]>([]);

  const fetchItems = async () => {
    const items = await ItemRepository.getAllItems(idlista);
    setItems(items);
  };

  const addItem = async (nomeitem: string, idcoluna: number) => {
    await ItemRepository.newItem(nomeitem, idlista, idcoluna);
  };

  const deleteItem = async (iditem: number) => {
    await ItemRepository.deleteItem(iditem);
  };

  const moveItem = async (iditem: number, idcoluna: number) => {
    await ItemRepository.moveItem(iditem, idcoluna);
  };

  useEffect(() => {
    fetchItems();
  }, [addItem, deleteItem, moveItem]);

  return (
    <ItemContext.Provider
      value={{ idlista, items, fetchItems, addItem, deleteItem, moveItem }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export default ItemProvider;
