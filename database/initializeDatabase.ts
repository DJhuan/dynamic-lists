import { type SQLiteDatabase } from "expo-sqlite";

export async function initializeDatabase(database: SQLiteDatabase) {
  await database.execAsync(`
      CREATE TABLE IF NOT EXISTS lista (
        idlista INTEGER PRIMARY KEY AUTOINCREMENT,
        nomelista TEXT NOT NULL,
        descricao TEXT NULL
      );
    `);

  await database.execAsync(`
    CREATE TABLE IF NOT EXISTS coluna (
      idcoluna INTEGER PRIMARY KEY AUTOINCREMENT,
      idlista INTEGER NOT NULL,
      nomecoluna TEXT NOT NULL,
      ordemlista INTEGER NOT NULL,
      FOREIGN KEY (idlista)
        REFERENCES lista(idlista)
        ON DELETE CASCADE
        ON UPDATE CASCADE
    );
  `);

  await database.execAsync(`
    CREATE TABLE IF NOT EXISTS item (
      iditem INTEGER PRIMARY KEY AUTOINCREMENT,
      idlista INTEGER NOT NULL,
      nomeitem TEXT NOT NULL,
      coluna INTEGER NOT NULL,
      FOREIGN KEY (idlista)
        REFERENCES lista(idlista)
        ON DELETE CASCADE
        ON UPDATE CASCADE
    );
  `);

  await database.execAsync(`
    CREATE INDEX IF NOT EXISTS idx_item_idlista ON item (idlista);
  `);

  await database.execAsync(`
    CREATE INDEX IF NOT EXISTS idx_coluna_idlista ON coluna (idlista);
  `);
}
