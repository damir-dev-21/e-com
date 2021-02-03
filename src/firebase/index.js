import firebase from 'firebase/app'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDJ2OpNRIVr1cNcLerr0058XAweL3QICww",
    authDomain: "e-com-777f7.firebaseapp.com",
    databaseURL: "https://e-com-777f7.firebaseio.com",
    projectId: "e-com-777f7",
    storageBucket: "e-com-777f7.appspot.com",
    messagingSenderId: "1070427068874",
    appId: "1:1070427068874:web:a847abf5221d5d6dc91733"
  };

firebase.initializeApp(firebaseConfig) 

const storage = firebase.storage()

export {storage, firebase as default}