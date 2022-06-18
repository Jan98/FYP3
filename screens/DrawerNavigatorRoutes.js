import 'react-native-gesture-handler';
import { auth } from '../firebase'


import * as React from 'react';
import { View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Payment from './Payment';
import ProfileUserScreen from './ProfileUserScreen';
import HistoryUserScreen from './HistoryUserScreen';
import MapScreen from './MapScreen';
// Import Custom Sidebar
import CustomSidebarMenu from '../CustomSidebarMenu';
import NavigationDrawerStructure from './NavigationDrawerStructure';
//import firebase from 'firebase/app';
import "firebase/auth";
import HomeScreen from './HomeScreen';
import ListofDriver from './ListofDriver';
import PriceCopy from './PriceCopy';
import DriverDetails from './DriverDetails';
import Feedback from './Feedback';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

//GetaRide
const SecondScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="MapScreen">
      <Stack.Screen
        name="IIUM PickUp"
        component={MapScreen}
        options={{
          title: 'IIUM PickUp', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
           ),
           headerStyle: {
            backgroundColor: '#ACEAE9', //Set Header color
           },
           headerTintColor: '#000000', //Set Header text color
           headerTitleStyle: {
             fontWeight: 'bold', //Set Header text style
           },
        }}
      />
      <Stack.Screen
        name="ListofDriver"
        component={ListofDriver}
        options={{
          title: 'List of Driver', //Set Header Title
         
           headerStyle: {
            backgroundColor: '#ACEAE9', //Set Header color
           },
           headerTintColor: '#000000', //Set Header text color
           headerTitleStyle: {
             fontWeight: 'bold', //Set Header text style
           },
        }}
      />
       <Stack.Screen
        name="DriverDetails"
        component={DriverDetails}
        options={{
          title: 'Driver Details', //Set Header Title
         
           headerStyle: {
            backgroundColor: '#ACEAE9', //Set Header color
           },
           headerTintColor: '#000000', //Set Header text color
           headerTitleStyle: {
             fontWeight: 'bold', //Set Header text style
           },
        }}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{
          title: 'Payment', //Set Header Title
         
           headerStyle: {
            backgroundColor: '#ACEAE9', //Set Header color
           },
           headerTintColor: '#000000', //Set Header text color
           headerTitleStyle: {
             fontWeight: 'bold', //Set Header text style
           },
        }}
      />
      <Stack.Screen
        name="Feedback"
        component={Feedback}
        options={{
          title: 'Feedback', //Set Header Title
         
           headerStyle: {
            backgroundColor: '#ACEAE9', //Set Header color
           },
           headerTintColor: '#000000', //Set Header text color
           headerTitleStyle: {
             fontWeight: 'bold', //Set Header text style
           },
        }}
      />
    </Stack.Navigator>
  );
}


//Profile
const FirstScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="ProfileUserScreen">
      <Stack.Screen
        name="Profiles"
        component={ProfileUserScreen}
        options={{
          title: 'Profile', //Set Header Title
          headerLeft: () => (
           <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
           backgroundColor: '#ACEAE9', //Set Header color
          },
          headerTintColor: '#000000', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
      
    </Stack.Navigator>
  );
}

//History
const ThirdScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="HistoryUserScreen">
      <Stack.Screen
        name="Historys"
        component={HistoryUserScreen}
        options={{
          title: 'History', //Set Header Title
          headerLeft: () => (
           <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
           backgroundColor: '#ACEAE9', //Set Header color
          },
          headerTintColor: '#000000', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
      
    </Stack.Navigator>
  );
}

//History
const FourthScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="PriceCopy">
      <Stack.Screen
        name="Price"
        component={PriceCopy}
        options={{
          title: 'Prices', //Set Header Title
          headerLeft: () => (
           <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
           backgroundColor: '#ACEAE9', //Set Header color
          },
          headerTintColor: '#000000', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
      
    </Stack.Navigator>
  );
}

const DrawerNavigatorRoutes = () => {
  return (
    <Drawer.Navigator
    drawerContent={(props) => <CustomSidebarMenu {...props} />}
    screenOptions={{
      headerShown: false,
      activeTintColor: '#fff',
      drawerLabelStyle: { marginLeft: -25, fontSize: 20, fontWeight: 'bold' },
    }}>
      <Drawer.Screen
        name="Profile"
        options={{ drawerIcon: () => (<Ionicons name="person-circle-outline" size={30}></Ionicons>) }}
        component={FirstScreenStack}
      />
      <Drawer.Screen
        name="Booking"
        options={{ drawerIcon: () => (<Ionicons name="car" size={30}></Ionicons>) }}
        component={SecondScreenStack}
      />
      <Drawer.Screen
        name="History"
        options={{ drawerIcon: () => (<Ionicons name="timer" size={30}></Ionicons>) }}
        component={ThirdScreenStack}
      />
      <Drawer.Screen
        name="Prices"
        options={{ drawerIcon: () => (<Ionicons name="cash" size={30}></Ionicons>) }}
        component={FourthScreenStack}
      />
      <Drawer.Screen
        name="Back"
        options={{ drawerIcon: () => (<Ionicons name="arrow-back" size={30}></Ionicons>) }}        
        component={HomeScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;