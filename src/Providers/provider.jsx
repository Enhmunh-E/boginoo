import React, { createContext, useState, useContext } from 'react'
import { auth, db } from '../components/firebase'
import { useHistory } from 'react-router-dom'
import { AuthContext } from './auth-user-provider'
export const Context = createContext({
    isLoginSign: false,
    isLogin: true,
    signInInput: {},
    logInInput: {},
    error: '',
    userInfo: '',
    drop: '',
    dt: [],
    setError: () => {},
    setDrop: () => {},
    setLogInInput: () => {},
    setSignInInput: () => {},
    setIsLogin: () => {},
    setIsLoginSign: () => {},
    handler: () => {},
    burtguuleh: () => {},
    oroh: () => {},
    logout: () => {},
})
export const Provider = ({children}) => {
    const [drop, setDrop] = useState(false);
    const history = useHistory();
    const [dt, setDt] = useState({});
    const [isLoginSign, setIsLoginSign] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [error, setError] = useState('');
    const [logInInput, setLogInInput] = useState({
        email: '',
        password: '',
        sanah: false
    });
    const [signInInput, setSignInInput] = useState({
        email: '',
        password: '',
        passwordagain: ''
    }) 
    const { setStart, start } = useContext(AuthContext);
    // const { setIsLogging, user} = useContext(AuthContext);
    const handler = (e, is) => {
        setError('');
        if (is === "login") {
            if (e.target.type === 'checkbox') {
                setLogInInput({...logInInput, [e.target.id]: e.target.checked});
            }else setLogInInput({...logInInput, [e.target.id]: e.target.value});
        }else {
            setSignInInput({...signInInput, [e.target.id]: e.target.value})
        }
    }
    const burtguuleh = async () => {
        setStart(false);
        if (signInInput.password === signInInput.passwordagain) {
            await auth.createUserWithEmailAndPassword(signInInput.email, signInInput.password)
                .then(() => {
                    setDt({});
                    addinformation();
                    history.push('/');
                }).catch((error) => {
                    var errorMessage = error.message;
                    setError(errorMessage);
                });
        }else {
            setError('Password is not same');
        }
    }
    const oroh = async () => {
        setStart(false);
        console.log(start);
        localStorage.setItem('remember', `${logInInput.sanah}`);
        await auth.signInWithEmailAndPassword(logInInput.email, logInInput.password)
        .then(() => {
            getinformation();
            console.log('orson');
            history.push('/');
        })
        .catch((error) => {
            var errorMessage = error.message;
            setError(errorMessage);
        });
    }
    const addinformation = async () => {
        const docRef = db.collection('users').doc(signInInput.email);
        await docRef.set({
            shorted: []
        });
    }
    const getinformation = async () => {
        const docRef = db.collection('users').doc(logInInput.email);
        const doc = await docRef.get();
        if (!doc.exists) {
            console.log('No such document!');
        } else {
            setDt(doc.data());
        }
    }
    const logout = () => {
        localStorage.setItem('remember', 'false');
        auth.signOut();
        setDrop(false);
    }
    return(
        <Context.Provider value={{ isLoginSign, setIsLoginSign, isLogin, setIsLogin, signInInput, logInInput, setLogInInput, setSignInInput, handler, burtguuleh, oroh, error, drop, setDrop, logout, dt, setError }}>
            {children}
        </Context.Provider>
    )
}