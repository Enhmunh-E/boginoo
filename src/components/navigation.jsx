import React, { useContext } from 'react';
import { Button } from '.';
import { AuthContext } from '../Providers/auth-user-provider'
import { Context } from '../Providers/provider'
import { useHistory, useLocation } from 'react-router-dom'
export const Navigation = (props) => {
    const { user } = useContext(AuthContext);
    const { setDrop, drop } = useContext(Context);
    const history = useHistory();
    const location = useLocation();
    return (
        <div className='w100 flex justify-end items-center flex-wrap'>
            <div className='font-ubuntu fs-20 lh-23 bold c-primary ma-4'>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</div>
            {
                !user ? (
                    <Button className={`font-ubuntu fs-20 lh-23 bold c-default ph-4 ml-4 b-primary ${location.pathname === '/' ? '': 'hide'}`} onClick={() => history.push('/login')}>Нэвтрэх</Button>
                ) : (
                    <p className="font-ubuntu fs-20 lh-23 bold pa-4">{user.email}
                        <svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2 pointer" onClick={() => setDrop(!drop)}>
                            <path d="M2 2L10.5 10.5L19 2" stroke="#02B589" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </p>
                )
            }
        </div>
    );
};