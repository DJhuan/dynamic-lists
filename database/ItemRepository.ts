import * as SQLite from "expo-sqlite";
import { DatabaseItemReturn } from "@/Types";

async function getAllItems(idLista: number): Promise<DatabaseItemReturn[]> {
  const db = await SQLite.openDatabaseAsync("dylists.db");
  return db.getAllAsync("SELECT * FROM item WHERE idlista = ?", idLista);
}

async function newItem(nomeitem : string, idlista : number, idcoluna : number){
  const db = await SQLite.openDatabaseAsync("dylists.db");

  const itemStatement = await db.prepareAsync("INSERT INTO item (idlista, nomeitem, coluna) VALUES (?, ?, ?)");
  try {
    await itemStatement.executeAsync(idlista, nomeitem, idcoluna);
  } finally {
    await itemStatement.finalizeAsync();
  }
}

async function deleteItem(idItem: number): Promise<void> {
  const db = await SQLite.openDatabaseAsync("dylists.db");

  const deleteStatement = await db.prepareAsync("DELETE FROM item WHERE iditem = ?");
  try {
    await deleteStatement.executeAsync(idItem);
  } finally {
    await deleteStatement.finalizeAsync();
  }
}

export default { getAllItems, newItem, deleteItem};