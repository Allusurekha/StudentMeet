importScripts("https://www.gstatic.com/firebasejs/9.8.3/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.8.3/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDSoK4R8JElV_Awx52avvYqLegHR5AR0Ks",
  authDomain: "fir-demo-b7301.firebaseapp.com",
  databaseURL: "https://fabinet-7cb0f-default-rtdb.firebaseio.com",
  projectId: "fir-demo-b7301",
  storageBucket: "fir-demo-b7301.appspot.com",
  messagingSenderId: "941427953884",
  appId: "1:941427953884:web:76cbcb007545efb5202419",
  measurementId: "G-DWV52LSMK2",
});
const messaging = firebase.messaging();
// const messaging = getMessaging(firebase);
