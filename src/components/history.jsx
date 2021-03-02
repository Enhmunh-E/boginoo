import React, { useEffect, useState } from 'react'
import { db } from './firebase';
import * as _ from 'lodash'
import { Loading } from './loading';
import { useCollection } from '../Hooks';
export const History = () => {
    const [dataHistory, setDataHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { data } = useCollection('shorted', 'history');
    useEffect(() => {
        console.log(data);
        // setTimeout(() => {
            isLoading && setIsLoading(false);
        // }, 1000);
        setDataHistory(data);
        return () => {}
    }, [db]);
    if (isLoading) {
        return <Loading plays={isLoading} />
    }else {
        return (
            <div>
                <h1 className='font-ubuntu c-primary ph-4'>Түүх</h1>
                <ul className='pa-0'>
                    {
                        dataHistory && (
                            _.map(dataHistory, ({inputUrl, outputUrl}) => {
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
}