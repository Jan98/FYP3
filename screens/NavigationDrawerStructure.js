import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';


const NavigationDrawerStructure = (props) => {
    //Structure for the navigatin Drawer
    const toggleDrawer = () => {
      //Props to open/close the drawer
      props.navigationProps.toggleDrawer();
    };
  
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={toggleDrawer}>
          {/*Donute Button Image */}
          <Image source={require("../assets/baseline_menu_black_24dp.png")}
          
          style={{ width: 30, height: 30, marginLeft: 15 }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  export default NavigationDrawerStructure;