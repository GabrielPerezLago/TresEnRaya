import {Pressable, Text} from "react-native";
import {useState} from "react";
type CBtn = {
    value: string,
    onPress?: () => void,
    disabled?: boolean
}

export default function CeldaButton({value, onPress, disabled = false }: CBtn){

    return <Pressable onPress={ onPress }
                      style={{backgroundColor: 'blue', width: 90, height: 90, borderRadius: 20, alignItems: 'center', justifyContent:'center'}}
                        disabled={disabled}>
        <Text style={{color: 'white', justifyContent: 'center', alignItems: 'center', fontSize: 50, fontFamily: 'Kneware'}}>
            {value}
        </Text>
    </Pressable>
}