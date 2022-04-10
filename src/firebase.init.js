// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCk7iTgiGpzXvhjitNRf3Oa1EqkKZqBzNo",
//   authDomain: "ema-john-simple-85c01.firebaseapp.com",
//   projectId: "ema-john-simple-85c01",
//   storageBucket: "ema-john-simple-85c01.appspot.com",
//   messagingSenderId: "598631523012",
//   appId: "1:598631523012:web:16797e70a7e5e9f0acdf91"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);



// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChU8e3CHoOn2fvrXHApzqM_kr4XOuMlCc",
  authDomain: "ema-john-simple-auth-59.firebaseapp.com",
  projectId: "ema-john-simple-auth-59",
  storageBucket: "ema-john-simple-auth-59.appspot.com",
  messagingSenderId: "192909489405",
  appId: "1:192909489405:web:cfdfebbe9c02abb944fa94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const auth = getAuth(app);

export default auth;