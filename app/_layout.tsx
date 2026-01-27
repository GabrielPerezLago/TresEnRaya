import {DarkTheme, DefaultTheme, NavigationContainer, ThemeProvider} from '@react-navigation/native';
import { GameProvider } from "@/app/global/GameContext";
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import {useFonts} from "expo-font";
import {ActivityIndicator, View} from "react-native";
import {useEffect} from "react";
import {initDb} from "@/app/utils/DB/DBController";




export default function RootLayout() {

  useEffect(() => {
      initDb()
      console.log('Base de datos lista')
  }, []);
  const [fonts] = useFonts({
      Kneware :  require('../assets/fonts/kneware.ttf'),
      Pacifico: require('../assets/fonts/pacifico.ttf')
  })

    if (!fonts) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

  return (
      <GameProvider>
        <ThemeProvider value={DefaultTheme}>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
              <Stack.Screen name="dificultadesView" options={{headerShown: false}} />
              <Stack.Screen name="fichasView" options={{headerShown: false}} />
              <Stack.Screen name="juegoView" options={{headerShown: false}} />
              <Stack.Screen name="endView" options={{headerShown: false}}/>
              <Stack.Screen name="puntuacionesView" options={{headerShown: false}}/>
          </Stack>
          <StatusBar style="auto" />
        </ThemeProvider>
      </GameProvider>
  );
}
