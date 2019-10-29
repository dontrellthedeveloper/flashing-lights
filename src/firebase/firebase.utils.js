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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};



export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

