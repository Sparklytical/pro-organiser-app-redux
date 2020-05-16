/* eslint-disable */
import firebase from "firebase/app";
import firestore from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTNXmstpGzKmnoqBVdrxpbcErnlABC9MM",
  authDomain: "pro-organiser-redux.firebaseapp.com",
  databaseURL: "https://pro-organiser-redux.firebaseio.com",
  projectId: "pro-organiser-redux",
  storageBucket: "pro-organiser-redux.appspot.com",
  messagingSenderId: "497042704009",
  appId: "1:497042704009:web:6e03b610f3d9cadad6a858",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// export the firestore db
export default firebaseApp.firestore();
