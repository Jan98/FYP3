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

export default function MonthlyIncome({ navigation }) {

  const firestore = firebase.firestore;
  const auth = firebase.auth;

  const [user, setUser] = useState(null) // This user
  const [payment, setpayment] = useState([]) // Other Users

  useEffect(() => {
      firestore().collection("payment").doc(auth().currentUser.uid).get()
          .then(user => {
              setUser(user.data())
          })
  }, [])

  useEffect(() => {
      if (payment)
          firestore().collection("payment")
              .onSnapshot(payment => {
                  if (!payment.empty) {
                      const PAYMENT = []

                      payment.forEach(payment => {
                        PAYMENT.push(payment.data())
                      })

                      setpayment(PAYMENT)
                  }
              })
  }, [payment])

  return <View style={styles.view}>
  <View style={{ marginTop: 40, marginBottom: 40 }}>
     <FlatList
         data={payment}
         renderItem={({ item }) => <View style={{ borderBottomWidth: 1, borderBottomColor: "#b1b1b1", marginBottom: 20}}>
             <Text style={{ fontSize: 18, fontWeight: "400", marginBottom: 8 }}>RM{item.price}</Text>
             </View>}
         keyExtractor={(item, index) => index.toString()}
     />
 
 </View>
</View>
      
}