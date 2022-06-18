//import * as React from 'react';
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import { TextBox, FlatList, StyleSheet, Button, View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import Btn from "../components/Btn"
import { Switch } from 'react-native-paper';
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

const styles = StyleSheet.create({
  view: {
      width: "100%",
      height: "100%",
      padding: 25
  }
})

export default function DriverDetails({ navigation }) {
  const firestore = firebase.firestore;
  const auth = firebase.auth;
  const [user, setUser] = useState(null) // This user
  const [drivers, setDrivers] = useState([]) // Other Users

  useEffect(() => {
    firestore().collection("drivers").doc().get()
        .then(snapshot => {
            setUser(snapshot.data())
        })
}, [])
  useEffect(() => {
      if (drivers)
          firestore().collection("drivers")//.where("role", "==", (user?.role === "Student" ? "Staff" : "Student"))
              .onSnapshot(drivers => {
                  if (!drivers.empty) {
                      const DRIVERS = []

                      DRIVERS.forEach(user => {
                          DRIVERS.push(user.data())
                      })
                      setDrivers(DRIVERS)
                  }
              })
  }, [drivers])

  function confirm() {
  
    const { name, vehicle, plateno} = values
  
                firestore().collection("selectDriver").get({
                    uid: auth().currentUser.uid,
                    name,
                    vehicle, 
                    plateno
                })
            }

// firestore().collection("drivers").doc(auth().currentUser.uid).set({
//     uid: auth().currentUser.uid,
//     name,
//     bankno,
//     vehicle,
//     plateno,
   
// })
  return <View>
  <View style={{ padding: 10, backgroundColor: "#b1b1b1", paddingTop: 55 }}>
      <Text style={{ fontSize: 24, fontWeight: "800" }}>Driver: {user?.name}</Text>
  </View>

  <View style={styles.view}>
      <Text style={{
          fontSize: 20,
          fontWeight: "600",
          marginBottom: 20
      }}>
          The driver details:{'\n'}
          Vehicle Type: {user?.vehicle}{'\n'}
          Plate Number: {user?.plateno}{'\n'}
      </Text>
     
      <Btn onClick={() => confirm()} title="Confirm" style={{ width: "48%" }} />
      <Btn onClick={() => navigation.replace("ListofDriver")} title="Cancel" style={{ width: "48%", backgroundColor: "#344869" }} />
      <Btn onClick={() => navigation.replace("Payment")} title="Payment" style={{ width: "48%", backgroundColor: "#344869" }} />

      {/* <Btn onClick={() => navigation.replace("MapScreen")} title="Back" style={{ width: "48%", backgroundColor: "#344869" }} /> */}

      
  </View>

</View>
}