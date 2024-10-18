import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null);



const AuthProvider = ({children}) => {


    const googleprovider = new GoogleAuthProvider()



    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true)


    const creatUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signInUser = (email, password) =>{
        setLoading(true);
       return signInWithEmailAndPassword(auth, email, password) 
    };

    const signInWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleprovider)
    };

    const LogOut = () =>{
        setLoading(true);
        return signOut(auth);
        
    }

   useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser)
        setLoading(false);
    });

    return ()=>{
        unSubscribe()
    }

   } ,[]) 


    const authInfo = {
        user,
        creatUser,
        signInUser,
        LogOut,
        loading,
        signInWithGoogle
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes={
    children:PropTypes.node
}





//1. creat contex
// 2.set provider with value
// 3.use the auth provider in the main.jsx file
// 4.access children in the Authprovider file