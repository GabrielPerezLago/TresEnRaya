import {Button, Pressable, Text, View} from "react-native";
import {Href, router} from "expo-router";
import AppButton from "@/app/components/AppButton";
import AppHeader from "@/app/components/AppHeader";

export default function MiComponente() {
    return (
        <View style={{flex: 1, justifyContent: 'center' }}>
            <AppHeader tittle={'Tres en Raya'} />
            <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
                <AppButton text={'Iniciar'} color={'green'} margin={10} size={18} onPress={() => router.push('/dificultadesView') }/>
                <AppButton text={'Puntuaciones'} color={'blue'} margin={10} size={18} onPress={() =>  router.push('./')}/>
            </View>
        </View>
    );
}

