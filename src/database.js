import * as firebase from 'firebase/app'
import 'firebase/database'
import config from './config'
// Initialize Firebase
firebase.initializeApp(config)

const database = firebase.database()

export default database
