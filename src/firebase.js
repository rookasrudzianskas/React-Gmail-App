import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBaNe5lk3MfU976u399U_77M_9diD_DZoc",
    authDomain: "rookas-gemail-app.firebaseapp.com",
    projectId: "rookas-gemail-app",
    storageBucket: "rookas-gemail-app.appspot.com",
    messagingSenderId: "782137019192",
    appId: "1:782137019192:web:ca2b9b88b4373a9ecf4fcd",
    measurementId: "G-ZFBF4YHT4V"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};

export default db;
