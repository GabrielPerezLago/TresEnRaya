import {Pressable, Text} from "react-native";
import { useGameContext } from "@/app/global/GameContext";


type Button = {
    text: string,
    color: string,
    margin?: number,
    size?: number,
    onPress?: () => void
}
export default function AppButton({ text, color, margin = 10, size = 18, onPress } : Button) {
    const importData = useGameContext()
    return <Pressable
        onPress={ onPress }
        style={{margin: margin, backgroundColor: color, padding: size, borderRadius: 20, width:200}}>
        <Text style={{color: 'white', fontSize: 20, textAlign: 'center', fontFamily: 'Pacifico'}}>{text}</Text>
    </Pressable>
}


export function celdaButton(text: string, onClick?: () => void){
    return <Pressable onPress={ () => onClick?.()}
            style={{backgroundColor: 'blue', width: 90, height: 90, margin: 10, borderRadius: 20}}>
        <Text style={{color: 'white'}}>
            {text}
        </Text>
    </Pressable>
}

