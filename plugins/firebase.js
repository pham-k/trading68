import * as firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyDP90ROVy3KquDr5_At8K3USKLhIiBJvs8',
  authDomain: 'medcare-d50c6.firebaseapp.com',
  databaseURL: 'https://medcare-d50c6.firebaseio.com',
  projectId: 'medcare-d50c6',
  storageBucket: 'medcare-d50c6.appspot.com',
  messagingSenderId: '320481092894',
  appId: '1:320481092894:web:5a033290c2678c7dbf950f',
  measurementId: 'G-XSGRXJ8GRS'
}

firebase.initializeApp(config)
console.log('[firebase/app] initialized')

export const auth = firebase.auth()
export const provider = new firebase.auth.GoogleAuthProvider()
export default firebase
