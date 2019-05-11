import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCMXvk5V2vqWnrfjgf5UVEYigghwRLEh30",
  authDomain: "catch-of-the-day-602de.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-602de.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
