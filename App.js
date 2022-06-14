import 'react-native-gesture-handler';

import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/Login';
import SignUpScreen from './screens/SignUp';
import DrawerNavigatorRoutes from './screens/DrawerNavigatorRoutes';
import UpdateProfile from './screens/UpdateProfile';
import ProfileDriverScreen from './screens/ProfileDriverScreen';
import HomeScreen from './screens/HomeScreen';
import firebase from 'firebase/app';
import "firebase/auth";
import DrawerNavigatorDriver from './screens/DrawerNavigatorDriver';
import NavigationDrawerStructure from './screens/NavigationDrawerStructure';

const Stack = createStackNavigator();

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const firebaseConfig = {
    apiKey: "AIzaSyCmCD4PpA7ys4XYi14kK1z1dzEupTEXoes",
    authDomain: "fyp2022-f2dde.firebaseapp.com",
    projectId: "fyp2022-f2dde",
    storageBucket: "fyp2022-f2dde.appspot.com",
    messagingSenderId: "991536976678",
    appId: "1:991536976678:web:ad6fb161277a2458efa7e7"
  };

  //Checking if firebase has been initialized
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }

  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false);
    }
  });


  return (
    <NavigationContainer>
      {isLoggedIn ? <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="DrawerNavigatorRoutes" component={DrawerNavigatorRoutes} options={{ headerShown: false}}/>
          <Stack.Screen name="DrawerNavigatorDriver" component={DrawerNavigatorDriver} options={{ headerShown: false}}/>
  
        </Stack.Navigator> :
        <Stack.Navigator>
          
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />    
      </Stack.Navigator> 
}
    </NavigationContainer>
  );
}
    
export default App;