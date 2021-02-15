import { useContext, useState } from "react";
import React from 'react'
import { Context } from '../Providers/provider'
import { useHistory } from 'react-router-dom'
import { Input } from './input'
import { Button } from './button'
import { auth } from './firebase'
const Login = () => {
    const {  logInInput, handler, oroh, error, setError } = useContext(Context);
    const history = useHistory();
    const [sent, setSent] = useState('');
    const send = () => {
        auth.sendPasswordResetEmail(logInInput.email).then(() => {
            setSent('Мэйл явсан');
            setError('');
        }).catch((error) => {
            setError(error.message);
        });
    }
    return (
        <>
            <div className="c-primary fs-28 lh-40 text-center bold font-ubuntu ma-5">Нэвтрэх</div>
            <span className="pb-2 w-8 ph-4 font-ubuntu">Цахим хаяг</span>
            <Input placeholder="name@mail.domai" className="h-5 w-8 ph-5 ma-5 mt-0" type="email" id="email" value={logInInput.email} onChange={(e) => handler(e, "login")}/>
            <span className="pb-2 w-8 ph-4 font-ubuntu">Нууц үг</span>
            <Input placeholder="password" className="h-5 w-8 ph-5 ma-5 mt-0" type="password" id="password" value={logInInput.password} onChange={(e) => handler(e, "login")}/>
            <div className="flex items-center w-8 justify-between">
                <div className="flex items-center">
                    <Input type="checkbox" className="pointer" id="sanah" checked={logInInput.sanah} onChange={(e) => handler(e, "login")}/>
                    <p className="c-8 font-ubuntu pa-0 ma-0 c-primary fs-14 ponter">Намайг сана</p>
                </div>
                <p className="text-underline pa-0 ma-0 fs-14 pointer font-ubuntu" onClick={send}>Нууц үгээ мартсан</p>
            </div>
            {
                sent !== '' && (
                    <div className="pa-0 ma-0 fs-14 font-ubuntu c-primary">{sent}</div>
                )
            }
            <Button onClick={oroh} className="w-8 pointer">Нэвтрэх</Button>
            <div className="flex-center">
                <p className="font-ubuntu c-error fs-14">{error}</p>
            </div>
            <div className="flex-center">
                <p className="c-8 font-ubuntu pa-0 ma-0 c-primary fs-14 text-underline pointer" onClick={() => history.push('/signup')}>Шинэ хэрэглэгч бол энд дарна уу?</p>
            </div>
        </>
    );
}
export { Login }