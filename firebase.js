import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7b7m-wlPBgI3Hory10wMOMR-_WeBJO3M",
  authDomain: "docs-40b80.firebaseapp.com",
  projectId: "docs-40b80",
  storageBucket: "docs-40b80.appspot.com",
  messagingSenderId: "328644162338",
  appId: "1:328644162338:web:30b816b5adcae8b95d2b7b",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
