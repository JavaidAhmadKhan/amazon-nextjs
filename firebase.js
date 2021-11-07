import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAxrz69mnmW_plbq8QnUIwRRsFu7EPiFEw",
  authDomain: "amzn-3.firebaseapp.com",
  projectId: "amzn-3",
  storageBucket: "amzn-3.appspot.com",
  messagingSenderId: "927016720446",
  appId: "1:927016720446:web:1ca91681ae9f42824bd96f",
  measurementId: "G-M75CLVQYXB",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
