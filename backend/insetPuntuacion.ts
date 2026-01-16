import { db } from './dbConnect'

export function insertPutuacion(ficha: string, dificultad: string, tiempo: string, victoria: boolean) {
    let vic: number = victoria == true ? 1 : 0 ;
    db.execSync(`INSERT INTO PUNTUACIONES (FICHA, DIFICULTAD, TIEMPO, VICTORIA) VALUES ('${ficha}', '${dificultad}', '${tiempo}', ${vic} );`);
}