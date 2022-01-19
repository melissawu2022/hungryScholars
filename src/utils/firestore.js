import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeCMWn1PhZWIOi4Gn6EEXPK2z6tezSNaQ",
  authDomain: "mock-food-truck-webapp.firebaseapp.com",
  projectId: "mock-food-truck-webapp",
  storageBucket: "mock-food-truck-webapp.appspot.com",
  messagingSenderId: "573583005542",
  appId: "1:573583005542:web:ab057ef85cb6f71e435aa7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();

export default firebase