import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app)

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (name) => {
        return updateProfile(auth.currentUser, { displayName: name });
    }

    const logout = () => {
        return signOut(auth);
    }

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
        logout
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
