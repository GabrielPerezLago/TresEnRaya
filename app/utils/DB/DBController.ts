import * as SQLite from 'expo-sqlite'

export const db = SQLite.openDatabaseSync('TresEnRaya')

export async function initDb() {
    await db.execAsync(`
    CREATE TABLE IF NOT EXISTS PUNTUACIONES(
                                               ID INTEGER  PRIMARY KEY AUTOINCREMENT,
                                               FICHA TEXT NOT NULL,
                                               DIFICULTAD TEXT NOT NULL,
                                               TIEMPO TEXT NOT NULL,
                                               VICTORIA INTEGER NOT NULL
    )
`)
}


