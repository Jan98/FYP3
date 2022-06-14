import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

const DATA = [
  {
    title: 'Maintain proper documentation to drive. Examples of Infringement:',
    data: ['Driving without valid driving license/vocational license/vehicle insurance', 
    'Using false document to sign up as a driver'],
  },
  {
    title: 'Assault, harassment or abuse of any kind will not be tolerated. Examples of Infringement',
    data: ['Attempted or actual criminal acts on the platform including physical/sexual assault, rape, murder, or kidnap', 
    'Sexual harassment –Harass user, send inappropriate messages of a sexual nature', 
    'Explicit staring, leering, or gestures',
    'Use of vulgar, rude, or inappropriate words in any form',  
    'Contacting or stalking users after bookings are completed for personal reasons either online or in-person'],
  },
  {
    title: 'Do not commit crimes. Examples of Infringement',
    data: ['Failure to comply with regulations/instructions as required by IIUM PickUp or the government', 
    'Is under investigation for a criminal offense', 
    'Intentional damage or vandalism to IIUM PickUp user’s'],
  },
  {
    title: 'Follow road safety laws. Examples of Infringement',
    data: ['Causing injuries/ permanent disability/ death to users, third parties or pedestrian(s)', 
    'Violating traffic regulations'],
  },
  {
    title: 'Alcohol, drugs and weapons are not tolerated. Examples of Infringement',
    data: ['Possession of any weapon such as guns, pepper spray, batons, or knives', 
    'Possession of drugs or any illegal drug-related offences',
    'Accepting items for delivery other than those allowed by the service without reporting to IIUM PickUp/authorities: (a) illegal/suspicious items (e.g. illegal drugs), (b) dangerous goods (e.g. weapons), (c) items deemed prohibited in GrabExpress waybill or (d) any other item prohibited by law'],
  },
  {
    title: 'Look after your vehicle. Examples of Infringement',
    data: ['Complaints on condition of your safety equipment (seatbelt/helmet)', 
    'Not using the correct mode of transport/delivery as registered with IIUM PickUp',
    'Sharing or pooling of vehicle during bookings/deliveries'],
  },
  {
    title: 'Practise good hygiene. Examples of Infringement',
    data: ['Not wearing mask or face shield during bookings/deliveries', 
    'Driving or riding if you feel unwell',
    'Not ventilating or disinfecting vehicle/delivery bag regularly',
    'Not maintaining social distancing when waiting for bookings or collecting orders from customers'],
  },
  {
    title: 'Practise safe and effective delivery',
    data: ['Follow all the safety protocols and guidelines to ensure deliveries are done in a safe and effective manner.'],
  },
  {
    title: 'Act in good faith. Do not cheat or defraud IIUM PickUp by any method such as sharing or creating duplicate accounts. Examples of Infringement',
    data: ['Retaining possession of passenger property left behind in vehicle for more than 24 hours after confirming with IIUM PickUp',
    'Any form of gaming incentives, fares and other earnings component. This includes but is not limited to conspiracy with passenger/drivers and creating false bookings/accounts with fellow driver'],
  },
  {
    title: 'Do not discriminate. Examples of Infringement',
    data: ['Refusing or cancelling a booking based on the user’s characteristic(s)', 
    'Use of any remarks either verbally or through text messages that could comment on a persons race, religion, nationality, disability, sexual orientation, gender, age or other characteristics'],
  },
  {
    title: 'Be fair to our other users. Examples of Infringement',
    data: ['Picking up passenger with another passenger in the vehicle for non-GrabShare rides',
    'Dropping off delivery with another user in vehicle',
    'Requesting another driver to pick up passenger or passenger to ride with another driver',
    'Not dropping user or delivery at destination without reasonable cause',
    'Making an unnecessary detour (e.g. to fill fuel)'],
  },
  {
    title: 'Be well-mannered with our users. Examples of Infringement',
    data: ['Smoking during bookings (e.g. in the vehicle or when making a delivery)', 
    'Inappropriate attire (e.g. shorts/sleeveless shirts/slippers)',
    'Dirty or unhygienic (interior or exterior) vehicle such as cigarette or any uncomfortable smell',
    'Verbal in-person exchange of words that are deemed overtly personal which includes attempts to obtain another person’s phone number, home address, daily activities and routine, other personal non-sexual information'],
  },
  {
    title: 'Ensure a seamless experience.',
    data: ['Forcing passenger to be picked up/dropped off at non designated location', 
    'Changing route without passenger’s permission',
    'Intentionally preventing other drivers from picking up passengers/fulfilling orders',
    'Intentionally picking up another driver’s passenger'],
  },
  {
    title: 'In case of emergency…',
    data: ['Always call the authorities first. Once all parties are safe and authorities have been notified, contact IIUM PickUP via email (iiumpickup@gmail.com) to report the incident.'],
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (
  <SafeAreaView style={styles.container} >
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => <Text style={styles.header}>{title}</Text>}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#add8e6',
    padding: 20,
    marginVertical: 3,
  },
  header: {
    fontSize: 18,
    backgroundColor: '#DCDCDC',
    marginTop: 8,
  },
  title: {
    fontSize: 18,
  },
});

export default App;