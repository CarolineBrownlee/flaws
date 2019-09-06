import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from "firebase/app";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyApUmUjCUdJsqTialVEnbFAE5D_-NQNwoE",
    authDomain: "flaws-a-dating-app.firebaseapp.com",
    databaseURL: "https://flaws-a-dating-app.firebaseio.com",
    projectId: "flaws-a-dating-app",
    storageBucket: "flaws-a-dating-app.appspot.com",
    messagingSenderId: "644539717172",
    appId: "1:644539717172:web:54a6311598855824f41c61"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
