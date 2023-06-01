import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyD9Qo3btLGxTg50ongoAeBuLIdpBdIOgx8',
  authDomain: 'music-ed027.firebaseapp.com',
  projectId: 'music-ed027',
  storageBucket: 'music-ed027.appspot.com',
  messagingSenderId: '564970599734',
  appId: '1:564970599734:web:ce50e13f783faf13cc2f97'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const usersCollection = db.collection('users')
const storage = firebase.storage()

export { auth, db, usersCollection, storage }
