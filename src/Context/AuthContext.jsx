import { useEffect, useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export const Context = createContext();
const auth = getAuth(app);
const AuthContext = ({children}) => {
    const [user , setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    // login 
    const login = (email,password) => {
        setLoading(false);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout 
    const logout = () => {
        setLoading(false);
        return signOut(auth);
    }

    // register 
    const registerUser = (email,password) =>{
        setLoading(false);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sing in with google
    const signInWithGoogle = () => {
        setLoading(false);
        return signInWithPopup(auth, googleProvider);
    }

    // update user name only 
    const updateUserProfile = (userName) => {
        return updateProfile(auth.currentUser,{displayName: userName})
    }

    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        })
        return () => unsubcribe(); 
    }, [])



    const authInfo = {user, loading , registerUser , login , updateUserProfile , logout , signInWithGoogle};
    return (
        <Context.Provider value={authInfo}>
            {children}
        </Context.Provider>
    );
};

export default AuthContext;