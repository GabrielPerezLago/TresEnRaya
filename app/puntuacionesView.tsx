import {Animated, Text, View} from "react-native";
import CardApp from "@/app/components/CardApp";
import AppHeader from "@/app/components/AppHeader";
import {getPuntuaciones} from "@/app/controllers/PuntuacionesController";
import {useEffect, useState} from "react";
import ScrollView = Animated.ScrollView
import AppButton from "@/app/components/AppButton";
import {router} from "expo-router";


type Puntuacion = {
    ficha: string;
    dificultad: string;
    tiempo: string;
    victoria: boolean;
};

export default function puntuacionesView() {
    const [puntuaciones, setPuntuaciones] = useState<Puntuacion[]>([])
    useEffect(() => {
        async function findPuntuaciones() {
            const res = await getPuntuaciones()
            setPuntuaciones(res || [])
        }
        findPuntuaciones()
    }, []);
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', maxHeight: 200}}>
                <AppHeader tittle={'Puntuaciones'} renderLogo={false}/>
            </View>
            <ScrollView style={{flex: 1, width: '100%', borderStyle: 'solid', borderWidth: 0.2, borderRadius: 10}} contentContainerStyle={{alignItems: 'center'}}>
                {puntuaciones.map((p, i) => (
                    <CardApp key={i} ficha={p.ficha} dificultad={p.dificultad.toUpperCase()} tiempo={p.tiempo} victoria={p.victoria}/>
                ))}
            </ScrollView>
            <View style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center',
                maxHeight: 100
            }}>
                <AppButton text={'Salir'} color={'red'} margin={5} size={5} onPress={() => router.push('/')}/>
            </View>
        </View>
    )

}

