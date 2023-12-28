import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/userSlice';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useAuth } from '../hooks/use-auth';
import { SignUp } from '../components/SignUp';
import { Link, Redirect } from 'react-router-dom';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { isAuth, login } = useAuth();

  const [showMessage, setShowMessage] = useState(false);
  const [redirect, setRedirect] = useState(false); // State for redirection

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      dispatch(setUser({ email: user.email }));
      login(user.email);
      setRedirect(true); // Set redirect to true after successful login
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
      setShowMessage(true);
    }
  };

  if (redirect) {
    // Redirect to the home page after successful login
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Register</h1>
      {showMessage && <p>Something went wrong. Please press the button Sign in.</p>}
      <SignUp />
      <p>
        Already have an account? <Link to="/">Sign in</Link>
      </p>

      {!isAuth && (
        <div className="input">
          <button id="google-login-btn" className="google-button" onClick={handleGoogleLogin}>
            Login With Google
          </button>
        </div>
      )}
    </div>
  );
};

export default RegisterPage;
