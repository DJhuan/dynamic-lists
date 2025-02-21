import React, { createContext, useState, useContext, useEffect } from "react";
import ListRepository from "@/database/ListRepository";
import { DatabaseListReturn } from "@/Types";

interface ListContextProps {
  lists: DatabaseListReturn[];
  fetchLists: () => void;
}

const ListContext = createContext<ListContextProps | undefined>(undefined);

interface ListProviderProps {
  children: React.ReactNode;
}

export const ListProvider: React.FC<ListProviderProps> = ({ children }) => {
  const [lists, setLists] = useState<DatabaseListReturn[]>([]);

  const fetchLists = async () => {
    try {
      const allLists: DatabaseListReturn[] = await ListRepository.getAllLists();
      setLists(allLists);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchLists();
  }, []);

  return (
    <ListContext.Provider value={{ lists, fetchLists }}>
      {children}
    </ListContext.Provider>
  );
};

export const useListContext = () => {
  const context = useContext(ListContext);
  if (!context) {
    throw new Error("useListContext must be used within a ListProvider");
  }
  return context;
};