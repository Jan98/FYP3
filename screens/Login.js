import { StatusBar } from "expo-status-bar";
import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from "react";
import { SafeAreaView, ImageBackground, StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from "react-native";
import { auth } from '../firebase'
import TextBox from "../components/TextBox"
import Btn from "../components/Btn"
import firebase from 'firebase/app';
import "firebase/auth"; 

const LoginScreen = ({navigation}) => {

  const [values, setValues] = useState({
    email: "",
    pwd: ""
})

function handleChange(text, eventName) {
    setValues(prev => {
        return {
            ...prev,
            [eventName]: text
        }
    })
}

function Login() {

    const { email, pwd } = values

    firebase.auth().signInWithEmailAndPassword(email, pwd)
        .then(() => {
        })
        .catch((error) => {
            alert(error.message)
            // ..
        });
}


  return (
    <SafeAreaView style={styles.container}>
    <ImageBackground style={{flex: 1}} source={require("../assets/backgroundnew.png")} >
        <View style={styles.wrapper}>
        <Image style={styles.image} source = {require("../assets/logo.png")}/>
        <StatusBar style="auto" />
        
        <TextBox placeholder="Email Address" onChangeText={text => handleChange(text, "email")} />
        <TextBox placeholder="Password" onChangeText={text => handleChange(text, "pwd")} secureTextEntry={true} />
       
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "92%", }}>
            <Btn onClick={() => Login()} title="Login" style={{ width: "48%" }} />
            <Btn onClick={() => navigation.navigate("SignUp")} title="Sign Up" style={{ width: "48%", backgroundColor: "#344869" }} />
        </View>
    </View>
  </ImageBackground>
  </SafeAreaView>
  );
};

export default LoginScreen

const styles = StyleSheet.create({
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
    top: 50, //iphone:50
    left: 25, ////iphone:31
    paddingTop: 130, //iphone:233
    paddingBottom: 50,
    paddingLeft: 50,
    paddingRight: 31,
    borderRadius: 8,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 370, //iphone:352
    height: 700, //iphone:812
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
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginTop: 5,
  },
 
  loginBtn: {
    width: "60%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#aae6e6",
  },
  loginText: {
    fontWeight: 'bold'
  },
})