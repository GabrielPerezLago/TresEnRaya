import {Pressable, Text} from "react-native";
import {Href, router} from "expo-router";
import {useGameContext} from "@/app/global/GameContext";

type FBtn = {
    ficha: string,
    color: string,
    route?: Href
}

export default function FichaButton({ficha, color, route = './'}: FBtn) {
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