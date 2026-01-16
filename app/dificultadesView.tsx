import {Button, Pressable, Text, View} from "react-native";
import {insertPutuacion} from "@/backend/insetPuntuacion";
import defaultHeader from "@/app/utils/defaultHeader";
import onCreateButton from "@/app/utils/defaultAppButton";
import { useGameContext } from "@/app/global/GameContext";
import {router} from "expo-router";


export default function Activity(){
    const data = useGameContext()
    return (
        <View style={{flex:1, justifyContent: 'space-evenly', margin: 10}}>
            {defaultHeader('Dificultad', 'blue')}
            <View style={{flex:1, justifyContent: 'center', margin:5, alignItems: 'center'}}>
                {onCreateButton('Facil', 'green', 10, 18, () => {
                    data?.setDificultad('facil')
                    router.push('/fichasView')
                })}
                {onCreateButton('Dificil', 'orange', 10, 18 ,  () => {
                    data?.setDificultad('dificil')
                    router.push('/fichasView')
                })}
                {onCreateButton('Salir', 'red', 10,18 ,  () => { router.push('/') })}
            </View>
        </View>
    );
}

function guardarPuntuacion(){
    insertPutuacion('x', 'facil', '00:90', true)
}