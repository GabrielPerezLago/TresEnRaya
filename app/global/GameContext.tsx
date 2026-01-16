import {createContext, useContext, useState} from "react";

type GameContextType = {
    ficha: string,
    dificultad: string,
    tiempo: string,
    victoria: boolean,
    setFicha: (f: string) => void,
    setDificultad: (d: string) => void,
    setTiempo: (t: string) => void,
    setVictoria: (v: boolean) => void
}


const GameContext = createContext<GameContextType | null>(null)

export function GameProvider({children}: {children: React.ReactNode}){
    const [ficha, setFicha] = useState(`x`)
    const [dificultad, setDificultad] = useState(`facil`)
    const [tiempo, setTiempo] = useState(`00:00`)
    const [victoria, setVictoria] = useState(false)


    // @ts-ignore
    return (
        <GameContext.Provider value={
            {
                ficha,
                dificultad,
                tiempo,
                victoria,
                setFicha,
                setDificultad,
                setTiempo,
                setVictoria
            }
        }>
            {children}
        </GameContext.Provider>
    )
}


export function useGameContext() {
    return useContext(GameContext)
}
