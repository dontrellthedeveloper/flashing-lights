import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCQUWXM81WiMY6cIcmbICpjGvdn0KxAoig",
    authDomain: "flashing-lights-db.firebaseapp.com",
    databaseURL: "https://flashing-lights-db.firebaseio.com",
    projectId: "flashing-lights-db",
    storageBucket: "flashing-lights-db.appspot.com",
    messagingSenderId: "677928805494",
    appId: "1:677928805494:web:9bde72ea5c769636e1ab57"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

