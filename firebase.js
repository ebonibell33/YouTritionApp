import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyD9sjW_c5YiZAGDGDYw_RKZymOukt-O2_4',
  authDomain: 'youtrition-286a7.firebaseapp.com',
  databaseURL: 'https://youtrition-286a7.firebaseio.com',
  projectId: 'youtrition-286a7',
  storageBucket: 'youtrition-286a7.appspot.com',
  messagingSenderId: '787682246160'
};
const app = firebase.initializeApp(config);

export const db = app.database();
