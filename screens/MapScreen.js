import React, { useState, useEffect } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import { StyleSheet, Button, View, Text, Dimensions, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as Location from 'expo-location';
import TextBox from "../components/TextBox";
import Btn from "../components/Btn";
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

let apiKey = 'AIzaSyBu3H2URhQGvqEz2DdINvvh8OZEKZ2oXo4';

export default function MapScreen ({ navigation }) {

  const auth = firebase.auth;
  const firestore = firebase.firestore;

  const [values, setValues] = useState({
    from: "",
    where: "",
    book: "",
    location: "",
    date: "",
  })

  function handleChange(text, eventName) {
    setValues(prev => {
        return {
            ...prev,
            [eventName]: text
        }
    })
  }

  function Book() {

    const { from, where, book, location, date } = values
    firestore().collection("booking").add({
                //firestore().collection("booking").doc(auth().currentUser.uid).set({
                    uid: auth().currentUser.uid,
                    from,
                    where,
                    book,
                    location,
                    date,
                   
                })
    }
    
  const [isPickerShow, setIsPickerShow] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));

  const showPicker = () => {
    setIsPickerShow(true);
  };

  const onChange = (event, value) => {
    setDate(value);
    if (Platform.OS === 'android') {
      setIsPickerShow(false);
    }
  };

  const [location, setLocation] = useState(null);
  const [region, setRegion ] = React.useState({
      latitude: "string",
      longitude: "string",
      latitudeDelta: "string",
      longitudeDelta: "string"
  });    

  return (
      <View style={styles.container}>
        <MapView style={styles.map}
          region={region} />

        <TextBox placeholder="From" onChangeText={text => handleChange(text, "from")} />
        <TextBox placeholder="Where to" onChangeText={text => handleChange(text, "where")} />
        <TextBox placeholder="Book for Ride or Parcel" onChangeText={text => handleChange(text, "book")} />

    
        <View style={styles.pickedDateContainer}>
          <Text style={styles.pickedDate}>{date.toUTCString()}</Text>
        </View>

        {/* The button that used to trigger the date picker */}
        {!isPickerShow && (
          <View style={styles.btnContainer}>
            <Button title="Select Date" color="#aae6e6" onPress={showPicker} />
          </View>
        )}

        {/* The date picker */}
        {isPickerShow && (
          <DateTimePicker
            value={"date"}
            mode={'date'}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={true}
            onChange={onChange}
            style={styles.datePicker}
          />
       )}

        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "92%", }}>
          <Btn onClick={() => Book()} title="Save" style={{ width: "48%" }} />
          <Btn onClick={() => navigation.replace("ListofDriver")} title="Book" style={{ width: "48%", backgroundColor: "#0B3270" }} />
        </View>
      
      </View>
)
};


const styles = StyleSheet.create({
  container: {
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    //paddingTop: 5,
  },
  map: {
    width: '100%',
    height: '50%',
  },
  big: {
    fontSize: 15,
    color: 'black',
    //marginBottom: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#aae6e6",
    padding: 12,
    borderRadius: 12 / 2,
    alignItems: "center",
    marginTop: 5,
    height: 42,
    width: "50%",
  },
  pickedDateContainer: {
    padding: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  pickedDate: {
    fontSize: 18,
    color: '#1F0FE0',
  },
  btnContainer: {
    padding: 5,
  },
  // This only works on iOS
  datePicker: {
    width: 320,
    height: 260,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});