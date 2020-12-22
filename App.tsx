
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from'react-native-maps';

export default function App() {
  return (
    <View style={styles.container}> 
    
     <MapView 
     style={styles.map}
     provider={PROVIDER_GOOGLE}
     initialRegion={{
       latitude:-23.7239963,
       longitude:-46.7579951,
       latitudeDelta:0.006,
       longitudeDelta:0.006,

     }}
     />
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
  }
});
