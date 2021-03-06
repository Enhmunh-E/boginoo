import { useEffect, useState } from 'react'
import { db } from '../components/firebase'
import * as _ from 'lodash'
export const useCollection = ({ path }) => {
    const [data, setData] = useState([]);
    
    // console.log(wheres);

    useEffect(() => {
        if (db && path) {
            let query = db;
            path.forEach((element, index) => {
                if (index % 2 === 0) {
                    query = query.collection(element);
                }else {
                    query = query.doc(element);
                }
            });
            // if (wheres && wheres.length) {
            //     query = wheres.reduce((query, where) => query.where(where[0], where[1], where[2]), query);
            // }
            query.onSnapshot(s => {
                const data= _.chain(s.docs)
                    .map(item => ({ ...item.data(), id: item.id }))
                    .orderBy(['createdAt', 'user'])
                    .value()
                // console.log(data);
                // console.log('----------')
                
                setData(data);
            });
        } 
    }, [path.length]);

    return { data }
}