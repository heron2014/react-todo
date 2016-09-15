import firebase from 'firebase';
import {apiKey} from './keys';
import {authDomain} from './keys';
import {databaseURL} from './keys';
import {storageBucket} from './keys';
import {messagingSenderId} from './keys';

console.log(apiKey);
// Initialize Firebase
try {
  var config = {
    apiKey: apiKey,
    authDomain: authDomain,
    databaseURL: databaseURL,
    storageBucket: storageBucket,
    messagingSenderId: messagingSenderId
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
