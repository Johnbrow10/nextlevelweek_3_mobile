
import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Callout } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';


import mapMarker from './src/images/map-marker.png';

export default function App() {

  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito700: Nunito_700Bold,
    Nunito_800ExtraBold
  });

  // se as fontes ainda nao carregaram no app ele vai mostrar uma tela em branca
  if (!fontsLoaded) {
      return null;  
  }

  return (
    <View style={styles.container}>

      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -23.7239963,
          longitude: -46.7579951,
          latitudeDelta: 0.009,
          longitudeDelta: 0.009,

        }}
      >
        <Marker
          icon={mapMarker}
          coordinate={{
            latitude: -23.7239963,
            longitude: -46.7579951,
          }}
          calloutAnchor={{
            x: 2.7,
            y: 0.8,
          }}
        >
          <Callout tooltip onPress={() => { }}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Lar dos Guerreiros</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
      <View style={styles.footer}>
        <Text style={styles.footerText}> 2 Orfanatos encontrados</Text>
        <TouchableOpacity style={styles.createorphanageButton} onPress={() => { }}>
          <Feather name="plus" size={20} color="#FFF"></Feather>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('screen').height,
  },

  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    justifyContent: 'center',
    elevation: 3,

  },

  calloutText: {
    color: '#0089a5',
    fontSize: 14,
  },

  footer: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 32,
    backgroundColor: '#FFF',
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
  },

  footerText: {
    color: '#8fa7b3',
    fontFamily: ' Nunito_700',

  },

  createorphanageButton: {
    width: 56,
    height: 56,
    backgroundColor: '#15c3d6',
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',

  },

});
