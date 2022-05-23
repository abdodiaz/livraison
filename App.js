import React, { useEffect, useState } from 'react';
import MapView from 'react-native-maps';


import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import { StatusBar } from 'expo-status-bar';
import LoginScreen from 'react-native-login-screen';
export default function App() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

useEffect(() => {
  load()
},[latitude, longitude]);


  const load = async () => {

    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMessage('Access to location is needed to run this app');
        return
      }
      const location = await Location.getCurrentPositionAsync();

      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);
    } catch (error) {

      setErrorMessage(error.message);
    }
  }




if(latitude&&longitude){

  return (
    <View style={styles.container}>
      {/* Render our MapView*/}
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
        <MapView.Marker
          coordinate={{
            latitude,
            longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}

        />
      </MapView>
      {/* <LoginScreen/> */}
 
    </View>



  );
 }
 else{
    return(
  
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
          <StatusBar style="auto" />
        </View>

    );
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
  },loading: {
    flex: 1,
    backgroundColor: '#fff',

    justifyContent: 'center',
  }
});

