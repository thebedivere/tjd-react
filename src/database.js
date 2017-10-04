import * as firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/firestore'
import config from './config'
// Initialize Firebase
firebase.initializeApp(config)

// initialize database
export const database = firebase.database()

// initialize firestore
export const firestore = firebase.firestore()

export default database
