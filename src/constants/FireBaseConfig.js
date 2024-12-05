import { initializeApp } from "firebase/app";
import { 
  initializeAuth, 
  getReactNativePersistence, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithCredential 
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQqMtPyQtXm8dfuJQKK2ITjtjj_Ui1MkE",
  authDomain: "drgpt-ad363.firebaseapp.com",
  projectId: "drgpt-ad363",
  storageBucket: "drgpt-ad363.firebasestorage.app",
  messagingSenderId: "449715385470",
  appId: "1:449715385470:web:ed04539b6f9d0a3a8f142f",
  measurementId: "G-TQP1C7WLVZ",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Auth with AsyncStorage persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Function to create a user with email and password
const createUserWithEmail = (email, password) => {
  console.log("Creating user with email:", email);
  return createUserWithEmailAndPassword(auth, email, password);
};

// Debugging logs
console.log("Auth instance:", auth);
console.log("signInWithEmailAndPassword function:", signInWithEmailAndPassword);
console.log("createUserWithEmailAndPassword function:", createUserWithEmailAndPassword);

// Export everything needed for authentication
export { 
  auth, 
  signInWithEmailAndPassword, 
  createUserWithEmail, // Export the wrapper function
  GoogleAuthProvider, 
  signInWithCredential 
};
