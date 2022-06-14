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

export default function ListofDriver({ navigation }) {

    const firestore = firebase.firestore;
    const auth = firebase.auth;

    const [user, setUser] = useState(null) // This user
    const [drivers, setDrivers] = useState([]) // Other Users

    useEffect(() => {
        firestore().collection("drivers").doc(auth().currentUser.uid).get()
            .then(drivers => {
                setUser(drivers.data())
            })
    }, [])

    useEffect(() => {
        if (drivers)
            firestore().collection("drivers")//where("role", "==", (user?.role === "Student" ? "Teacher" : "Student"))
                .onSnapshot(drivers => {
                    if (!drivers.empty) {
                        const DRIVERS = []

                        drivers.forEach(drivers => {
                            DRIVERS.push(drivers.data())
                        })

                        setDrivers(DRIVERS)
                    }
                })
    }, [drivers])

    return (
    <View>
        <View style={{ marginTop: 40, marginBottom: 40 }}>
            <FlatList
                data={drivers}
                renderItem={({ item }) => <View style={{ borderBottomWidth: 1, borderBottomColor: "#b1b1b1", marginBottom: 20}}>
                    <Text style={{ fontSize: 18, fontWeight: "400", marginBottom: 8 }}>{item.name}</Text>
                </View>}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    </View>
)
 
}