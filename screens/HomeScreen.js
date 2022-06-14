import { useNavigation } from '@react-navigation/core'
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Btn from "../components/Btn"
import firebase from 'firebase/app';
import "firebase/auth";

const HomeScreen = ({navigation}) => {
 
  const auth = firebase.auth;
  
  const [user, setUser] = useState(null)

  return (
    <View style={styles.container}>
      <View style={styles.welcomecontainer}>
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
  welcomecontainer: {
    //background: '#ffccff',
  },
   button: {
    backgroundColor: "#aae6e6",
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
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
  },
  welcome: {
    alignItems: 'center',
    fontSize: 20,
  }
})