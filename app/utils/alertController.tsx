import {Alert} from "react-native";

export default function confirmarSalida(mensaje: string, onPress?: () => void) {
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
                onPress: () => onPress?.(),
                style: 'destructive'
            }
        ],
        {cancelable: true}
    )
}