import firebase from 'firebase'

// Initialize Firebase
const config = {
    apiKey : "AIzaSyBqrt5_rmN5ReJ_cXCWkFrNYieEwAOxTng",
    authDomain : "josh-d48dd.firebaseapp.com",
    databaseURL : "https://josh-d48dd.firebaseio.com",
    projectId : "josh-d48dd",
    storageBucket : "josh-d48dd.appspot.com",
    messagingSenderId : "534207187182"
}
firebase.initializeApp(config)

const database = firebase.database()
export default database

