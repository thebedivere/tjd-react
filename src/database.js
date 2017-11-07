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

export function requestDocument (collection, document) {
  return () => {
    const docRef = firestore.collection(collection).doc(document)
    return docRef.get().then(doc => {
      if (doc.exists) {
        return doc.data()
      } else {
        return {
          error: 'document does not exist :('
        }
      }
    }).catch(err => err)
  }
}

export function watchDocument (collection, document, callback) {
  return firestore.collection(collection).doc(document).onSnapshot(doc => {
    if (doc.exists) {
      callback(doc.data())
    } else {
      return {
        error: 'document does not exist :('
      }
    }
  })
}

export default database
