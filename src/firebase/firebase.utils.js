import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyBLrJrVGDl6Ho2S6LLlU3QQ-LA2UYuExgg',
  authDomain: 'crwn-db-97609.firebaseapp.com',
  projectId: 'crwn-db-97609',
  storageBucket: 'crwn-db-97609.appspot.com',
  messagingSenderId: '336329040087',
  appId: '1:336329040087:web:0feef6e55250c246f25092',
  measurementId: 'G-XXZYKZJJHV',
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google Authentication Utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
