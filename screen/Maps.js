import { StyleSheet,} from 'react-native'
import React from 'react'
import MapsComponets from '../components/maps/MapsComponets'
import Useposstion from '../hooks/Useposition'


const Maps = () => {
const [latitude, longitude] = Useposstion();

  return (
   
    <MapsComponets latitude={latitude} longitude={longitude}  />

  )
}

export default Maps

