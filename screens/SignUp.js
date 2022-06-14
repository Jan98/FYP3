import { StatusBar } from "expo-status-bar";
import { useNavigation } from '@react-navigation/core';
import React, { useState, useEffect } from "react";
import { SafeAreaView, ImageBackground, StyleSheet, Text, ScrollView, View, Image, TextInput, TouchableOpacity} from "react-native";
import TextBox from "../components/TextBox"
import Btn from "../components/Btn"
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
//import { FlatList } from "react-native-gesture-handler";

export default function SignUpScreen  ( {navigation} ) {

  const auth = firebase.auth;
  const firestore = firebase.firestore;

  const [values, setValues] = useState({
    name: "",
    email: "",
    role: "",
    phone: "",
    pwd: "",
    pwd2: "",
   
})
  
  function handleChange(text, eventName) {
    setValues(prev => {
        return {
            ...prev,
            [eventName]: text
        }
    })
}

function SignUp() {

    const { email, pwd, pwd2,  name, role,  phone} = values

    if (pwd == pwd2) {
        auth().createUserWithEmailAndPassword(email, pwd)
            .then(() => {
                firestore().collection("users").doc(auth().currentUser.uid).set({
                    uid: auth().currentUser.uid,
                    name,
                    role,
                    email,
                    phone,
                })
            })
            .catch((error) => {
                alert(error.message)
                // ..
            });
    } else {
        alert("Passwords are different!")
    }
}

  return (
    <SafeAreaView style={styles.container}>
    <ImageBackground style={{flex: 1}} source={require("../assets/backgroundnew.png")} >
        <View style={styles.wrapper}>
        <Text style={{ fontSize: 34, fontWeight: "bold", marginBottom: 10 }}>Sign Up</Text>
        <TextBox placeholder="Full Name" onChangeText={text => handleChange(text, "name")} />
        <TextBox placeholder="Email Address" onChangeText={text => handleChange(text, "email")} />
        <TextBox placeholder="Who are you? (Student or Staff)" onChangeText={text => handleChange(text, "role")}/>
        <TextBox placeholder="Phone Number" onChangeText={text => handleChange(text, "phone")}/>
        <TextBox placeholder="Password" secureTextEntry={true}  onChangeText={text => handleChange(text, "pwd")}/>
        <TextBox placeholder="Confirm Password" secureTextEntry={true}  onChangeText={text => handleChange(text, "pwd2")}/>
    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "92%", }}>
      <Btn onClick={() => SignUp()} title="Sign Up" style={{ width: "48%" }} />
      <Btn onClick={() => navigation.replace("Login")} title="Login" style={{ width: "48%", backgroundColor: "#344869" }} />
    </View>

  </View>
  </ImageBackground>
  </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  view: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
},
container: {
  flex: 1,
  //backgroundColor: "#fff",
  //alignItems: "center",
  //justifyContent: "center",
},
imageback: {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  position: "relative",
  width: 500,
  height: 896,
}, 
wrapper: {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "absolute",
  top: 30, //iphone:50
  left: 20, ////iphone:31
  paddingTop: 50, //iphone:233
  paddingBottom: 134,
  paddingLeft: 31,
  paddingRight: 31,
  borderRadius: 8,
  backgroundColor: "rgba(255, 255, 255, 1)",
  width: 320, //iphone:352
  height: 590, //iphone:812
}, 

image: {
  //marginBottom: 10,
  width: 300,
  height: 200,
},

inputView: {
  backgroundColor: "#aae6e6",
  borderRadius: 10,
  width: "100%",
  height: 45,
  marginBottom: 10,
  //alignItems: "center",
},
buttonContainer: {
  width: 130,
  height: 130,
  flexDirection: 'row',
  //justifyContent: 'space-around',
  //alignItems: "center",
},
})