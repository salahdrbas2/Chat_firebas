import firebase from "firebase/compat";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB4X_0gg6YpkQHH-N7lVX_d3lU6uRRAyjk",
  authDomain: "firechat-2e7ec.firebaseapp.com",
  projectId: "firechat-2e7ec",
  storageBucket: "firechat-2e7ec.appspot.com",
  messagingSenderId: "675091554832",
  appId: "1:675091554832:web:39de01abcb13dd3f99e095",
  measurementId: "G-X3L06D8PYH",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
