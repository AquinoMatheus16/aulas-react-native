import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
import { requestLocationPermission } from "./src/components/LocationPermissions";

/*
SP: -23.5492243 -46.5813785
DF: -15.8080374 -47.8750231
CG: -20.4695225 -54.6016767
*/

export default function App() {

  const [region, setRegion] = useState(null);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  useEffect(() => {

    const fetchLocation = async () => {
      try {
        if (navigator.geolocation) {
          const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          });

          setRegion({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.0143,
            longitudeDelta: 0.0134,
          });

        } else {
          console.log("Geolocalização não está disponível");
          setRegion({
            latitude: -22.8898,
            longitude: -43.2907,
            latitudeDelta: 0.0143,
            longitudeDelta: 0.0134,
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchLocation();
  }, []);

  return (
    <View style={styles.container}>

      <MapView
        minZoomLevel={16}
        style={styles.map}
        region={region}
        showsUserLocation
      />

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
