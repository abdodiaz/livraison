import LoginScreen, { SocialButton } from "react-native-login-screen";

import React, { useEffect, useState } from 'react'


const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
   // const navigation = useNavigation()

  return (
    <LoginScreen
    logoImageSource="https://i.imgur.com/7wQXbY8.png"
    onLoginPress={() => {}}
    onHaveAccountPress={() => {}}
    onEmailChange={(email) => {}}
    onPasswordChange={(password) => {}}
  >
    <SocialButton text="Continue with Google" onPress={() => {}} />
    <SocialButton
      text="Continue with Facebook"
      imageSource={require("./assets/social/facebook.png")}
      onPress={() => {}}
    />
    <SocialButton
      text="Continue with Twitter"
      imageSource={require("./assets/social/twitter.png")}
      onPress={() => {}}
    />
  </LoginScreen>
  );
}

export default LoginScreen
