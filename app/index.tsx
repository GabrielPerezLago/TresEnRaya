import {Button, Pressable, Text, View} from "react-native";
import {Image} from "expo-image";
import {push} from "expo-router/build/global-state/routing";
import {Href, router} from "expo-router";
import defaultHeader from "@/app/utils/defaultHeader";
import onCreateButton from "@/app/utils/defaultAppButton";

export default function MiComponente() {
    return (
        <View style={{flex: 1, justifyContent: 'center' }}>
            {defaultHeader('Tres en Raya')}
            <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
            {onCreateButton('Iniciar', 'green', 10, 18,  () => { router.push('/dificultadesView') })}
            {onCreateButton('Puntuaciones', 'blue', 10, 18,() => { router.push('./') })}
        </View>
        </View>
    );
}

