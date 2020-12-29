import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBK5l5zIuq8dEAlABEO03SjYJWQWQ-QbEw",
    authDomain: "crwn-oliver.firebaseapp.com",
    projectId: "crwn-oliver",
    storageBucket: "crwn-oliver.appspot.com",
    messagingSenderId: "641866420136",
    appId: "1:641866420136:web:c7a523fd9d8cb106ea579d",
    measurementId: "G-P1TWL9WGNX"
};

firebase.initializeApp(config);

export const auth = firebase.auth()
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => { console.log('logging'); auth.signInWithPopup(provider) };

export default firebase;