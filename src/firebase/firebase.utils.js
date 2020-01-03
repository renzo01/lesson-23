import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
 apiKey: "AIzaSyAef1XCu-6jv5uFUimK8f0rvYi0cqEAkZA",
  authDomain: "crwn-db-bde39.firebaseapp.com",
  databaseURL: "https://crwn-db-bde39.firebaseio.com",
  projectId: "crwn-db-bde39",
  storageBucket: "crwn-db-bde39.appspot.com",
  messagingSenderId: "235387227801",
  appId: "1:235387227801:web:fff28ea6a2b9ff99cab208",
  measurementId: "G-18ZHLDLLT3"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
