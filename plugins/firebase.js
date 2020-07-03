import * as firebase from 'firebase/app'
import 'firebase/auth'
import { firebaseConfig } from '~/APIKeys/firebaseConfig.js'

firebase.initializeApp(firebaseConfig)
console.log('[firebase/app] initialized')

export const auth = firebase.auth()
export const provider = new firebase.auth.GoogleAuthProvider()
export default firebase
