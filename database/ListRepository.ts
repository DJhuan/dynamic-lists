import * as SQLite from "expo-sqlite";
import { List, DatabaseListReturn } from "@/Types";

async function newList({ nomelista: nomeLista, descricao, colunas }: List) {
  const db = await SQLite.openDatabaseAsync("dylists.db");

  const listStatement = await db.prepareAsync(
    "INSERT INTO lista (nomelista, descricao) VALUES (?, ?) RETURNING *"
  );
  const columnStatement = await db.prepareAsync(
    "INSERT INTO coluna (nomecoluna, idlista, ordemlista) VALUES (?, ?, ?)"
  );
  try {
    const resultIterator = await listStatement.executeAsync<DatabaseListReturn>(
      nomeLista,
      descricao
    );

    const idLista = <number>(await resultIterator.next()).value.idlista;
    console.log(idLista);
    colunas.map(async (coluna, ordemLista) => {
      await columnStatement.executeAsync(coluna, idLista, ordemLista);
    });
  } finally {
    await listStatement.finalizeAsync();
    await columnStatement.finalizeAsync();
  }
}

async function getList({
  idlista,
}: {
  idlista: number;
}): Promise<DatabaseListReturn | null> {
  const db = await SQLite.openDatabaseAsync("dylists.db");
  const result = await db.getFirstAsync(
    "SELECT * FROM lista WHERE idlista = ?",
    idlista
  );
  if (result) {
    return <DatabaseListReturn>result;
  } else {
    return null;
  }
}

async function deleteList(idLista: number) {
  const db = await SQLite.openDatabaseAsync("dylists.db");
  await db.runAsync("DELETE FROM lista WHERE idlista = ?", idLista);
  await db.runAsync("DELETE FROM coluna WHERE idlista = ?", idLista);
  await db.runAsync("DELETE FROM item WHERE idlista = ?", idLista);
}

async function updateList({ idlista, nomelista, descricao, colunas }: List) {
  const db = await SQLite.openDatabaseAsync("dylists.db");

  const listStatement = await db.prepareAsync(
    "UPDATE lista SET nomelista = ?, descricao = ? WHERE idlista = ? RETURNING *"
  );
  const columnStatement = await db.prepareAsync(
    "INSERT INTO coluna (nomecoluna, idlista, ordemlista) VALUES (?, ?, ?)"
  );
  try {
    if (idlista) {
      const resultIterator =
      await listStatement.executeAsync<DatabaseListReturn>(
        nomelista,
        descricao,
        idlista
      );
      
      const idLista = <number>(await resultIterator.next()).value.idlista;
      
      colunas.map(async (coluna, ordemLista) => {
        await columnStatement.executeAsync(coluna, idLista, ordemLista);
      });
    }
  } finally {
    await listStatement.finalizeAsync();
    await columnStatement.finalizeAsync();
  }
}

async function getAllLists(): Promise<DatabaseListReturn[]> {
  const db = await SQLite.openDatabaseAsync("dylists.db");
  return db.getAllAsync("SELECT * FROM lista");
}

async function getAllColumns(
  idLista: number
): Promise<{ idcoluna: number, nomecoluna: string; oredemlista: number }[]> {
  const db = await SQLite.openDatabaseAsync("dylists.db");
  return db.getAllAsync(
    "SELECT idcoluna, nomecoluna, ordemlista FROM coluna WHERE idlista = ?",
    idLista
  );
}

export default { newList, getAllLists, getAllColumns, deleteList, getList, updateList };
