import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAano_N5ctD2HljyDtEH_8lV2DCcC7G4vM",
  authDomain: "udemy-ng-http-59d8a.firebaseapp.com",
  databaseURL: "https://udemy-ng-http-59d8a.firebaseio.com",
  projectId: "udemy-ng-http-59d8a",
  storageBucket: "udemy-ng-http-59d8a.appspot.com",
  messagingSenderId: "361151080377",
  appId: "1:361151080377:web:54be956a74769626a53868"
};
//const fb = (process).browser ? firebase : require('firebase');
//console.log(firebase);
const fb = firebase;
if(firebase.apps.length === 0){
  fb.initializeApp(firebaseConfig);
}


// export const auth = fb.auth();

// export const googleProvider = new fb.auth.GoogleAuthProvider();

export async function getFirestore(){
   // export const db = fb.firestore();
   console.log('fb', fb);
   return await fb.firestore();

}
export async function getFirebaseAuth(){
  // export const db = fb.firestore();
  return await fb.auth();

}
export async function getGoogleProvider(){
  // export const db = fb.firestore();
  return new fb.auth.GoogleAuthProvider();

}
//export const db = fb.firestore();
