import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBVWqL6KWVE3BlOk9OgiQx3bbUzrLIoduo",
    authDomain: "e-clone-a7b49.firebaseapp.com",
    databaseURL: "https://e-clone-a7b49.firebaseio.com",
    projectId: "e-clone-a7b49",
    storageBucket: "e-clone-a7b49.appspot.com",
    messagingSenderId: "794790962543",
    appId: "1:794790962543:web:f48b0cedde776be0bd349a",
    measurementId: "G-TR86YNT6E6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

export { db, auth };

