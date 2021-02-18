import React, { createContext, useState } from 'react'
export const Context = createContext({
    isLoginSign: false,
    isLogin: true,
    error: '',
    userInfo: '',
    drop: '',
    dt: [],
    setError: () => {},
    setDrop: () => {},
    setIsLogin: () => {},
    setIsLoginSign: () => {},
    setDt: () => {},
})
export const Provider = ({children}) => {
    const [drop, setDrop] = useState(false);
    const [dt, setDt] = useState({});
    const [isLoginSign, setIsLoginSign] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    return(
        <Context.Provider value={{ isLoginSign, setIsLoginSign, isLogin, setIsLogin, drop, setDrop, dt, setDt }}>
            {children}
        </Context.Provider>
    )
}