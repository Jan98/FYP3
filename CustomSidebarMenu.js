import React from 'react';
import { SafeAreaView, View, StyleSheet, Image, Text, Linking } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import Ionicons from '@expo/vector-icons/Ionicons';

const CustomSidebarMenu = (props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#aae6e6" }}>
      <View style={{flex:0.1, paddingTop: 50, paddingHorizontal: 20}}>
      <Ionicons name="close-sharp" size={50}></Ionicons>
      </View>
      
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    
    </SafeAreaView>
  );
};

export default CustomSidebarMenu;
