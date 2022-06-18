import { useNavigation } from '@react-navigation/core'
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Btn from "../components/Btn"
import firebase from 'firebase/app';
import "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({navigation}) => {

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
          firestore().collection("users")//where("role", "==", (user?.role === "Student" ? "Staff" : "Student"))
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
 
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", padding: 20, paddingTop: 55, paddingBottom: 55 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Welcome {user?.name}</Text>
      </View>
      <View>
        <Text style={styles.storeName}>Choose</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('DrawerNavigatorRoutes', {
          });
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Passenger</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('DrawerNavigatorDriver', {
          });
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Driver</Text>
      </TouchableOpacity>
      <Btn title="Log Out" style={{ alignSelf: "center" }} onClick={() => firebase.auth().signOut()} />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white",
  },
   button: {
    backgroundColor: "#aae6e6",
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: 'black',
    fontWeight: '700',
    fontSize: 16,
  },
  storeName: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 20,
  },
})