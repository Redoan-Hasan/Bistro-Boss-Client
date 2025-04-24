import { useState } from "react";
import { createContext } from "react";
import { getAuth } from "firebase/auth";
import { app } from "../firebase/firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export const Context = createContext();
const auth = getAuth(app);
const AuthContext = ({children}) => {
    const [user , setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const authInfo = {user, loading}
    return (
        <Context.Provider value={authInfo}>
            {children}
        </Context.Provider>
    );
};

export default AuthContext;