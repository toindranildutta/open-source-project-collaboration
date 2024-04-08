import { createContext, useContext, useEffect, useState } from "react";

// Firebase imports
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs,
  getDoc, doc } from "firebase/firestore";

// Create a new context
const FirebaseContext = createContext(null);

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFxw9Oj0MK6f-jCkOCmAZCbxLz3_ZTDNw",
  authDomain: "ospc-81052.firebaseapp.com",
  projectId: "ospc-81052",
  storageBucket: "ospc-81052.appspot.com",
  messagingSenderId: "855069481557",
  appId: "1:855069481557:web:e7f11e15e833e87ca7d2dc"
};

// Custom Hook to use Firebase
export const useFirebase = () => useContext(FirebaseContext);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);






// Provide Firebase Context and pass everything you want to provide
export const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  })

  //==================================================
  // Sign up user using email and password
  const signupUserWithEmailAndPassword = (email, password) => {
    return new Promise((resolve, reject) => {
      // firebase method to create a new user
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          resolve(user); // Resolve with user object
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          reject(errorMessage); // Reject with error message
        });
    });
  }

  //===================================================
  // sign in user with email and password
  const loginUserWithEmailAndPassword = (email, password) => {
    return new Promise((resolve, reject) => {
      // firebase method to login a user
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          resolve(user); // Resolve with user object
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          reject(errorMessage); // Reject with error message
        });
    });
  }

  // ================================================
  // Sign out user
  
  const logoutUser = () => {
    return signOut(auth);
  };
 // =================================================
 // Checking if user is logged in
 const isLoggedIn = user ? true : false;
 //=================================================
 // Create New user data
 const handleCreateNewUser = async (name, githuburl, wantcollaboration) => {
    return await addDoc(collection(db, "users"), {
      name,
      githuburl,
      wantcollaboration,
      userID: user.uid,
      userEmail: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    });
  };

  //=================================================
  // List all users
  const listAllUsers = () => {
    return getDocs(collection(db, "users"));
  };

  //=================================================
  //list one user
  const getUserById = async (id) => {
    const docRef = doc(db, "users", id);
    const result = await getDoc(docRef);
    return result;
  };
  //=================================================
  // Return everything you want to provide
  return (
    <FirebaseContext.Provider
      value={{
        signupUserWithEmailAndPassword,
        loginUserWithEmailAndPassword,
        logoutUser,
        handleCreateNewUser,
        listAllUsers,
        getUserById,
        isLoggedIn,
        user
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
}

