import {Pressable, Text, View} from "react-native";
import defaultHeader from "@/app/components/AppHeader";
import onCreateButton from "@/app/components/AppButton";
import {Href, router} from "expo-router";
import { useGameContext } from "@/app/global/GameContext";
import AppHeader from "@/app/components/AppHeader";
import AppButton from "@/app/components/AppButton";
import FichaButton from "@/app/components/FichasButton";

export default function FichasView() {
    return (
            <View style={{flex: 1, justifyContent: 'center' }}>
                <AppHeader tittle={'Selecciona tu ficha'}/>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: 20}}>
                    <FichaButton ficha={'X'} color={'green'} route={'/juegoView'}/>
                    <FichaButton ficha={'O'} color={'blue'} route={'/juegoView'}/>
                </View>
                <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                    <AppButton text={'Atras'} color={'red'} margin={10} size={18} onPress={ () => router.push('/dificultadesView')} />
                </View>
            </View>
    );
}