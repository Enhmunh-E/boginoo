import React, { useEffect } from 'react'
import { useLocation, Redirect, useHistory } from 'react-router-dom'
import { db } from '../components/firebase'
export const Shortener = () => {
    const location = useLocation();
    const history = useHistory();
    const url = 'localhost:3000' + location.pathname;
    console.log(url);
    useEffect(() => {
        db.collection('shorted').doc(location.pathname.substring(1)).get()
        .then((doc) => {
            window.location.href = doc.data().inputUrl;
        }).catch(() => {
            history.push('/');
        });
    }, [])
    return (
        <div className='w100 h100 flex-cetner'><p>Loading...</p></div>
    );
}