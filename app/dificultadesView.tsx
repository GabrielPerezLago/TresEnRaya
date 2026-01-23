import {Button, Pressable, Text, View} from "react-native";
import {insertPutuacion} from "@/backend/insetPuntuacion";
import defaultHeader from "@/app/components/AppHeader";
import onCreateButton from "@/app/components/AppButton";
import { useGameContext } from "@/app/global/GameContext";
import {router} from "expo-router";
import AppHeader from "@/app/components/AppHeader";
import AppButton from "@/app/components/AppButton";


export default function Activity(){
    const data = useGameContext()
    return (
        <View style={{flex:1, justifyContent: 'space-evenly', margin: 10}}>
            <AppHeader tittle={'Dificultades'} color={'blue'}/>
            <View style={{flex:1, justifyContent: 'center', margin:5, alignItems: 'center'}}>
                <AppButton text={'Facil'} color={'green'} onPress={() => {
                    data?.setDificultad('facil')
                    router.push('/fichasView')}
                }/>
                <AppButton text={'Dificil'} color={'orange'} onPress={() => {
                    data?.setDificultad('facil')
                    router.push('/fichasView')}}/>

                <AppButton text={'Salir'} color={'red'} onPress={() => router.push('/')}/>
            </View>
        </View>
    );
}

function guardarPuntuacion(){
    insertPutuacion('x', 'facil', '00:90', true)
}