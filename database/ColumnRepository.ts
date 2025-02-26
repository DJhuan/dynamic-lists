import * as SQLite from "expo-sqlite";

async function getAllColumns(
  idLista: number
): Promise<{ idcoluna: number; nomecoluna: string; oredemlista: number }[]> {
  const db = await SQLite.openDatabaseAsync("dylists.db");
  return db.getAllAsync(
    "SELECT idcoluna, nomecoluna, ordemlista FROM coluna WHERE idlista = ?",
    idLista
  );
}

async function updateColumn(id: number, newColumnName: string) {
  const db = await SQLite.openDatabaseAsync("dylists.db");
  await db.runAsync("UPDATE coluna SET nomecoluna = ? WHERE idcoluna = ?", newColumnName, id);
}

async function deleteColumn(id: number) {
  const db = await SQLite.openDatabaseAsync("dylists.db");
  await db.runAsync("DELETE FROM coluna WHERE idcoluna = ?", id); 
}

export default { getAllColumns, updateColumn, deleteColumn };
