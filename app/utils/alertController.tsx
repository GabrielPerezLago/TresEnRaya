import {Alert} from "react-native";
import {router} from "expo-router";

export default function  confirmarSalida(mensaje: string) {
    Alert.alert(
        'Salir',
        mensaje,
        [
            {
                text: 'Cancelar',
                style: 'cancel'
            },
            {
                text: 'Aceptar',
                onPress: () => router.push('/'),
                style: 'destructive'
            }
        ],
        {cancelable: true}
    )
}