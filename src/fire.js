import firebase from 'firebase/compat/app';
import 'firebase/compat/app';
import 'firebase/compat/auth'
const firebaseConfig = {
    apiKey: "AIzaSyCfO7qS8B7175rbwXDr9GGZ3vLdluZlOFY",
    authDomain: "kanykei-marketplace.firebaseapp.com",
    projectId: "kanykei-marketplace",
    storageBucket: "kanykei-marketplace.appspot.com",
    messagingSenderId: "644573009933",
    appId: "1:644573009933:web:3c6c02153952648eb8dd44"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;