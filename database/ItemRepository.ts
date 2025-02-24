import * as SQLite from "expo-sqlite";
import { DatabaseItemReturn } from "@/Types";

async function getAllItems(idLista: number): Promise<DatabaseItemReturn[]> {
  const db = await SQLite.openDatabaseAsync("dylists.db");
  return db.getAllAsync("SELECT * FROM item WHERE idlista = ?", idLista);
}

export default { getAllItems};