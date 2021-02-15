import React from 'react';
import { Layout, Logo } from '../components';
import { SignUp } from '../components/signup'
import { useHistory } from 'react-router-dom'
export const SignUpPage = () => {
    const history = useHistory();
    return (
        <Layout>
            <div className='h100 flex-center'>
                <Logo />
                <div className='font-lobster c-primary fs-56 lh-70 text-center pointer' onClick={() => history.push('/')}>
                    Boginoo
                </div>
                <SignUp />
            </div>
        </Layout>
    )
}