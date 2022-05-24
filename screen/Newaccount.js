import Newaccount from "react-native-login-screen";

import React, { useEffect, useState } from 'react'
import { View } from "react-native-web";


const Newaccount = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
   // const navigation = useNavigation()

   const signUp = () => {

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });    }


  return (
    <LoginScreen
    logoImageSource="https://i.imgur.com/7wQXbY8.png"
    onLoginPress={signIn}
    onHaveAccountPress={() => {}}
    onEmailChange={(email) => {}}
    onPasswordChange={(password) => {}}
  />

  );
}

export default Newaccount
