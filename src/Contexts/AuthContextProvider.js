import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create User
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Sign In User
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Update User
    const updateUser = (name) => {
        return updateProfile(auth.currentUser, { displayName: name });
    }

    // Logout User
    const logout = () => {
        return signOut(auth);
    }

    // Sign In with Google the User
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // Find The Current User
    useEffect(() => {
        const unsubsrcibe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);   
            setLoading(false);
        })

        return () => unsubsrcibe();
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        updateUser,
        signInUser,
        googleSignIn,
        logout
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
