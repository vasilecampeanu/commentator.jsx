import { initializeApp } from 'firebase/app';

import {
    getFirestore,
    collection
} from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC2akolTTxHfWgO34eU7HosfU2yPoqBYMM",
    authDomain: "tests-2d9af.firebaseapp.com",
    projectId: "tests-2d9af",
    storageBucket: "tests-2d9af.appspot.com",
    messagingSenderId: "611755012677",
    appId: "1:611755012677:web:f4a2d1abae5b6cfc9d292c",
    measurementId: "G-C2DZ3541YL"
};

initializeApp(firebaseConfig);

const db = getFirestore();

export default db;