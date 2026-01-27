import {replaceNameInUTF8File} from "@react-native-community/cli/build/commands/init/editTemplate";
import {fewActivities} from "@react-native-community/cli-config-android/build/config/__fixtures__/android";
import {func} from "ts-interface-checker";
import fullWindowOverlayNativeComponent from "react-native-screens/src/fabric/FullWindowOverlayNativeComponent";

export default function juego(tablero: string[][], diff: string, ficha: string): string[][] | string | null {
    const res = checkResultado(tablero)
    if (res != null) {
        return res;
    }

    if (diff === 'facil') {
        return facilIA(tablero, ficha);
    }

    if (diff === 'dificil') {
        return dificilIA(tablero, ficha);
    }

    return tablero;
}

function checkFinPartida(tablero: string[][]): boolean {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (tablero[i][j] === "") {
                return false;
            }
        }
    }
    return true;
}


function facilIA(tablero: string[][], ficha: string) {
    let fila: number;
    let columna: number;
    do {
        fila = Math.floor(Math.random() * 3)
        columna  = Math.floor(Math.random() * 3)
    } while (
        !checkCelda(tablero, fila, columna) )

    const copiaTablero = copiarTablero(tablero)
    copiaTablero[fila][columna] = ficha

    return copiaTablero
}

function dificilIA(tablero: string[][], fichaIA:string) {
    const rival: string = fichaIA === 'X' ? 'O' : 'X';

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (tablero[i][j] === "") {
                const copia: string[][] = copiarTablero(tablero);
                copia[i][j] = fichaIA;

                if (checkResultado(copia) === fichaIA) {
                    return copia;
                }
            }
        }
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (tablero[i][j] === "") {
                const copia: string[][] = copiarTablero(tablero);
                copia[i][j] = rival;

                if (checkResultado(copia) === rival) {
                    const bloqueado: string[][] = copiarTablero(tablero);
                    bloqueado[i][j] = fichaIA;
                    return bloqueado;
                }
            }
        }
    }

    if (tablero[1][1] === "") {
        const nuevo: string[][] = copiarTablero(tablero);
        nuevo[1][1] = fichaIA;
        return nuevo;
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (tablero[i][j] === "") {
                const nuevo: string[][] = copiarTablero(tablero);
                nuevo[i][j] = fichaIA;
                return nuevo;
            }
        }
    }

    return tablero
}


function checkCelda(tbl: string[][], fila: number, columna: number): boolean{
    if (tbl[fila][columna] === "") {
        return true
    } else {
        return false
    }
}

function copiarTablero(tablero: string[][]){
    return tablero.map(fila => [...fila])
}


function checkResultado(tablero: string[][]): string | null {
    const combinaciones: number[][][] = [
        [[0,0],[0,1],[0,2]],
        [[1,0],[1,1],[1,2]],
        [[2,0],[2,1],[2,2]],
        [[0,0],[1,0],[2,0]],
        [[0,1],[1,1],[2,1]],
        [[0,2],[1,2],[2,2]],
        [[0,0],[1,1],[2,2]],
        [[0,2],[1,1],[2,0]],
    ];

    for (let i = 0; i < combinaciones.length; i++) {
        const [[a,b],[c,d],[e,f]] = combinaciones[i];
        const valor: string = tablero[a][b];

        if (
            valor !== "" &&
            valor === tablero[c][d] &&
            valor === tablero[e][f]
        ) {
            return valor;
        }
    }

    if (checkFinPartida(tablero)) {
        return 'empate';
    }

    return null;
}