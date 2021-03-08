import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBLo9BJ6TGRqwJLDbZyNPWFfk-nW4X7_LY",
    authDomain: "carwallet-react.firebaseapp.com",
    projectId: "carwallet-react",
    storageBucket: "carwallet-react.appspot.com",
    messagingSenderId: "298613705409",
    appId: "1:298613705409:web:af0a3c5b1d8f19e1a2e240"
  };

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default}