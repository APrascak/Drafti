import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAcor8z3mkXjPpxQzFnhZbRy8N58V4iEZQ",
  authDomain: "drafti-io.firebaseapp.com",
  databaseURL: "https://drafti-io.firebaseio.com",
  projectId: "drafti-io",
  storageBucket: "drafti-io.appspot.com",
  messagingSenderId: "36869449749",
  appId: "1:36869449749:web:476b9898cf353c94"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.firestore()
