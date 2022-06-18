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
      padding: 25,
      backgroundColor: "white",
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
          firestore().collection("users")
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

  <View style={styles.view}>
      <Text style={{ fontSize: 18, marginBottom: 20}}>
          
          Name: {user?.name}{'\n'}{'\n'}
          Email: {user?.email}{'\n'}{'\n'}
          Role: {user?.role}{'\n'}{'\n'}
          Phone Number  : {user?.phone}{'\n'}{'\n'}
      </Text>
  </View>

</View>
      
}