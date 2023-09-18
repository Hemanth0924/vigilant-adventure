import React, { Component } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
  Text
} from "react-native";
import firebase from "firebase";

export default class Logout extends Component{
componentDidMount(){
    firebase.auth().signOut();

    this.props.navigation.navigate("Login");
}

render(){
    return(
        <View style = {styles.container}>
            <Text>
                Logout
            </Text>
        </View>
    );
}
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    }
});
