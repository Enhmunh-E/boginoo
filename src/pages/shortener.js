import React, { useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { Loading } from '../components';
import { useDoc } from '../Hooks';
export const Shortener = () => {
    const location = useLocation();
    const history = useHistory();
    const { doc, loading } = useDoc({path: ['enkhmunkh', 'test', 'shorted', location.pathname.substring(1)]});
    console.log(doc.inputUrl);
    useEffect(() => {
        if (!loading) {
            if (doc) {
                window.location.replace(doc.inputUrl);
            }else {
                history.push('/');
            }
        }
        return () => {}
    }, [loading]);
    
    return (
        <div className='w100 h100 flex-cetner'>
            <Loading plays={true}/>
        </div>
    );
}