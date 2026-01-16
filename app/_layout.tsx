import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { GameProvider } from "@/app/global/GameContext";
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import {useFonts} from "expo-font";
import {ActivityIndicator, View} from "react-native";
import {useEffect} from "react";
import {initDataBase} from "@/backend/schema";



export default function RootLayout() {
  const colorScheme = useColorScheme();

  useEffect(() => {
      initDataBase()
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
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
              <Stack.Screen name="dificultadesView" options={{headerShown: false}} />
              <Stack.Screen name="fichasView" options={{headerShown: false}} />
              <Stack.Screen name="juegoView" options={{headerShown: false}} />
            <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
          </Stack>
          <StatusBar style="auto" />
        </ThemeProvider>
      </GameProvider>
  );
}
