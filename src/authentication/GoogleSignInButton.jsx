import React from 'react';
import { useFirebase } from '../context/firebase';

const GoogleSignInButton = () => {
  const firebase = useFirebase();

  const handleGoogleSignIn = async () => {
    try {
      await firebase.loginUserWithGoogle();
      // Redirect or perform any action after successful sign-in
    } catch (error) {
      console.error("Error signing in with Google:", error);
      // Handle error, display error message, etc.
    }
  };

  return (
    <button onClick={handleGoogleSignIn} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
      Sign in with Google
    </button>
  );
};

export default GoogleSignInButton;
