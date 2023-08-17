importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-messaging.js');
import axios from '../node_modules/axios';

const getStartToken = messaging => {
  messaging.getToken().then((currentToken) => {
      if (currentToken) {
          sendTokenToServer(currentToken);
      }
      else {
          // Show permission request.
          RequestPermission();
          setTokenSentToServer(false);
      }
  }).catch((err) => setTokenSentToServer(false));
}
const RequestPermission = () =>{
  messaging.requestPermission()
      .then(permission =>{
          if (permission === 'granted') {
              console.log("have Permission");
              //calls method again and to sent token to server
              getStartToken();
          }
          else {
              console.log("Permission Denied");
          }
      })
      .catch(err=> console.log(err))
}

const sendTokenToServer = token => {
  if (isTokenSentTokenToServer()) {return}
  axios.post({
      url: URL,
      type: 'POST',
      data: {
      //whatever you wanna send
      push_token:token,
    },
    success: response=> setTokenSentToServer(true),
    error: err=> setTokenSentToServer(false)
  });
}

const isTokenSentTokenToServer = ()=> window.localStorage.getItem('sendTokenToServer') === '1';

const setTokenSentToServer = (sent) => window.localStorage.setItem('sendTokenToServer', sent ? '1' : '0');

firebase.initializeApp({
  apiKey: "AIzaSyB6Fq4TJJJf9WNnwVs5fgC0if4CHR9cUIQ",
  authDomain: "ayazona-bf585.firebaseapp.com",
  databaseURL: "https://ayazona-bf585.firebaseio.com",
  storageBucket: "bucket.appspot.com",
  projectId: "ayazona-bf585",
  messagingSenderId: "438579212048",
  appId: "1:438579212048:web:9e0970cef1e5aa4c423f95",
  measurementId: "G-4H8SSXREMF"
});

const messaging = firebase.messaging();
messaging.usePublicVapidKey(
    'BLvB0PJXeIHWb_m1zRloObjWxLGNmDAfyDnPpFwLR_j-tNZL9uh132v2PMVf7GyStYyJ-nU4gsboUaGajfXQkDQ'
);
getStartToken(messaging);