import * as SQLite from "expo-sqlite";
import { DatabaseItemReturn } from "@/Types";

async function getAllItems(idLista: number): Promise<DatabaseItemReturn[]> {
  const db = await SQLite.openDatabaseAsync("dylists.db");
  return db.getAllAsync("SELECT * FROM item WHERE idlista = ?", idLista);
}

async function newItem(nomeitem : string, idlista : number){
  const db = await SQLite.openDatabaseAsync("dylists.db");

  const itemStatement = await db.prepareAsync("INSERT INTO item (idlista, nomeitem, coluna) VALUES (?, ?, 0)");
  try {
    await itemStatement.executeAsync(idlista, nomeitem);
  } finally {
    await itemStatement.finalizeAsync();
  }
}

export default { getAllItems, newItem};