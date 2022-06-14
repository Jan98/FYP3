import * as React from 'react';
import { useNavigation } from '@react-navigation/core'
import { StyleSheet, Button, View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';

const HistoryDriverScreen = (navigation) => {
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
          
          <Text
            style={styles.text}>
            This is an Driver History page. Will do the flatlist!
          </Text>
          
          <View style={styles.buttonContainer}>
          
          
          
        </View>    
      </View>
    </SafeAreaView>
  );
};

export default HistoryDriverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'center',
    marginBottom: 16,
    marginTop: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
      alignItems: "center",
      padding: 12,
      borderRadius: 12,
      backgroundColor: "#aae6e6",
      marginBottom: 16,
      width: '30%',
      marginTop: 50,
      
  },
  buttonText: {
    color: 'black',
    //fontWeight: 'bold',
  }

});
