import React, { useContext, useEffect, useState } from 'react'
import * as _ from 'lodash'
import { db, firebase } from './firebase';
import { AuthContext } from '../Providers/auth-user-provider';
export const History = () => {
    const { user } = useContext(AuthContext);
    const [data, setData] = useState([]);
    useEffect(() => {
        db.collection('shorted').where('user','==', user.email)
        .onSnapshot((snapshot) => {
            const dt = snapshot.docs.map(doc => doc.data());
            setData(dt);
        })
    }, [firebase.firestore])
    return (
        <div>
            <h1 className='font-ubuntu c-primary ph-4'>Түүх</h1>
            <ul className='pa-0'>
                {
                    data && (
                        _.map(data, ({inputUrl, outputUrl}) => {
                            return (
                                <li className='flex font-ubuntu flex-wrap'>
                                    <div className='flex-col w50 ph-4'>
                                        <p className='o-05'>Өгөгдсөн холбоос:</p>
                                        <p className='word-break'>{inputUrl}</p>
                                    </div>
                                    <div className='flex-col w50 ph-4'>
                                        <p className='o-05'>Богино холбоос:</p>
                                        <p className='word-break'>{outputUrl}</p>
                                    </div>
                                </li>
                            );
                        })
                    )
                }
            </ul>
        </div>
    );
}