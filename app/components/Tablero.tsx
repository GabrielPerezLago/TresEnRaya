import {useState} from "react";
import {View} from "react-native";
import CeldaButton from "@/app/components/CeldaButton";
import juego from "@/app/controllers/JuegoController";

import {useGameContext} from "@/app/global/GameContext";
import {insertPuntuaciones} from "@/app/controllers/PuntuacionesController";
import {router} from "expo-router";


type Tbl = {
    userFicha: string
}




export function Tablero({userFicha}: Tbl) {
    const data = useGameContext()
    const diff = data?.dificultad
    const tableroInicial = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]
    const [tablero, setTablero] = useState(tableroInicial)

    const onClick = (i: number, j: number) => {
        if (tablero[i][j] !== "") return

        // poner ficha
        const copia = tablero.map(fila => [...fila])
        copia[i][j] = userFicha.toUpperCase()
        setTablero(copia)

        // coprobar victori a
        const resJugador = juego(copia, diff!, userFicha)
        if (typeof resJugador === 'string') {
            router.push({pathname: '/endView', params: {ficha: resJugador}})
            return
        }

        // IA
        const fichaIA = userFicha.toUpperCase() === 'X' ? 'O' : 'X';
        const resIA = juego(copia, diff!, fichaIA)
        if(!resIA) return;
        if (resIA != null) {
            if (typeof resIA === 'string') {
                router.push({pathname: '/endView', params: {ficha: resIA}})
            } else {
                setTablero(resIA)
            }
        }
        }


    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            {tablero.map((f, i) => (
                <View key={i} style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    {f.map((c, j) => (
                        <View key={j} style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <CeldaButton key={j} value={c} onPress={() => onClick(i, j)} disabled={c !== ""}/>
                        </View>
                    ))}
                </View>
            ))}
        </View>
    )
}




