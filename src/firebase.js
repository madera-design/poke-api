import firebase from 'firebase/app'
import 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyBwuuZ2Nx1NhKlqTPfgEDnyr0zEu9L7nG4",
    authDomain: "redux-recat-auth.firebaseapp.com",
    projectId: "redux-recat-auth",
    storageBucket: "redux-recat-auth.appspot.com",
    messagingSenderId: "1031171939706",
    appId: "1:1031171939706:web:70072000afdb53e16a0ac3",
    measurementId: "G-J7499ZJPNH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()

  export {auth, firebase}
