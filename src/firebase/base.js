import * as firebase from "firebase";
import Rebase from "re-base";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyANDMeBPU0inCqGjcTPDID5xu7zWUGHEpc",
  authDomain: "jsquaredwedding-d6eb7.firebaseapp.com",
  databaseURL: "https://jsquaredwedding-d6eb7.firebaseio.com",
  projectId: "jsquaredwedding-d6eb7",
  storageBucket: "jsquaredwedding-d6eb7.appspot.com",
  messagingSenderId: "64435837941",
  appId: "1:64435837941:web:92ea186bde056e98e75ebc"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
