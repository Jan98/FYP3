import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, FlatList } from "react-native"
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

export default function HistoryUserScreen({ navigation }) {

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

    return (
    <View>
        <View style={{ marginTop: 40, marginBottom: 40 }}>
            <FlatList
                data={booking}
                renderItem={({ item }) => <View style={{ borderBottomWidth: 1, borderBottomColor: "#b1b1b1", marginBottom: 20}}>
                    <Text style={{ fontSize: 18, fontWeight: "400", marginBottom: 8 }}>{item.from} To {item.to}</Text>
                    <Text style={{ fontSize: 18, fontWeight: "400", marginBottom: 8 }}>{item.date} And {item.time}</Text>
                </View>}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    </View>
)

}