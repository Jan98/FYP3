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

export default function ProfileUserScreen({ navigation }) {

  const firestore = firebase.firestore;
  const auth = firebase.auth;

  const [user, setUser] = useState(null) // This user
  const [users, setUsers] = useState([]) // Other Users

  useEffect(() => {
      firestore().collection("users").doc(auth().currentUser.uid).get()
          .then(user => {
              setUser(user.data())
          })
  }, [])

  useEffect(() => {
      if (user)
          firestore().collection("users").where("role", "==", (user?.role === "Student" ? "Staff" : "Student"))
              .onSnapshot(users => {
                  if (!users.empty) {
                      const USERS = []

                      users.forEach(user => {
                          USERS.push(user.data())
                      })

                      setUsers(USERS)
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
          Name: {user?.name}{'\n'}
          Email: {user?.email}{'\n'}
          Occupation: {user?.role}{'\n'}
          Phone Number: {user?.phone}{'\n'}
      </Text>



      <Btn title="Log Out" style={{ alignSelf: "center" }} onClick={() => firebase.auth().signOut()} />
  </View>

</View>
      }