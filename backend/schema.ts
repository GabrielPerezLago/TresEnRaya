import {db} from './dbConnect'
export function initDataBase() {
    db.execSync(`
    CREATE TABLE IF NOT EXISTS PUNTUACIONES (
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        FICHA TEXT NOT NULL,
        DIFICULTAD TEXT NOT NULL CHECK (DIFICULTAD IN ('facil', 'dificil')),
        TIEMPO TEXT NOT NULL,
        VICTORIA INTEGER NOT NULL CHECK (VICTORIA IN (0,1))
    )
    `)
}