import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

var config = {
    apiKey: "AIzaSyAKvIcECITubznwXnhVNeC2e9mBYNL1sYM",
    authDomain: "my-project-1556727790260.firebaseapp.com",
    projectId: "my-project-1556727790260",
    storageBucket: "my-project-1556727790260.appspot.com",
    messagingSenderId: "674927058189",
    appId: "1:674927058189:web:92002c2db20eeb6b866444",
    measurementId: "G-4CC8SQ56PF"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`/users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        // Create
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log(error.messages);
        }
    } 

    return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    })

    return await batch.commit();
}

export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
      const { title, items } = doc.data();
  
      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      };
    });
  
    return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    }, {});
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;