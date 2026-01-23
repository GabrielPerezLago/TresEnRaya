export default function juegoLogic(tablero: string[][], fichJugador: string, fichaIA: string){


}


type ResultadoJuego = {fin: false} | {fin: true , ficha: 'X'} | {fin:true, ficha: 'O'} | {fin: true, ficha: null}

function checkVictoria(tablero: string[][]){

    for(let i = 0; i < tablero.length; i++) {
        if(
            tablero[i][0] == 'X' &&
            tablero[i][1] == 'X' &&
            tablero[i][2] == 'X'
        ) {
            return {
                fin: true,
                ficha: 'X'
            }
        } else if (
            tablero[i][0] == 'O' &&
            tablero[i][1] == 'O' &&
            tablero[i][2] == 'O'
        ) {
            return {
                fin: true,
                ficha: 'O'
            }
        }

        if (
            tablero[i][0] != '' &&
            tablero[i][1] != '' &&
            tablero[i][2] != '' &&
            tablero[i][3] != '' &&
            tablero[i][4] != '' &&
            tablero[i][5] != '' &&
            tablero[i][6] != '' &&
            tablero[i][7] != '' &&
            tablero[i][8] != ''
        ) {
            return {
                fin: true,
                ficha: null
            }
        }

        return {fin: false}
    }
}