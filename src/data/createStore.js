import { createStore as reduxCreateStore, combineReducers, compose } from 'redux'
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
import { reduxFirestore, firestoreReducer } from 'redux-firestore'
import appReducers from './appReducers'
import firebaseConfig from './config'
import firebase from 'firebase'
import 'firebase/firestore'

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

firebase.initializeApp(firebaseConfig)
firebase.firestore()

firebase.firestore().enablePersistence().catch(err => console.log(err))

const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
  )(reduxCreateStore)

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  info: appReducers
})

const createStore = () => createStoreWithFirebase(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default createStore
