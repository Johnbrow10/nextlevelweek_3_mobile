
import React from 'react';

import { useFonts } from 'expo-font';
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';
import Routes from './src/routes';


export default function App() {

  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold
  });

  // se as fontes ainda nao carregaram no app ele vai mostrar uma tela em branca
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Routes />
  );
}


