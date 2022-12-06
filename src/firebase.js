import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyA-r4JsNwT7MMJkHD_wvoBeSGVhNK9UxVc",

  authDomain: "emergency-response-syste-66613.firebaseapp.com",

  projectId: "emergency-response-syste-66613",

  storageBucket: "emergency-response-syste-66613.appspot.com",

  messagingSenderId: "995698952592",

  appId: "1:995698952592:web:51fa81e0de048668000b15",

  measurementId: "G-K8CFXTMC24"

  
  
  }
  
  const firebaseSApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
   const db = firebaseSApp.firestore();
   const googleProvider = new firebase.auth.GoogleAuthProvider();
   const facebookProvider = new firebase.auth.FacebookAuthProvider();
   const TwitterProvider = new firebase.auth.TwitterAuthProvider();
   const GithubProvider = new firebase.auth.GithubAuthProvider();
   const storage = firebase.storage();
  export default {auth, db, storage};
  export  {db, googleProvider, facebookProvider, TwitterProvider,GithubProvider};
  export  {auth};
  export  {storage};