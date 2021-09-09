import firebase from 'firebase';
import firebaseConfig from './firebase';


const init = firebase.initializeApp(firebaseConfig);
export const firebaseAuth = init.auth();
export const db = init.firestore()