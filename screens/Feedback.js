import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import TextBox from "../components/TextBox";

import Btn from "../components/Btn";
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import { TextInput } from 'react-native-gesture-handler';


export default function Feedback ({ navigation }) {
  
  const auth = firebase.auth;
  const firestore = firebase.firestore;

  const [values, setValues] = useState({
    feedback: "",
  })

  function handleChange(text, eventName) {
    setValues(prev => {
        return {
            ...prev,
            [eventName]: text
        }
    })
  }

  function Feedback() {

    const { feedback } = values
    firestore().collection("feedback").add({
                //firestore().collection("booking").doc(auth().currentUser.uid).set({
                    uid: auth().currentUser.uid,
                    feedback,
                })
    }
   

  return (
    
    <View style={styles.container}>
      <View style={{ alignItems: "center",  paddingBottom: 55 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Arrived on Destination</Text>
      </View>
      <Text> Give feedback on your experience</Text>
      <TextInput style={styles.textInput} placeholderTextColor="#171a19" onChangeText={text => handleChange(text, "feedback")} />
      
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "92%", }}>
        <Btn onClick={() => Feedback()} title="Save" style={{ width: "48%" }} />
        <Btn onClick={() => navigation.replace("MapScreen")} title="Back" style={{ width: "48%", backgroundColor: "#0B3270" }} />
      </View>
    </View>
    
)
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 25,
    
  },
 
  text: {
    fontSize: 15,
    color: 'black',
    
  },
  
  textInput: {
        
        width: "100%",
        height: "20%",
        borderColor: "#0B3270",
        borderWidth: 1,
        paddingLeft: 15,
        backgroundColor: "white",
},

});