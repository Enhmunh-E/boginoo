import React, { useState, useEffect } from 'react'
import { db } from '../components/firebase'
export const useDoc = ({ path }) => {
    const [doc, setDoc] = useState({});
    const [loading, setLoading] = useState(true);
    const createDoc = async (path , data) => {
        let query = db;
        path.forEach((element, index) => {
            if (index % 2 === 0) {
                query = query.collection(element);
            }else {
                query = query.doc(element);
            }
        });
        await query.set(data);
    }
    useEffect(async () => {
        if (path) {
            let query = db;
            path.forEach((element, index) => {
                if (index % 2 === 0) {
                    query = query.collection(element);
                }else {
                    query = query.doc(element);
                }
            });
            await query.get()
            .then((dc) => {
                setDoc(dc.data());
                setLoading(false)
                // console.log(dc.data());
            }).catch((error) => {
                setLoading(false);
            });
        }
        return () => {}
    }, [db, path.length]);
    return { doc, createDoc, loading }
}