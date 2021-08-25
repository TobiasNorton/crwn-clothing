import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyB52t6XlNdv6JDrtQQGHh42f4OUa9LJ8rE',
  authDomain: 'crwn-db-e23e8.firebaseapp.com',
  databaseURL: 'https://crwn-db.firebaseio.com',
  projectId: 'crwn-db-e23e8',
  storageBucket: 'crwn-db-e23e8.appspot.com',
  messagingSenderId: '160343565008',
  appId: '1:160343565008:web:fe95b49e97888d2c9234d5',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
