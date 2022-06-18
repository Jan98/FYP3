import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import TextBox from "../components/TextBox";
import MapView, { Callout, Circle, Marker } from "react-native-maps"
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"
import Btn from "../components/Btn";
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import { ScrollView } from 'react-native-gesture-handler';

export default function MapScreen ({ navigation }) {
  const [ pin, setPin ] = React.useState({
		latitude: 3.25166566,
		longitude: 101.73583039
	})
	const [ region, setRegion ] = React.useState({
		latitude: 3.25166566,
		longitude: 101.73583039,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421
	})

  const auth = firebase.auth;
  const firestore = firebase.firestore;

  const [values, setValues] = useState({
    name: "",
    from: "",
    to: "",
    book: "",
    date: "",
    time: "",

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

    const { name, from, to, book, date, time } = values
    firestore().collection("booking").add({
                //firestore().collection("booking").doc(auth().currentUser.uid).set({
                    uid: auth().currentUser.uid,
                    name,
                    from,
                    to,
                    book,
                    date,
                    time,
                })
    }
   

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 20, flex: 1 }}>
			<GooglePlacesAutocomplete
				placeholder="Search"
				fetchDetails={true}
				GooglePlacesSearchQuery={{
					rankby: "distance"
				}}
				onPress={(data, details = null) => {
					// 'details' is provided when fetchDetails = true
					console.log(data, details)
					setRegion({
						latitude: details.geometry.location.lat,
						longitude: details.geometry.location.lng,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421
					})
				}}
				query={{
					key: "AIzaSyBu3H2URhQGvqEz2DdINvvh8OZEKZ2oXo4",
					language: "en",
					types: "establishment",
					radius: 30000,
					location: `${region.latitude}, ${region.longitude}`
				}}
				styles={{
					container: { flex: 0, position: "absolute", width: "100%", zIndex: 1 },
					listView: { backgroundColor: "white" }
				}}
			/>
			<MapView
				style={styles.map}
				initialRegion={{
					latitude: 3.25166566,
					longitude: 101.73583039,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421
				}}
				provider="google"
			>
				<Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
				<Marker
					coordinate={pin}
					pinColor="black"
					draggable={true}
					onDragStart={(e) => {
						console.log("Drag start", e.nativeEvent.coordinates)
					}}
					onDragEnd={(e) => {
						setPin({
							latitude: e.nativeEvent.coordinate.latitude,
							longitude: e.nativeEvent.coordinate.longitude
						})
					}}
				>
					<Callout>
						<Text>I'm here</Text>
					</Callout>
				</Marker>
				<Circle center={pin} radius={1000} />
			</MapView>
		</View>

      <TextBox placeholderTextColor="#171a19"  placeholder="Your Name" onChangeText={text => handleChange(text, "name")} />
      <TextBox placeholderTextColor="#171a19" placeholder="From" onChangeText={text => handleChange(text, "from")} />
      <TextBox placeholderTextColor="#171a19" placeholder="Where to" onChangeText={text => handleChange(text, "to")} />
      <TextBox placeholderTextColor="#171a19" placeholder="Book for Ride or Parcel" onChangeText={text => handleChange(text, "book")} />
      <View style={ styles.textInput }>
        <TextBox placeholderTextColor="#171a19" placeholder="Date" onChangeText={text => handleChange(text, "date")} />
        <TextBox placeholderTextColor="#171a19" placeholder="Time" onChangeText={text => handleChange(text, "time")} />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "92%", }}>
        <Btn onClick={() => Book()} title="Save" style={{ width: "48%" }} />
        <Btn onClick={() => navigation.replace("ListofDriver")} title="Book" style={{ width: "48%", backgroundColor: "#0B3270" }} />
      </View>
    
    </View>
)
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    //paddingTop: 5,
  },
  map: {
    width: '100%',
    height: '40%',
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
  btnContainer: {
    padding: 5,
  },
  textboxcontainer: {
    height: 42,
    width: "48%",
    borderRadius: 25,
    //marginTop: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
},
  textInput: {
    //marginTop: 0,
    width: "48%",
    borderColor: "#0B3270",
    //borderWidth: 1,
    //paddingLeft: 15,
    flexDirection: "row", 
    justifyContent: "center",
},
map: {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height
}
});