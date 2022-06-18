import React, { useState, useEffect } from "react";
import { useNavigation } from '@react-navigation/core'
import { SafeAreaView, ImageBackground, StyleSheet, Text, ScrollView, View, Image, TextInput, TouchableOpacity} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import {Picker} from '@react-native-picker/picker';
import TextBox from "../components/TextBox";
import Btn from "../components/Btn"
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

export default function UpdateProfile ({navigation})  {  
  const auth = firebase.auth;
  const firestore = firebase.firestore;


const [values, setValues] = useState({
  name: "",
  icno: "",
  bankno: "",
  vehicle: "",
  plateno: "",
  validity: "",
 
})

function handleChange(text, eventName) {
  setValues(prev => {
      return {
          ...prev,
          [eventName]: text
      }
  })
}

function saveprofile() {

  const { name, icno, bankno, vehicle,  plateno, validity} = values

              firestore().collection("drivers").doc(auth().currentUser.uid).set({
                  uid: auth().currentUser.uid,
                  name,
                  icno,
                  bankno,
                  vehicle,
                  plateno,
                  validity
                 
              })
          }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ marginTop: 20}}>Full Name: </Text>
      <TextBox placeholderTextColor="#171a19" placeholder="Same as IC" onChangeText={text => handleChange(text, "name")} />

      <Text style={{ marginTop: 4}}>IC Number: </Text>
      <TextBox placeholderTextColor="#171a19" placeholder="Eg: 980224-00-0000" onChangeText={text => handleChange(text, "icno")} />
      
      <Text style={{ marginTop: 4}}>Bank Account Number: </Text>
      <TextBox placeholderTextColor="#171a19" placeholder="Eg: 0000000000000" onChangeText={text => handleChange(text, "bankno")} />
      
      <Text style={{ marginTop: 4}}>Vehicle Type: </Text>
      <TextBox placeholderTextColor="#171a19" placeholder="Eg: Proton Saga" onChangeText={text => handleChange(text, "vehicle")} />
      
      <Text style={{ marginTop: 4}}>Plate Number: </Text>
      <TextBox placeholderTextColor="#171a19" placeholder="PGP 1234" onChangeText={text => handleChange(text, "plateno")} />

      <Text style={{ marginTop: 4}}>Validity: </Text>
      <TextBox placeholderTextColor="#171a19" placeholder="22/09/2020 - 24/02/2023" onChangeText={text => handleChange(text, "validity")} />
      
      <View style={{ justifyContent: "center", alignItems: "center", width: "92%", }}>
          <Btn onClick={() => saveprofile()} title="Save" style={{ width: "48%" }} />
          <Btn onClick={() => navigation.replace("ProfileDriverScreen")} title="Back" style={{ width: "48%", backgroundColor: "#344869" }} />  
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
  }, 
  buttonContainer: {
    width: 100,
    height: 110,
    flexDirection: 'row',
    //justifyContent: 'space-around',
    //alignItems: "center",
  },
  imageContainer: {
    padding: 30
  },
  image: {
    width: 100,
    height: 110,
    resizeMode: 'cover'
  },
});