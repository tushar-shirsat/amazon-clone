// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCLhVeMtfTBzU8b0nGSd4DHTTVMbL4Pkw4",
    authDomain: "challenge-e20f9.firebaseapp.com",
    projectId: "challenge-e20f9",
    storageBucket: "challenge-e20f9.appspot.com",
    messagingSenderId: "508283076698",
    appId: "1:508283076698:web:eb282a7d071deea2d4d863",
    measurementId: "G-XWJ0KWJ6T9"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};