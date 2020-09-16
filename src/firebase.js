import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCZiRx2eJuT4pHXCBBbP6tvcRCvDVvaWDk",
    authDomain: "facebook-clone-ce7ca.firebaseapp.com",
    databaseURL: "https://facebook-clone-ce7ca.firebaseio.com",
    projectId: "facebook-clone-ce7ca",
    storageBucket: "facebook-clone-ce7ca.appspot.com",
    messagingSenderId: "634658554444",
    appId: "1:634658554444:web:ccfc95a8dce0de1d162ae9",
    measurementId: "G-8P23P36GKE"
  }; 

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;