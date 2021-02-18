import { useContext, useState } from "react";
import React from 'react'
import { auth, db } from './firebase'
import { Context } from '../Providers/provider'
import { Input } from './input'
import { Button } from './button'
import { AuthContext } from "../Providers/auth-user-provider"
import { useHistory } from "react-router-dom";
const SignUp = () => {
    const { setDt } = useContext(Context);
    const { setStart } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [signInInput, setSignInInput] = useState({
        email: '',
        password: '',
        passwordagain: ''
    });
    const handler = (e) => {
        if (error) setError('');
        setSignInInput({...signInInput, [e.target.id]: e.target.value})
    }
    const history = useHistory();
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
    const addinformation = async () => {
        const docRef = db.collection('users').doc(signInInput.email);
        await docRef.set({
            shorted: []
        });
    }
    return (
        <>
            <div className="c-primary fs-28 lh-40 text-center bold font-ubuntu ma-5">Бүртгүүлэх</div>
            <span className="pb-2 w-8 ph-4 font-ubuntu">Цахим хаяг</span>
            <Input placeholder="name@mail.domain" className="h-5 w-8 ph-5 ma-5 mt-0" type="email" id="email" value={signInInput.email} onChange={(e) => handler(e)}/>
            <span className="pb-2 w-8 ph-4 font-ubuntu">Нууц үг</span>
            <Input placeholder="password" className="h-5 w-8 ph-5 ma-5 mt-0" type="password" id="password" value={signInInput.password} onChange={(e) => handler(e)}/>
            <span className="pb-2 w-8 ph-4 font-ubuntu">Нууц үгээ давтана уу?</span>
            <Input placeholder="password" className="h-5 w-8 ph-5 ma-5 mt-0" type="password" id="passwordagain" value={signInInput.passwordagain} onChange={(e) => handler(e)}/>
            <Button onClick={burtguuleh} className="w-8 mt-0 mb-0">Бүртгүүлэх</Button>
            <div className="flex-center">
                <p className="font-ubuntu c-error fs-14">{error}</p>
            </div>
        </>
    );
}
export { SignUp }