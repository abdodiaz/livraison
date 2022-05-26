import { View, StyleSheet,Button } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';
import Loading from '../loading/Loading';
import MarkerComponents from './MarkerComponets';
import SignOut from '../signout/SignOut';


export default function MapsComponets(props) {

  const { latitude, longitude } = props;
  typeof (latitude, longitude)
  if (latitude && longitude) {
    return (
      <View style={styles.container}>
     
        <MapView
          style={styles.map}
          showsMyLocationButton={true}
          //specify our coordinates.
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <MarkerComponents latitude={latitude} longitude={longitude} />
          <MarkerComponents latitude={32.309879} longitude={-9.232620} />
      
        </MapView>
        <SignOut />
      </View>
    )
  }
  else {
    return (
      <View >
        <Loading />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});
