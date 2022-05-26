import { Button } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


const SignOut = () => {
    const navigation = useNavigation()
    const signOut = async () => {
        await AsyncStorage.removeItem('user');
        navigation.navigate('Login')
        console.log('signout')
    }

  return (
 
      <Button title="Sign Out" 
        onPress={signOut}
      />
    
  )
}

export default SignOut
