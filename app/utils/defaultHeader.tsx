import {Text, View} from "react-native";
import {Image} from "expo-image";

export default function defaultHeader(tittle : string, color: string = 'black' ) {
    return <View style={{flex: 1, justifyContent: "center", alignItems: "center", margin: 30, marginTop: 100}}>
                <Image source={require("../../assets/images/logo_tres_raya.png")} style={{width:200, height:200, marginTop:10}}/>
                <Text style={{fontSize: 50, fontFamily: 'Kneware', textAlign: 'center', color: color }}>
                    {tittle}
                </Text>
            </View>
}