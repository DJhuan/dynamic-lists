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
