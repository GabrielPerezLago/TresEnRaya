import {Text, TextStyle} from "react-native";

type CText = {
    color?:string
    children:React.ReactNode,
}
export default function CardText({color = 'black', children}: CText) {
    return <Text style={{color: color, marginHorizontal: 20, fontSize: 30, fontWeight: 'bold', paddingVertical:10, paddingHorizontal: 1}}>{children}</Text>
}