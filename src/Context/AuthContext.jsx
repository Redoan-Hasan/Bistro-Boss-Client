import { useEffect, useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export const Context = createContext();
const auth = getAuth(app);
const AuthContext = ({children}) => {
    const [user , setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // login 
    const login = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout 
    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }

    // register 
    const registerUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
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



    const authInfo = {user, loading , registerUser , login , updateUserProfile , logout};
    return (
        <Context.Provider value={authInfo}>
            {children}
        </Context.Provider>
    );
};

export default AuthContext;