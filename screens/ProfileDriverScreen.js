import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/core'
import { StyleSheet, Button, View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import Btn from "../components/Btn"
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";



export default function ProfileDriverScreen ({navigation}) {  

  const firestore = firebase.firestore;
  const auth = firebase.auth;

  const [user, setUser] = useState(null) // This user
  const [drivers, setDrivers ] = useState([]) // Other Users

  useEffect(() => {
      firestore().collection("drivers").doc(auth().currentUser.uid).get()
          .then(user => {
              setUser(user.data())
          })
  }, [])

  useEffect(() => {
      if (user)
          firestore().collection("drivers").where("role", "==", (user?.role === "Student" ? "Staff" : "Student"))
              .onSnapshot(drivers  => {
                  if (!drivers.empty) {
                      const DRIVERS = []

                      drivers .forEach(user => {
                        DRIVERS.push(user.data())
                      })

                      setDrivers (DRIVERS)
                  }
              })
  }, [user])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
          
          <Text
            style={styles.text}>
            Full Name: {user?.name}{'\n'}{'\n'}
            IC Number: {user?.icno}{'\n'}{'\n'}
            Bank Account Number: {user?.bankno}{'\n'}{'\n'}
            Vehicle Type: {user?.vehicle}{'\n'}{'\n'}
            Plate Number:  {user?.plateno}{'\n'}{'\n'}
            Validity: {user?.validity}{'\n'}{'\n'}

          </Text>
 
        <TouchableOpacity
            onPress={() => {
              navigation.navigate('UpdateProfile', { 
              });
            }}
            style={styles.update}
          >
          <Text style={styles.buttonText}>Update Profile</Text>
          
          </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 50,
  },
  
  text: {
    fontSize: 18,
    marginBottom: 16,
  },
  update: {
    alignItems: "center",
    padding: 12,
    borderRadius: 12,
    backgroundColor: "#aae6e6",
    marginBottom: 16,
    width: '50%',
  },
  buttonText: {
    color: 'black',
    //fontWeight: 'bold',
  }

});