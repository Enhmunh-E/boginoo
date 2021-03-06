import React, { useContext, useEffect, useState } from 'react'
import { db } from './firebase';
import * as _ from 'lodash'
import { Loading } from './loading';
import { useCollection } from '../Hooks';
import { AuthContext } from '../Providers/auth-user-provider'
export const History = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useContext(AuthContext);
    const { data } = useCollection({ path: ['enkhmunkh', 'test', user.email] , wheres: []});
    useEffect(() => {
        if (data) {
            console.log(data);
            setIsLoading(false);
        }
    }, [data])
    if (isLoading) {
        return <Loading plays={isLoading} />
    } else {
        return (
            <div>
                <h1 className='font-ubuntu c-primary ph-4'>Түүх</h1>
                <ul className='pa-0'>
                    {
                        data && (
                            _.map(data, ({inputUrl, outputUrl}, index) => {
                                return (
                                    <li className='flex font-ubuntu flex-wrap' key={index}>
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
}