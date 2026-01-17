import {useState} from "react";
import {Text, View} from "react-native";

const tableroInicial = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]

export default function printTablero() {
    const [tablero, setTablero] = useState(tableroInicial)

    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            {tablero.map((f, i) => (
                <View key={i} style={{flex:1, flexDirection: 'row'}}>
                    {f.map((c, j) => (
                        <View key={j} style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', width: 50, height: 80, margin: 10, padding: 10}}>
                            <Text>{c}</Text>
                        </View>
                    ))}
                </View>
            ))}
        </View>
    )
}