import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import axios from "axios";



export const AuthContext = createContext();

// google signin
const GoogleProvider = new GoogleAuthProvider

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [role, setRole] = useState('')
    const registerWithEmailPassword = (email, password) => {
        // setLoading(false)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    //   for google login/ signin
    const handleGoogleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, GoogleProvider)

    }

    const logout =()=>{
         return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)

            // console.log(currentUser)
            setLoading(false)
        })

        return () => {
            unsubscribe();
        }
    }, [])

    useEffect(() => {
        if (!user) return;
        axios.get(`http://localhost:3000/users/role/${user.email}`)
            .then(res => {
                setRole(res.data.role)
            })
    }, [user])
 console.log(user)

    const authData = {
        registerWithEmailPassword,
        setUser,
        user,
        handleGoogleSignIn,
        loading,
        role,
        logout
    };


    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;
