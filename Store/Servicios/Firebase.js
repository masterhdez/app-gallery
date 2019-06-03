import * as firebase from 'firebase'
import 'firebase/firestore';


const config = {
  apiKey: "AIzaSyDr70_l9VJNVAI-qsPoe5aG1ySHFmWNwF0",
  authDomain: "galerys-photapp.firebaseapp.com",
  databaseURL: "https://galerys-photapp.firebaseio.com",
  projectId: "galerys-photapp",
  storageBucket: "galerys-photapp.appspot.com",
  messagingSenderId: "70908431809",
  appId: "1:70908431809:web:637796e2a7fb3c79"
  };
  // Initialize Firebase
  firebase.initializeApp(config);


  export const autenticacion = firebase.auth();
  export const baseDeDatos = firebase.database();
 
  



  