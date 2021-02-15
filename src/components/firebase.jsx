import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'
firebase.initializeApp ({
    apiKey: "AIzaSyBkepbb8k02SQGRlARuWwJz9Hic0IEjwU0",
    authDomain: "boginoo-1.firebaseapp.com",
    projectId: "boginoo-1",
    storageBucket: "boginoo-1.appspot.com",
    messagingSenderId: "467886774611",
    appId: "1:467886774611:web:503429cb45761fd38fa9a6",
    measurementId: "G-Q5P17HZ1KN"
});
  // Initialize Firebase
let auth = firebase.auth();
let db = firebase.firestore();
export { firebase, db, auth }