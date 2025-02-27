import * as SQLite from "expo-sqlite";
import { DatabaseColumnReturn } from "@/Types";


async function getAllColumns(
  idLista: number
): Promise<DatabaseColumnReturn[]> {
  const db = await SQLite.openDatabaseAsync("dylists.db");
  return db.getAllAsync(
    "SELECT idcoluna, idlista, nomecoluna, ordemlista FROM coluna WHERE idlista = ?",
    idLista
  );
}

async function updateColumn(id: number, newColumnName: string) {
  const db = await SQLite.openDatabaseAsync("dylists.db");
  await db.runAsync(
    "UPDATE coluna SET nomecoluna = ? WHERE idcoluna = ?",
    newColumnName,
    id
  );
}

async function deleteColumn(idcoluna: number) {
  const db = await SQLite.openDatabaseAsync("dylists.db");

  try {
    await db.runAsync("DELETE FROM coluna WHERE idcoluna = ?", [idcoluna]);
    await db.runAsync("DELETE FROM item WHERE coluna = ?", [idcoluna]);
    await db.runAsync(
      "UPDATE coluna SET ordemlista = ordemlista - 1 WHERE ordemlista > ?",
      [idcoluna]
    );
  } catch (error) {
    console.log("deleteColumn", error);
  }
}

export default { getAllColumns, updateColumn, deleteColumn };
