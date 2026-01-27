import { db } from '../utils/DB/DBController'
import {exists} from "node:fs";
import {throws} from "node:assert";

export async function getPuntuaciones(): Promise<data[]> {
    const puntuaciones = await db.getAllAsync(`SELECT FICHA, DIFICULTAD, TIEMPO, VICTORIA FROM PUNTUACIONES`)

    return puntuaciones.map((p: any) => ({
        ficha: p.FICHA,
        dificultad: p.DIFICULTAD,
        tiempo: p.TIEMPO,
        victoria: p.VICTORIA === 1 ? true : false
    }))
}

export function insertPuntuaciones(ficha: string, diff: string, time: string, victoria: number){
    db.runAsync(
        `INSERT INTO PUNTUACIONES (FICHA, DIFICULTAD, TIEMPO, VICTORIA)
         VALUES (?, ?, ?, ?)`,
        [ficha, diff, time, victoria]
    )
}


type data = {
    ficha: string,
    dificultad: string,
    tiempo: string,
    victoria: boolean
}

type DATA = {
    ficha: string,
    dificultad: string,
    tiempo: string,
    victoria: number
}

export function filterData(data: data): DATA{

    if (data.ficha !== 'X' && data.ficha !== 'O') {
        throw new Error(`Ficha: ${data.ficha} no válida`)
    }

    const vicNum = data.victoria ? 1 : 0

    return {
        ficha: data.ficha,
        dificultad: data.dificultad,
        tiempo: data.tiempo,
        victoria: vicNum
    }
}


