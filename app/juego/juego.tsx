import {useState} from "react";
import {View} from "react-native";
import { celdaButton } from "@/app/components/AppButton";



const tableroInicial = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]

const fichaIA = (ficha: string)=> {
    switch(ficha) {
        case 'X' : return 'O';
        case 'O' : return 'X';
    }
}

export default function printTablero() {
    const [tablero, setTablero] = useState(tableroInicial)

    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            {tablero.map((f, i) => (
                <View key={i} style={{flex:1, flexDirection: 'row'}}>
                    {f.map((c, j) => (
                        <View key={j} style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            {celdaButton('')}
                        </View>
                    ))}
                </View>
            ))}
        </View>
    )
}




