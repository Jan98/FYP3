// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCmCD4PpA7ys4XYi14kK1z1dzEupTEXoes",
    authDomain: "fyp2022-f2dde.firebaseapp.com",
    projectId: "fyp2022-f2dde",
    storageBucket: "fyp2022-f2dde.appspot.com",
    messagingSenderId: "991536976678",
    appId: "1:991536976678:web:ad6fb161277a2458efa7e7"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };