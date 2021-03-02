import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../components/firebase'
export const AuthContext = createContext({
    user: null,
    userReady: false,
    start: true,
    setStart: () => {}
})
export const AuthProvider = ({children}) => {
    const [state, setState] = useState({
        user: null,
        userReady: false,
    });
    const [start, setStart] = useState(true);
    const value = localStorage.getItem('remember') || 'false';
    useEffect(() => {
        if (!auth) {
            return
        }
        const subscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                if (start) {
                    if (value === "false") {
                        setState({user: null, userReady: true});
                    }else {
                        setState({user: user, userReady: true});
                    }
                }else {
                    setState({user: user, userReady: true});
                }
            }else {
                setState({user: null, userReady: true});
            }
          });
        return () => subscribe();
    }, [auth, start])

    return(
        <AuthContext.Provider value={{ ...state, setStart, start }}>
            {children}
        </AuthContext.Provider>
    )
}