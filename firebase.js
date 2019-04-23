import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA__IwEAJrUcft93COu17I26oyVQwoHqlw",
  authDomain: "youtrition-dummy.firebaseapp.com",
  databaseURL: "https://youtrition-dummy.firebaseio.com",
  projectId: "youtrition-dummy",
  storageBucket: "youtrition-dummy.appspot.com",
  messagingSenderId: "628818385926"
};
const app = firebase.initializeApp(config);

export const db = app.database();
