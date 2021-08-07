import firebase from "firebase/app";
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyAQKsrudlb1Ywa99hEIn7TTtzVwlPHdWfw",
    authDomain: "vue-invoice-app-6e106.firebaseapp.com",
    projectId: "vue-invoice-app-6e106",
    storageBucket: "vue-invoice-app-6e106.appspot.com",
    messagingSenderId: "1032906095346",
    appId: "1:1032906095346:web:583bc80cc4e84f7a156e6b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();