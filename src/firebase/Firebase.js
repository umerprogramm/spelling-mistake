import firebase from 'firebase/compat/app';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup 
} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyASgFQ4xl1YrHeLb1Owu2ywyVvdpE3jBwg",
  authDomain: "spelling-mistake.firebaseapp.com",
  projectId: "spelling-mistake",
  storageBucket: "spelling-mistake.appspot.com",
  messagingSenderId: "1087360774655",
  appId: "1:1087360774655:web:ff8b5288bd60bced3777ca",
  measurementId: "G-XMEJMCYF3J"
};

firebase.initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();
const Popup = signInWithPopup ;
export { auth, provider, Popup };


