import {View, Text} from "react-native";
import {router, useLocalSearchParams} from "expo-router";
import EndText from "@/app/components/EndText";
import {GameProvider, useGameContext} from "@/app/global/GameContext";
import AppButton from "@/app/components/AppButton";
import {useEffect} from "react";
import {filterData, insertPuntuaciones} from "@/app/controllers/PuntuacionesController";


export default function EndView() {
    const {ficha} = useLocalSearchParams()
    const game = useGameContext()
    if (typeof ficha !== "string") return

    useEffect(() => {
        if(!game) return
        const victoria = ficha === game.ficha ? true : false
        game.setVictoria(victoria)
        const data = filterData(
            {
                ficha: game.ficha.toUpperCase(),
                dificultad: game.dificultad,
                tiempo: game.tiempo,
                victoria: game.victoria

            })

        insertPuntuaciones(data.ficha, data.dificultad, data.tiempo, data.victoria)

    }, [ficha]);


    return (
        <View style={{flex: 1, justifyContent: 'space-evenly', alignItems: 'center'}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                {textCondition(ficha, game)}
                <Text style={{margin: 20, fontSize: 70, fontFamily: 'Kneware'}}>
                    {ficha}
                </Text>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', maxHeight: 100}}>
                <AppButton text={'salir'} color={'red'} margin={10} size={2} onPress={() => router.push('/')}/>
            </View>
        </View>
    )
}

function textCondition(ficha?: string, game?: any){
    if (ficha == null) return ;
    
    if (game?.ficha != ficha && ficha != 'empate') {
        return <EndText text={' Lo siento has perdido =( , ganó:  '} size={20} margin={10}/>
    } else if (game?.ficha == ficha) {
        return <EndText text={' ¡Enorabuena has GANADO!'} size={30} margin={5} />
    } else {
        return <EndText text={'¡¡Vaya!!'} size={30} margin={5}/>
    }
}

function SetVictoria(ficha?: string): void {
    if(ficha == null) return
    const game = useGameContext()
    const vic = ficha != game?.ficha
    switch (vic){
        case  true :
            game?.setVictoria(false)
            break
        case false :
            game?.setVictoria(true)
            break
    }
}