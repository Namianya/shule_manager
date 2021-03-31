import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCfyGt6n2x_pi68aJLC4Bn97OBTiE1CqBM",
    authDomain: "shule-manager.firebaseapp.com",
    projectId: "shule-manager",
    storageBucket: "shule-manager.appspot.com",
    messagingSenderId: "440029414738",
    appId: "1:440029414738:web:bef0b0e16252d44698668b",
    measurementId: "G-L95HCVYDGJ"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore()

export default firebase