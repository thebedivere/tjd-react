import firebase from 'firebase'
import config from './config'
// Initialize Firebase
firebase.initializeApp(config)

const database = firebase.database()

export default database
