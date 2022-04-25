import * as firebase from 'firebase';

const firebaseConfig = {
apiKey: "AIzaSyAfaSQC30MvlDwYtkmF-Lyc3rCJUow-N1s",
  authDomain: "ecommerce-de034.firebaseapp.com",
  projectId: "ecommerce-de034",
  storageBucket: "ecommerce-de034.appspot.com",
  messagingSenderId: "99343713714",
  appId: "1:99343713714:web:877576f4b4dbfee9ef50ab"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
