import { useEffect, useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

// eslint-disable-next-line react-refresh/only-export-components
export const Context = createContext();
const auth = getAuth(app);
const AuthContext = ({children}) => {
    const [user , setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic();

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
            if(currentUser){
                const userInfo = {email : currentUser.email};
                axiosPublic.post('/jwt', userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('accessToken' , res.data.token);
                    }
                })
            }else{
                localStorage.removeItem('accessToken');
            }
        })
        return () => unsubcribe(); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    const authInfo = {user, loading , registerUser , login , updateUserProfile , logout , signInWithGoogle};
    return (
        <Context.Provider value={authInfo}>
            {children}
        </Context.Provider>
    );
};

export default AuthContext;