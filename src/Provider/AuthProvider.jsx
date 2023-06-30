import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import { GoogleAuthProvider } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const authContext=createContext(null);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
     const unsubscribe=onAuthStateChanged(auth, (currentUser) => {
           setUser(currentUser)


        //    if(currentUser)
        //    {
        //        axios.post('https://assignment-12-server-site-sepia.vercel.app/jwt',{email:currentUser.email})
        //        .then(data=>{
        //         //    console.log(data.data.token);
        //            localStorage.setItem('token',data.data.token)
        //        })
        //    }
        //    else{
        //        localStorage.removeItem('token')
        //    }
           setLoading(false)
        })
        return ()=>{
            return unsubscribe()
        }

    },[])


    // signUp
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    }

    // login
    const logIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)

    }

    // googleLogin
    const googleLogin=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)

    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    // logOut
    const logOut=()=>{
        setLoading(true);
        return signOut(auth)

    }

    const authInfo = {
        user,
        createUser,
        logIn,
        loading,
        logOut,
        googleLogin,
        updateUserProfile



    }
    return (
        <authContext.Provider value={authInfo}>
              {children}
        </authContext.Provider>
    );
};

export default AuthProvider;