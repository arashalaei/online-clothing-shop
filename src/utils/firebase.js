import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

var config = {
    apiKey: "AIzaSyAKvIcECITubznwXnhVNeC2e9mBYNL1sYM",
    authDomain: "my-project-1556727790260.firebaseapp.com",
    projectId: "my-project-1556727790260",
    storageBucket: "my-project-1556727790260.appspot.com",
    messagingSenderId: "674927058189",
    appId: "1:674927058189:web:92002c2db20eeb6b866444",
    measurementId: "G-4CC8SQ56PF"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;