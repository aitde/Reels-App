import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDRszPtLJktArZH5wFMFHRK4pUz4m-Dvtk",
	authDomain: "reels-app-c4fc8.firebaseapp.com",
	projectId: "reels-app-c4fc8",
	storageBucket: "reels-app-c4fc8.appspot.com",
	messagingSenderId: "884357987719",
	appId: "1:884357987719:web:94a18614f4795825d22722",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
const fireStore = firebase.firestore();

export const database = {
	users: fireStore.collection("users"),
	getTimestamp: firebase.firestore.FieldValue.serverTimestamp,
};

export const storage = firebase.storage();
