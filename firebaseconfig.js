const { initializeApp } = require('firebase/app');
const { getFirestore, collection } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyDY3cxsKiLp0ES2lLRkw4m8ikDedradDXk",
  authDomain: "student-data-43212.firebaseapp.com",
  projectId: "student-data-43212",
  storageBucket: "student-data-43212.appspot.com",
  messagingSenderId: "285941370150",
  appId: "1:285941370150:web:6ded7ffe7ba2c6439585e7",
  measurementId: "G-QXYYDFTL0E"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const Users = collection(db, "Users");

module.exports = Users;
