import {Text, View} from "react-native";
import {Image} from "expo-image";

type Header = {
    tittle: string,
    color?: string,
}

export default function AppHeader( {tittle, color = 'black'}: Header ) {
    return <View style={{flex: 1, justifyContent: "center", alignItems: "center", margin: 30, marginTop: 100}}>
                <Image source={require("../../assets/images/logo_tres_raya.png")} style={{width:200, height:200, marginTop:10}}/>
                <Text style={{fontSize: 50, fontFamily: 'Kneware', textAlign: 'center', color: color }}>
                    {tittle}
                </Text>
            </View>
}