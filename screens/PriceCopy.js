import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HeadTable: ['Place', 'RM'],
      widthArr: [240, 80],
      DataTable: [
        ['Inside UIA', '3'],
        ['LRT Gombak', '10'],
        ['Melawati Mall', '13'],
        ['Idaman', '12'],
        ['Terminal Bas Selatan', '30'],
        ['Setapak', '12'],
        ['Wangsa Maju', '13'],
        ['KLIA 1/2', '90'],
        ['AEON BIG Wangsa Maju', '13'],
        ['Wangsa Walk Mall', '13'],
        ['UTM/UTM Residensi', '22'],
        ['National Library', '22'],
        ['KLCC', '25'],
        ['Berjaya Times Square', '25'],
        ['Hentian Duta', '25'],
        ['Pakelling', '20'],
        ['Low Yat Plaza', '25'],
        ['PWTC', '20'],
        ['Giant Batu Caves', '10'],
        ['Giant Taman Permata', '13'],
        ['KL Sentral / NU Sentral', '25'],
        ['Zoo Negara', '15'],
        ['Hospital Selayang', '16'],
        ['Sri Gombak', '10'],
        ['KL Traders Square', '14'],
        ['PV 2/6/8', '10'],
        ['McD BHP / McD Taman Melawati', '10'],
        ['Bangsar', '25'],
        ['Cyberjaya', '55'],
        ['I-CITY Shah Alam', '55'],
        ['Genting Highland Premium Outlet', '60'],
        ['Bai Krapaw', '7'],
        ['Kubur', '8'],
        ['KTM Batu Caves', '12'],
        ['Hospital Ampang', '25'],
        ['Egyptian Embassy Ampang', '22'],
        ['Indonesian Embassy Ampang', '25'],
        ['Ikea Damansara', '35'],
        ['Subang Airport', '40'],
        ['University Malaya', '30'],
        ['UPM Serdang', '40'],
        ['HKL/Chow Kit', '18']
      ]
    }
  }
  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
         <Text style={{alignItems: 'center', justifyContent: 'center'}}> ALL PRICES ARE WITHOUT TOLL</Text>
        <ScrollView>
        <Table borderStyle={{borderWidth: 1, borderColor: '#ffa1d2'}}>
          <Row data={state.HeadTable} widthArr={state.widthArr} style={styles.HeadStyle} textStyle={styles.TableText}/>
          <Rows data={state.DataTable}  widthArr={state.widthArr} textStyle={styles.TableText}/>
        </Table>
        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: { 
    //flex: 1,
    //padding: 18,
    paddingTop: 35,
    marginBottom: 35,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  HeadStyle: { 
    height: 50,
    alignContent: "center",
    backgroundColor: '#ffe0f0',
    justifyContent: 'center',
  },
  TableText: { 
    margin: 10
  }
});