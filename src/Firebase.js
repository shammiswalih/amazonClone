// import firebase from "firebase/compat/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// import "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwrolzeA4XwMiVKKV1lVekF5WhNGjzQzs",
  authDomain: "clone-4d015.firebaseapp.com",
  projectId: "clone-4d015",
  storageBucket: "clone-4d015.appspot.com",
  messagingSenderId: "673346138193",
  appId: "1:673346138193:web:896d70996344cea050c870",
  measurementId: "G-BC7T6E4YKG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
