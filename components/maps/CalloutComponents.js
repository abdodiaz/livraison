import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react'
import MapView from 'react-native-maps';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const CalloutComponents = () => {
  return (
      <MapView.Callout tooltip>
          
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>E-Scooter</Text>
                  {/* <Text>A short description</Text> */}
                  <MaterialCommunityIcons name="scooter" size={100} color="black" />

                </View>
                <View style={styles.arrowBorder} />
                <View style={styles.arrow} />
              </View>
          
        </MapView.Callout>
  
  )
}

export default CalloutComponents
const styles = StyleSheet.create({
   
    // Callout bubble
    bubble: {
      flexDirection: 'column',
      alignSelf: 'flex-start',
      backgroundColor: '#fff',
      borderRadius: 6,
      borderColor: '#ccc',
      borderWidth: 0.5,
      padding: 15,
      width: 150,
    },
    // Arrow below the bubble
    arrow: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      borderTopColor: '#fff',
      borderWidth: 16,
      alignSelf: 'center',
      marginTop: -32,
    },
    arrowBorder: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      borderTopColor: '#007a87',
      borderWidth: 16,
      alignSelf: 'center',
      marginTop: -0.5,
      // marginBottom: -15
    },
    // Character name
    name: {
      fontSize: 16,
      marginBottom: 5,
    },
    // Character image
    image: {
      width: "100%",
      height: 80,
    },
  });