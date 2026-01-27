import {Text, View} from "react-native";
import {useEffect, useState} from "react";
import onCreateButton from "@/app/components/AppButton";
import {useGameContext} from "@/app/global/GameContext";
import confirmarSalida from "@/app/utils/alertController";
import AppButton from "@/app/components/AppButton";
import {Tablero} from "@/app/components/Tablero";
import {router} from "expo-router";


export default function Activity() {
    const [seconds, setSeconds] = useState(0);
    const data = useGameContext()

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000)
        return () => clearInterval(interval)
    }, []);

    useEffect(() => {
        const time = formateTiempo(seconds)
        data?.setTiempo(time)
    }, [seconds]);

    let ficha = data?.ficha
    ficha ==  null ? ficha = "" : ficha;

    return (
        <View style={{flex: 1, justifyContent: 'center', marginHorizontal: 20, marginTop: -70}}>
            <View id={`header`} style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 20}}>
                <Text style={{color: 'red', fontSize: 30, fontFamily: 'Pacifico', margin: 0}}>
                    {formateTiempo(seconds)}
                </Text>
                <Text style={{color: 'blue', fontSize: 30, fontFamily: 'Pacifico', margin: 0}}>
                    {data?.dificultad.toUpperCase()}
                </Text>
            </View>

            <Tablero userFicha={ficha}/>

            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>

                <AppButton text={'Rendirse'} color={'red'} margin={5} size={5}
                           onPress={() => confirmarSalida('¿Estas Seguro que deseas RENDIRTE?', () => router.push('/'))}/>
            </View>
        </View>
    );


    function formateTiempo(segundos: number) {
        const minutos = Math.floor(segundos / 60)
        const seg = segundos % 60


        const mm = minutos.toString().padStart(2, '0')
        const ss = seg.toString().padStart(2, '0')
        return `${mm}:${ss}`
    }


}