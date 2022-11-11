import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { app } from '../firebase.config';
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
const auth = getAuth(app);
const [loading, setLoading] = useState(true);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const [user, setUser] = useState(null)
// console.log(user)
const signUp = (email,password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
}

const logIn = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email,password);
}

const updateUserProfile = (profile) =>{
    return updateProfile(auth.currentUser, profile)
}

const logOut = () =>{
    localStorage.removeItem('photographyToken');
    return signOut(auth);
}

const googleLogin = () =>{
    return signInWithPopup(auth, googleProvider);
}

const githubLogin = () =>{
    return signInWithPopup(auth, githubProvider);
}

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        // console.log(currentUser)
        setUser(currentUser);
    setLoading(false)


    })

    return ()=>{
        return unsubscribe();
    };
},[auth])


const authInfo = {signUp, logIn, googleLogin, githubLogin, logOut,updateUserProfile, loading, setLoading, user};





    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;