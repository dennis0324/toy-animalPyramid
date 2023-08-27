// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
export { createUserWithEmailAndPassword,signInWithEmailAndPassword}
import config from '../config'


export class FireBase{
  private app:FirebaseApp

  constructor(){
    const firebaseConfig = {
      apiKey: config.apiKey,
      authDomain: config.authDomain,
      projectId: config.projectId,
      storageBucket: config.storageBucket,
      messagingSenderId: config.messagingSenderId,
      appId: config.appId,
      measurementId: config.measurementId,
    };

    this.app = initializeApp(firebaseConfig);

  }

  getFireStore(){
    if(!this.app)
      throw new Error("Firebase cant not be initialized")
    return getFirestore(this.app)
  }

  /**
   * getting firebase Authentication
   * @returns firebase auth 
   */
  getAuth(){
    if(!this.app)
      throw new Error("Firebase cant not be initialized")
    return getAuth(this.app)
  }

}
