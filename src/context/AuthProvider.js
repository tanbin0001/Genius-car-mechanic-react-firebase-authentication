import React, { Children, createContext } from 'react'
import useFirebase from '../hooks/useFirebase';


const allContext = useFirebase;
export const AuthContext = createContext();


const AuthProvider = ({children}) => {
    return (
        <div>
            <AuthContext.Provider value={allContext}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;