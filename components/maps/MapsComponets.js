import { View, StyleSheet } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';
export default function MapsComponets({latitude, longitude}) {
  return (
    <View>
      <MapView
        style={styles.map}
        //specify our coordinates.
        initialRegion={{
          latitude:latitude,
          longitude:longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}

      >
        <MapView.Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}

        />
        </MapView>
        </View>
  )
}

const styles = StyleSheet.create({

    map: {
      ...StyleSheet.absoluteFillObject,
    }
  });
  