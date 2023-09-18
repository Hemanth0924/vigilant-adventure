import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigation/DrawerNavigator";
import LoginScreen from "./screens/LoginScreen";

import RegisterScreen from "./screens/Register";
import  * as firebase from "firebase";

import { firebaseConfig } from "./config";

if(! firebase.App.length){
  firebase.initializeApp( firebaseConfig );
}
else{
  firebase.app();
}
export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator /> 
    </NavigationContainer>
  );
}