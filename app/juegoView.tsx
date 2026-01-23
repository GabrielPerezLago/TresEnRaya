import {Text, View} from "react-native";
import {useEffect, useState} from "react";
import onCreateButton from "@/app/components/AppButton";
import {useGameContext} from "@/app/global/GameContext";
import confirmarSalida from "@/app/utils/alertController";
import printTablero from "@/app/juego/juego";
import AppButton from "@/app/components/AppButton";


export function Activity() {
    const [seconds, setSeconds] = useState(0);
    const data = useGameContext()

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000)
        return () => clearInterval(interval)
    }, []);



    return (
        <View style={{flex: 1, justifyContent: 'center', margin: 20}}>
            <View id={`header`} style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: 20
            }}>
                <Text style={{color: 'red', fontSize: 30, fontFamily: 'Pacifico', margin: 30}}>
                    {formateTiempo(seconds)}
                </Text>
                <Text style={{color: 'blue', fontSize: 30, fontFamily: 'Pacifico', margin: 30}}>
                    {data?.dificultad.toUpperCase()}
                </Text>
            </View>
            {printTablero()}
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <AppButton text={'Pasar Turno >>'} color={'orange'} margin={5} size={15}/>
                <AppButton text={'Rendirse'} color={'red'} margin={5} size={5} onPress={ () => confirmarSalida('¿Estas Seguro que deseas RENDIRTE?' ) }/>
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