import React from 'react';
import { Layout, Logo} from '../components';
// import { Layout } from './layout.jsx'
// import { Logo } from './logo.jsx'
import { Login } from '../components/login'
import { useHistory } from 'react-router-dom'
export const LoginPage = () => {
    const history = useHistory();
    return (
        <Layout>
            <div className='h100 flex-center'>
                <Logo />
                <div className='font-lobster c-primary fs-56 lh-70 text-center pointer' onClick={() => history.push('/')}>
                    Boginoo
                </div>
                <Login />
            </div>
        </Layout>
    )
}