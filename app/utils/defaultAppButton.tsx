import {Pressable, Text} from "react-native";
import { useGameContext } from "@/app/global/GameContext";

export default function onCreateButton( text: string, color: string, margin: number = 10 , size: number = 18,  onClick?: () => void) {
    const importData = useGameContext()
    return <Pressable
        onPress={ () => onClick?.() }
        style={{margin: margin, backgroundColor: color, padding: size, borderRadius: 20, width:200}}>
        <Text style={{color: 'white', fontSize: 20, textAlign: 'center', fontFamily: 'Pacifico'}}>{text}</Text>
    </Pressable>
}