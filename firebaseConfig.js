import firebase from "firebase/compat/app";

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/compat/auth";
import "firebase/compat/database";
//import "firebase/compat/firestore";
//import "firebase/compat/functions";
import "firebase/compat/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
const firebaseConfig = {
  apiKey: "AIzaSyAz1jdFJgDOEUMemQY1_rM6nb3aGbafBn0",
  authDomain: "sparta-myhoneytip-kim-eff5f.firebaseapp.com",
  projectId: "sparta-myhoneytip-kim-eff5f",
  databaseURL:"https://sparta-myhoneytip-kim-eff5f-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "sparta-myhoneytip-kim-eff5f.appspot.com",
  messagingSenderId: "223496031697",
  appId: "1:223496031697:web:c5ca0effd5b988d9da64f0",
  measurementId: "G-88GFW2YB7Z"
};
  

//사용 방법입니다. 
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()