import React, { useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { Loading } from '../components';
import { useCollection } from '../Hooks';
export const Shortener = () => {
    const location = useLocation();
    const history = useHistory();
    const { doc } = useCollection(location.pathname.substring(1), 'doc');
    useEffect(() => {
        if (doc) {
            window.location.href = doc.inputUrl;
        }else {
            history.push('/');
        }
        return () => {}
    }, []);
    return (
        <div className='w100 h100 flex-cetner'>
            <Loading plays={true}/>
        </div>
    );
}