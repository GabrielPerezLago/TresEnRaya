import {Text, View} from "react-native";
import {func} from "ts-interface-checker";
import {use, useEffect, useState} from "react";
import CardText from "@/app/components/CardText";

type Card = {
    ficha:string,
    dificultad:string,
    tiempo:string,
    victoria: boolean
}

export default function CardApp({ficha, dificultad, tiempo, victoria}: Card) {
    return (
        <View style={
            {
                flex:1,
                flexDirection: 'row',
                justifyContent:'space-between',
                alignItems: 'center',
                borderStyle: 'solid',
                borderColor: 'black',
                borderWidth: 0.5,
                maxHeight: 50,
                maxWidth: 400,
                borderRadius: 20,
                marginVertical:5

            }
        }>
            <Ficha text={ficha}/>
            <Dificultad text={dificultad} />
            <Tiempo text={tiempo}/>
            <Victoria vic={victoria}/>
        </View>
    )
}

type DefaultPropt = { text: string}
function Ficha({text}: DefaultPropt) {
    return <CardText>{text}</CardText>
}

function Tiempo({text}: DefaultPropt) {
    return <CardText>{text}</CardText>
}

function Dificultad({text}: DefaultPropt) {
    const [col, setCol] = useState('green')
    useEffect(() => {
        if(text.toLowerCase() == 'facil') {
            setCol('green')
        } else {
            setCol('orange')
        }
    }, [text]);
    return <CardText color={col}>{text}</CardText>
}
type Vic = { vic: boolean }
function Victoria({vic}: Vic) {
    const [text, setText] = useState('')
    const [col, setCol] = useState('green')
    useEffect(() => {
        if(vic == true) {
            setText('Victoria')
            setCol('green')
        } else {
            setText('Derrota')
            setCol('red')
        }
    }, [vic]);
    return <CardText color={col}>{text}</CardText>
}




