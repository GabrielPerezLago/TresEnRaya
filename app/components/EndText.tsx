import {Text, View} from "react-native";

type Txt = {
    text: string
    size?: number,
    margin?: number,
    family?: string,
}
export default function EndText({text, size = 100, margin = 20, family = 'Pacifico'}: Txt) {
    return <Text style={{margin: margin, fontFamily: family, fontSize: size}}> {text} </Text>

}