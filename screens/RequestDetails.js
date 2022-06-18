//import * as React from 'react';
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import { Alert, TextBox, FlatList, StyleSheet, Button, View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
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

export default function RequestDetails({ navigation }) {
  const firestore = firebase.firestore;
  const auth = firebase.auth;
  const [user, setUser] = useState(null) // This user
  const [booking, setBooking] = useState([]) // Other Users

  useEffect(() => {
    firestore().collection("booking").doc(auth().currentUser.uid).get()
        .then(user => {
            setUser(user.data())
        })
}, [])

useEffect(() => {
    if (booking)
        firestore().collection("booking")//.where("uid", (user?.uid !== currentUser.uid))
            .onSnapshot(booking => {
                if (!booking.empty) {
                    const BOOKING = []

                    booking.forEach(booking => {
                        BOOKING.push(booking.data())
                    })

                    setBooking(BOOKING)
                }
            })
}, [booking])

const [values] = useState({
    name: "",
    from: "",
    to: "",
    book: "",
   
  })
  function acceptRequest() {
  
    const { name, from, to, book} = values

        firestore().collection("acceptRequest").add({
            //uid: auth().currentUser.uid,
            name,
            from, 
            to,
            book
            })
}


    const showAlert = () =>{
       Alert.alert(
          'You Accepted This Request!'
       )
    }

  return <View>
  <View style={{ padding: 10, backgroundColor: "#b1b1b1", paddingTop: 55 }}>
      <Text style={{ fontSize: 24, fontWeight: "800" }}>Customer: {user?.name}</Text>
  </View>

  <View style={styles.view}>
      <Text style={{
          fontSize: 20,
          fontWeight: "600",
          marginBottom: 20
      }}>
          The ride/courier details:{'\n'}
          Customer Name: {user?.name}{'\n'}
          Pick Up location: {user?.from}{'\n'}
          Destination: {user?.to}{'\n'}
          Service Type: {user?.book}{'\n'}
      </Text>
     
      <Btn onClick={() => acceptRequest()} title="Accept" style={{ width: "48%" }} />
      <Btn onClick={() => navigation.replace("ProfileDriverScreen")} title="Delivery Complete" style={{ width: "50%", height: "10%" }} />
      <Text>Click here after your delivery is complete</Text>
      <Text style={styles.bold}>**If necessary, open your own GPS navigation application to go to the pick up and the delivery locations</Text>
      <Btn onClick={() => navigation.replace("ProfileDriverScreen")} title="Cancel" style={{ width: "48%", backgroundColor: "#344869" }} />
      {/* <Btn onClick={() => navigation.replace("ProfileDriverScreen")} title="Back" style={{ width: "48%", backgroundColor: "#344869" }} /> */}

      
  </View>

</View>
}