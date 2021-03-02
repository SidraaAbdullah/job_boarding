import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyAukFzw0boUnpwYzGcm6AxHuwxktwO4TNs",
    authDomain: "job-boarding.firebaseapp.com",
    projectId: "job-boarding",
    storageBucket: "job-boarding.appspot.com",
    messagingSenderId: "384784844438",
    appId: "1:384784844438:web:de9cca50b890f3069e24b7",
    measurementId: "G-FGE1KTB85M"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebaseConfig;