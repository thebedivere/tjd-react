// Add additional services that you want to use
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
// Add additional modules that you want to use
import 'flamelink/content'
import 'flamelink/storage'
import 'firebase/firestore'

// Firebase app is always required and must be first
import firebase from 'firebase/app'
// Flamelink app is always required
import flamelink from 'flamelink/app'

// import 'firebase/messaging'
// import 'firebase/functions'

// import 'flamelink/settings'
// import 'flamelink/navigation'
// import 'flamelink/users'

const firebaseConfig = {
  apiKey: 'AIzaSyD5cs73QLKfC2G9-a9d9tjPoRmWMiJogNA',
  authDomain: 'thejoshderocher-flamelink.firebaseapp.com',
  databaseURL: 'https://thejoshderocher-flamelink.firebaseio.com',
  projectId: 'thejoshderocher-flamelink',
  storageBucket: 'thejoshderocher-flamelink.appspot.com',
  messagingSenderId: '107790993154',
  appId: '1:107790993154:web:59e03c95e447ede736641b'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const app = flamelink({
  firebaseApp,
  env: 'production', // optional, defaults to `production`
  locale: 'en-US', // optional, defaults to `en-US`
  dbType: 'cf' // optional, defaults to `rtdb` - can be 'rtdb' or 'cf' (Realtime DB vs Cloud Firestore)
})

export default app
