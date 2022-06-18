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

export default function DriverRequestScreen ({navigation})  {  
    
    const firestore = firebase.firestore;
    const auth = firebase.auth;

    const [user, setUser] = useState(null) // This user
    const [booking, setBooking] = useState([]) // Other Users

    useEffect(() => {
        firestore().collection("booking").doc(auth().currentUser.uid).get()
            .then(booking => {
                setUser(booking.data())
            })
    }, [])

    useEffect(() => {
        if (booking)
            firestore().collection("booking")//.where("uid", "==", (user?.uid === "" ? "" : ""))
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

    const [values ] = useState({
        name: "",
        from: "",
        to: "",
        book: "",
        date: "",
        time: "",

    })
    
    // function acceptRequest() {
  
    //     const { name, from, where, book} = values
  
    //         firestore().collection("acceptRequest").add({
    //             uid: auth().currentUser.uid,
    //             name,
    //             from, 
    //             where,
    //             book
    //             })
    // }
    
    // function rejectRequest() {
  
    //     const { name, from, where, book} = values
      
    //                 firestore().collection("rejectRequest").delete({
    //                     uid: auth().currentUser.uid,
    //                     name,
    //                     from, 
    //                     where,
    //                     book
    //                 })
    //             }
  
    return (
      <SafeAreaView style={styles.container}>
<View>
        <View style={{ marginTop: 40, marginBottom: 40 }}>
            <FlatList
                data={booking}
                renderItem={({ item }) => <View style={{ borderBottomWidth: 1, borderBottomColor: "#b1b1b1", marginBottom: 20}}>
                    <Text style={{ fontSize: 18, fontWeight: "400", marginBottom: 8 }}>Customer Name:{item.name}</Text>
                    <Text style={{ fontSize: 18, fontWeight: "400", marginBottom: 8 }}>Pick Up Location: {item.from}</Text>
                    <Text style={{ fontSize: 18, fontWeight: "400", marginBottom: 8 }}>To:{item.to}</Text>
                    <Text style={{ fontSize: 18, fontWeight: "400", marginBottom: 8 }}>Date:{item.date}</Text>
                    <Text style={{ fontSize: 18, fontWeight: "400", marginBottom: 8 }}>Time:{item.time}</Text>
                    <Text style={{ fontSize: 18, fontWeight: "400", marginBottom: 8 }}>Type of Service:{item.book}</Text>
                    <Btn onClick={() => navigation.navigate("RequestDetails")} title="View Request" style={{ width: "48%" }} />
                    {/* <Btn onClick={() => rejectRequest()} title="Reject" style={{ width: "48%" }} /> */}
                    {/* <Btn onClick={() => navigation.replace("ProfileDriverScreen")} title="Back" style={{ width: "48%", backgroundColor: "#344869" }} /> */}
                </View>}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    </View>
      </SafeAreaView>
    )
  };
  