import 'react-native-gesture-handler';
import { auth } from '../firebase'


import * as React from 'react';
import { Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './Login';
import ProfileDriverScreen from './ProfileDriverScreen';
import HistoryDriverScreen from './HistoryDriverScreen';
import MonthlyIncome from './MonthlyIncome';
import HomeScreen from './HomeScreen';
import UpdateProfile from './UpdateProfile';
import RulesForDriver from './RulesForDriver';
import DriverRequestScreen from './DriverRequestScreen';
import RequestDetails from './RequestDetails';

// Import Custom Sidebar
import CustomSidebarMenu from '../CustomSidebarMenu';
import NavigationDrawerStructure from './NavigationDrawerStructure';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


//Profile
const FirstScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="ProfileDriverScreen">
      <Stack.Screen
        name="Profiles"
        component={ProfileDriverScreen}
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
      <Stack.Screen 
      name="UpdateProfile" 
      component={UpdateProfile} 
      options={{ headerShown: false}}/>  
      <Stack.Screen name="ProfileDriverScreen" component={ProfileDriverScreen} options={{
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
      }}/>      
      
      
    </Stack.Navigator>
  );
}

//History
const SecondScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="DriverRequestScreen">
      <Stack.Screen
        name="Requests"
        component={DriverRequestScreen}
        options={{
          title: 'Request', //Set Header Title
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
        name="RequestDetails"
        component={RequestDetails}
        options={{
          title: 'Request Details', //Set Header Title
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
    <Stack.Navigator initialRouteName="HistoryDriverScreen">
      <Stack.Screen
        name="Historys"
        component={HistoryDriverScreen}
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

//MonthlyIncome
const FourthScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="MonthlyIncome">
      <Stack.Screen
        name="Incomes"
        component={MonthlyIncome}
        options={{
          title: 'Income', //Set Header Title
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

//Rules For Driver
const FifthScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="RulesForDriver">
      <Stack.Screen name="RulesForDriver" component={RulesForDriver} options={{
        title: 'Rules For Driver', //Set Header Title
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
      }}/>
    </Stack.Navigator>
  );
}

const DrawerNavigatorDriver = () => {
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
        name="Request"
        options={{ drawerIcon: () => (<Ionicons name="hourglass" size={30}></Ionicons>) }}
        component={SecondScreenStack}
      />
      <Drawer.Screen
        name="History"
        options={{ drawerIcon: () => (<Ionicons name="timer" size={30}></Ionicons>) }}
        component={ThirdScreenStack}
      />
      <Drawer.Screen
        name="Income"
        options={{ drawerIcon: () => (<Ionicons name="card" size={30}></Ionicons>) }}
        component={FourthScreenStack}
      />
      <Drawer.Screen
        name="Rules for Driver"
        options={{ drawerIcon: () => (<Ionicons name="book" size={30}></Ionicons>) }}
        component={FifthScreenStack}
      />
      <Drawer.Screen
        name="Back"
        options={{ drawerIcon: () => (<Ionicons name="arrow-back" size={30}></Ionicons>) }}
        component={HomeScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorDriver;