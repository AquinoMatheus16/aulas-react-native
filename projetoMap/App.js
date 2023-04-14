import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Pin } from "./src/components/Pin";

/*
SP: -23.5492243 -46.5813785
DF: -15.8080374 -47.8750231
CG: -20.4695225 -54.6016767
*/

export default function App() {

  const [regionMove, setRegionMove] = useState({ latitude: '', longitude: '' });

  const [region, setRegion] = useState({
    latitude: -15.8080374,
    longitude: -47.8750231,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [markers, setMarkers] = useState([
    { key: 0, aviso: 'Cuidado', coords: { latitude: -15.8080374, longitude: -47.8750231 }, pinColor: '#ff0000' },
    { key: 1, aviso: 'Tranquilo', coords: { latitude: -15.8380374, longitude: -47.8850231 }, pinColor: '#6FFF00' },
    { key: 2, aviso: 'Atenção', coords: { latitude: -15.8480374, longitude: -47.8950231 }, pinColor: '#FF6A00' }
  ]);

  const [keyCount, setKeyCount] = useState(3);

  const ChangeRegion = (latitude, longitude) => {
    setRegion({
      latitude,
      longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  }

  const MoveMap = (region) => {
    setRegionMove({ latitude: region.latitude, longitude: region.longitude });
  }

  const ClickedRegion = (event) => {
    // alert('Latitude clicada: ' + event.nativeEvent.coordinate.latitude +
    //   '\nLongitude clicada: ' + event.nativeEvent.coordinate.longitude
    // );

    markers.push({
      // key: markers.length,
      key: keyCount,
      aviso: `Novo aviso (${keyCount - 2})`,
      coords: {
        latitude: event.nativeEvent.coordinate.latitude,
        longitude: event.nativeEvent.coordinate.longitude
      },
      pinColor: '#FFFF00'
    });

    setKeyCount(keyCount + 1);
  }

  return (
    <View style={styles.container}>

      <View style={styles.containerButton}>
        <Button title='Brasília' onPress={() => ChangeRegion(-15.8080374, -47.8750231)} />
        <Button title='São Paulo' onPress={() => ChangeRegion(-23.5492243, -46.5813785)} />
        <Button title='Campo Grande' onPress={() => ChangeRegion(-20.4695225, -54.6016767)} />
      </View>

      <Text style={styles.textRegion}>{region.latitude} | {region.longitude}</Text>

      <Text style={styles.text}>Latitude atual: {regionMove.latitude}</Text>
      <Text style={styles.text}>Longitude atual: {regionMove.longitude}</Text>

      <MapView
        // onMapReady={() => Alert.alert('Mapa carregado')}
        onRegionChangeComplete={MoveMap}
        onPress={ClickedRegion}
        // standard | satellite | hybrid
        // mapType='satellite'
        // scrollEnabled={false}
        // zoomEnabled={false}
        // rotateEnabled={false}
        // showsTraffic={true}
        style={styles.map}
        region={region}
      >

        {markers.map(marker => (
          // <Marker key={marker.key} coordinate={marker.coords}>
          //   <Pin aviso={marker.aviso} corFundo={marker.pinColor} />
          // </Marker>

          <Marker
            key={marker.key}
            coordinate={marker.coords}
            pinColor={marker.pinColor}
            title={marker.aviso}
          />

          // <Marker
          //   key={marker.key}
          //   coordinate={marker.coords}
          //   // pinColor={marker.pinColor}
          //   // title={marker.aviso}
          //   image={require('./src/assets/carro.png')}
          // />
        ))}

        {/* <Marker
          coordinate={region}
          title="Meu carro"
          description="Carro dmedededefnr frnvu"
          pinColor={"#1700E6"}
        /> */}

      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  map: {
    width: '100%',
    height: '80%',
  },

  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 10,
  },

  textRegion: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 10
  },

  text: {
    fontSize: 15,
    marginBottom: 5,
    color: '#000000'
  }
});
