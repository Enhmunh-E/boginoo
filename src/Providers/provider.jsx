import React, { createContext, useState } from 'react'
export const Context = createContext({
    isLoginSign: false,
    isLogin: true,
    error: '',
    userInfo: '',
    drop: '',
    isHistory: false,
    setError: () => {},
    setDrop: () => {},
    setIsLogin: () => {},
    setIsLoginSign: () => {},
    setIsHistory: () => {}
})
export const Provider = ({children}) => {
    const [drop, setDrop] = useState(false);
    const [isLoginSign, setIsLoginSign] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [isHistory, setIsHistory] = useState(false);
    return(
        <Context.Provider value={{ isLoginSign, setIsLoginSign, isLogin, setIsLogin, drop, setDrop, isHistory, setIsHistory }}>
            {children}
        </Context.Provider>
    )
}