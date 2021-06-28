import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCIuM8xX_VUalOXc9mh7WTivWqHGuXd13o",
  authDomain: "react-instagram-clone-887ea.firebaseapp.com",
  projectId: "react-instagram-clone-887ea",
  storageBucket: "react-instagram-clone-887ea.appspot.com",
  messagingSenderId: "457253494703",
  appId: "1:457253494703:web:f4754ee372a50ee85d595a",
  measurementId: "G-KNS2CVK37J"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
