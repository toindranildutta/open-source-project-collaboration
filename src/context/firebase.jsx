import { createContext, useContext, useEffect, useState } from "react";


// Firebase imports
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, GoogleAuthProvider, signInWithPopup, sendSignInLinkToEmail } from "firebase/auth";
import {
  getFirestore, collection, addDoc, getDocs,
  getDoc, doc,
  deleteDoc,
  setDoc
} from "firebase/firestore";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";

// Create a new context
const FirebaseContext = createContext(null);


// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFxw9Oj0MK6f-jCkOCmAZCbxLz3_ZTDNw",
  authDomain: "ospc-81052.firebaseapp.com",
  projectId: "ospc-81052",
  storageBucket: "ospc-81052.appspot.com",
  messagingSenderId: "855069481557",
  appId: "1:855069481557:web:e7f11e15e833e87ca7d2dc",
};

// Custom Hook to use Firebase
export const useFirebase = () => useContext(FirebaseContext);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app, "gs://ospc-81052.appspot.com");
// Google Provider
const provider = new GoogleAuthProvider();






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
    // Cleanup function to unsubscribe from the auth state listener
  // return () => unsubscribe();
  }, [])

  //==================================================
  // Sign up user using email and password
  const signupUserWithEmailAndPassword = (email, password, username, file) => {
    return new Promise((resolve, reject) => {
      // firebase method to create a new user
      createUserWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
        try {
          if (file) {
            const photoRef = ref(storage, `profile_photos/${Date.now()}-${file.name}`);
            // Upload photo to Firebase Storage
            await uploadBytes(photoRef, file);
            // Get download URL for the uploaded photo
            const photoURL = await getDownloadURL(photoRef);
            // Update user profile with name and photo URL
            await updateProfile(userCredential.user, {
              displayName: username,
              photoURL: photoURL
            });
          } else {
            // Update user profile with name only (without photo)
            await updateProfile(userCredential.user, {
              displayName: username
            });
          }
          resolve(userCredential.user);
        } catch (error) {
          reject(error);
        }
      }).catch((error) => {
        reject(error);
      });
    });
  };



  //===================================================
  // Add user details to database
  const updateProfileDetails = (name, photo) => {
    updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    }).then(() => {
      // Profile updated!
      console.log('Profile updated!');
    }).catch((error) => {
      // An error occurred
      console.log(error);
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

  //==================================================
  // Sign in user with Google
  const loginUserWithGoogle = () => {
    return new Promise((resolve, reject) => {
      signInWithPopup(auth, provider)
        .then((result) => {
          // The signed-in user info.
          const user = result.user;
          resolve(user);
        }).catch((error) => {
          // Handle Errors here.
          console.error("Error signing in with Google:", error);
          reject(error);
        });
    });
  };


  // ================================================
  // Sign out user

  const logoutUser = () => {
    return signOut(auth) ;
    
  };
  // =================================================
  // Checking if user is logged in
  const isLoggedIn = user ? true : false;
  //=================================================
  // Create New user data
  const handleCreateNewUser = async (name, githuburl, email, wantcollaboration) => {
    return await addDoc(collection(db, "users"), {
      name,
      githuburl,
      email,
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

  // Function to add a repository to the repolist collection
const addRepositoryToRepolist = async (repoid, repourl) => {
  try {
      return await addDoc(collection(db, "repolist"), {
      repoid,
      repourl,
      userID: user.uid,
      userEmail: user.email,
      displayName: user.displayName,
    });
  } catch (error) {
      console.error('Error adding repository to repolist: ', error);
      throw error;
  }
};

//=================================================
const listAllRepos = () => {
  return getDocs(collection(db, "repolist"));
};

// Function to remove a repository from the repolist collection
const removeRepositoryFromRepolist = async (repoid) => {
  try {
      await deleteDoc(doc(db, "repolist", repoid));
      console.log('Repository removed from repolist: ', repoid);
  } catch (error) {
      console.error('Error removing repository from repolist: ', error);
      throw error;
  }
};

  //=================================================
  // Return everything you want to provide
  return (
    <FirebaseContext.Provider
      value={{
        signupUserWithEmailAndPassword,
        loginUserWithEmailAndPassword,
        loginUserWithGoogle,
        logoutUser,
        handleCreateNewUser,
        listAllUsers,
        getUserById,
        addRepositoryToRepolist,
        removeRepositoryFromRepolist,
        listAllRepos,
        isLoggedIn,
        user
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
}

