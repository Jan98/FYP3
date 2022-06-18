import React, { useState, useEffect } from 'react';
import { Linking, StyleSheet, Button, View, Text, TouchableOpacity, TextInput} from 'react-native';
import TextBox from "../components/TextBox";
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import Btn from "../components/Btn"


export default function Payment({navigation}) {

  const auth = firebase.auth;
  const firestore = firebase.firestore;

  const [values, setValues] = useState({
    price: "",   
  })

 
  function handleChange(text, eventName) {
    setValues(prev => {
        return {
            ...prev,
            [eventName]: text
        }
    })
  }

  function Payment() {

    const { price } = values

                firestore().collection("payment").add({
                    uid: auth().currentUser.uid,
                    price  
                      
                })
  }

  
    return (
    <View style={styles.container}>
      <Text >If you decided to go cashless, please send your proof of payment to this google form</Text>
     <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSf1-Ca2lNh3bmY30zgbTQbXzhdZwNlGwQB16q16pwyESbAD0Q/viewform?usp=sf_link')}>
        Online payment
      </Text>
      <Text style={styles.bold}>OR </Text>
      <Text style={styles.bold}>If you pay cash to the driver, enter the amount here:</Text>
      <TextBox placeholderTextColor="#171a19" placeholder="eg: RM5" onChangeText={text => handleChange(text, "price")} />
      <Btn onClick={() => Payment()} title="Pay with cash" style={{ width: "48%" }} />
      <Btn onClick={() => navigation.replace("Feedback")} title="Feedback" style={{ width: "48%", backgroundColor: "#0B3270" }} />
    
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderColor: "gray",
      width: "100%",
      borderRadius: 5,
    },
    button: {
      marginHorizontal: 8,
      backgroundColor: '#aae6e6',
      height: 40,
      width: 100,
      padding: 12,
      borderRadius: 12 / 2,
      alignItems: "center",
      marginBottom: 10,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    }
  });