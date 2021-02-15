import React, { useContext } from 'react';
import { Layout, Button, Input, Logo} from '../components';
import { Context } from '../Providers/provider'
import { useHistory } from 'react-router-dom'
export const HomeDefault = () => {
    const history = useHistory();
    const { drop, logout } = useContext(Context);
    return (
        <Layout>
            <div className='h100 flex-center relative'>
                <div className={`drop ${drop ? '' : 'hide'} absolute w-7`}>
                    <div className="font-ubuntu bold text-center pa-3 fs-20 lh-23 b-primary c-default br-8" onClick={logout}>Гарах</div>
                </div>
                <Logo />
                <div className='font-lobster c-primary fs-56 lh-70 text-center normal' onClick={() => history.push('/')}>
                    Boginoo
                </div>
                    <div className='mt-5 flex justify-center items-center pb-7 flex-wrap'>
                        <Input placeholder='https://www.web-huudas.mn' className="w-9 h-5 ph-5 bogin"/>
                        <Button>Богиносгох</Button>
                    </div>
            </div>
        </Layout>
    )
}