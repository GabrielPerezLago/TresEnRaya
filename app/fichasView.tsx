import {Pressable, Text, View} from "react-native";
import defaultHeader from "@/app/utils/defaultHeader";
import onCreateButton from "@/app/utils/defaultAppButton";
import {Href, router} from "expo-router";
import { useGameContext } from "@/app/global/GameContext";

export default function MiComponente() {
    return (
            <View style={{flex: 1, justifyContent: 'center' }}>
                {defaultHeader('Selecciona tu ficha')}
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: 20}}>
                    {createFichaButton('X', 'green', '/juegoView', )}
                    {createFichaButton('O', 'blue', '/juegoView')}
                </View>
                <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                    {onCreateButton('Atras', 'red', 10, 18, () => {
                        router.push('/dificultadesView')
                    })}
                </View>
            </View>
    );

    function createFichaButton(ficha: string, color: string, route: Href = './') {
        const data = useGameContext()
        return <Pressable style={{backgroundColor: color , padding: 30, borderRadius:30, paddingHorizontal:40, margin: 20 }} onPress={() =>{
            data?.setFicha(ficha);
            router.push(route)
        }}>
            <Text style={{fontSize: 30, fontFamily: 'Kneware'}}>
                {ficha}
            </Text>
        </Pressable>
    }
}