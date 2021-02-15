import { useContext } from "react";
import React from 'react'
import { Context } from '../Providers/provider'
import { Input } from './input'
import { Button } from './button'
const SignUp = () => {
    const { signInInput, handler, burtguuleh, error } = useContext(Context);
    return (
        <>
            <div className="c-primary fs-28 lh-40 text-center bold font-ubuntu ma-5">Бүртгүүлэх</div>
            <span className="pb-2 w-8 ph-4 font-ubuntu">Цахим хаяг</span>
            <Input placeholder="name@mail.domai" className="h-5 w-8 ph-5 ma-5 mt-0" type="email" id="email" value={signInInput.email} onChange={(e) => handler(e, "signup")}/>
            <span className="pb-2 w-8 ph-4 font-ubuntu">Нууц үг</span>
            <Input placeholder="password" className="h-5 w-8 ph-5 ma-5 mt-0" type="password" id="password" value={signInInput.password} onChange={(e) => handler(e, "signup")}/>
            <span className="pb-2 w-8 ph-4 font-ubuntu">Нууц үгээ давтана уу?</span>
            <Input placeholder="password" className="h-5 w-8 ph-5 ma-5 mt-0" type="password" id="passwordagain" value={signInInput.passwordagain} onChange={(e) => handler(e, "signup")}/>
            <Button onClick={burtguuleh} className="w-8 mt-0 mb-0">Бүртгүүлэх</Button>
            <div className="flex-center">
                <p className="font-ubuntu c-error fs-14">{error}</p>
            </div>
        </>
    );
}
export { SignUp }