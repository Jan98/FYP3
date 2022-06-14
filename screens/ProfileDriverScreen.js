//import * as React from 'react';
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import { FlatList, StyleSheet, Button, View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import Btn from "../components/Btn"
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

export default function ProfileDriverScreen({ navigation }) {

  const firestore = firebase.firestore;
  const auth = firebase.auth;

  const [user, setUser] = useState(null) // This user
  const [drivers, setDrivers] = useState([]) // Other Users

  useEffect(() => {
    firestore().collection("drivers").doc(auth().currentUser.uid).get()
        .then(user => {
            setUser(user.data())
        })
}, [])
  useEffect(() => {
      if (user)
          firestore().collection("drivers").where("role", "==", (user?.role === "Student" ? "Staff" : "Student"))
              .onSnapshot(drivers => {
                  if (!drivers.empty) {
                      const DRIVERS = []

                      DRIVERS.forEach(user => {
                          DRIVERS.push(user.data())
                      })

                      setDrivers(DRIVERS)
                  }
              })
  }, [user])

  return <View>
  <View style={{ padding: 10, backgroundColor: "#b1b1b1", paddingTop: 55 }}>
      <Text style={{ fontSize: 24, fontWeight: "800" }}>Welcome {user?.name}</Text>
  </View>

  <View style={styles.view}>
      <Text style={{
          fontSize: 20,
          fontWeight: "600",
          marginBottom: 20
      }}
      >
          My Profile:{'\n'}
          Full Name: {user?.name}{'\n'}
          IC Number: {user?.icno}{'\n'}
          Bank Account Number: {user?.bankno}{'\n'}
          Vehicle Type: {user?.vehicle}{'\n'}
          Plate Number: {user?.plateno}{'\n'}
          Validity: {user?.validity}{'\n'}
      </Text>
     
      <Btn title="Update Profile" style={{ alignSelf: "center" }} onClick={() => {
              navigation.navigate('UpdateProfile', { 
              });
            }} />
  </View>

</View>
      }