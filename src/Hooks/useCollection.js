import { useContext, useEffect, useState } from 'react'
import { db } from '../components/firebase'
import { AuthContext } from '../Providers/auth-user-provider';
import * as _ from 'lodash'
export const useCollection = async (path, where) => {
    const [data, setData] = useState([]);
    const [doc, setDoc] = useState({});
    const { user } = useContext(AuthContext);
    useEffect(() => {
        if (db && path) {
            if (where === '') {
                db.collection(path).onSnapshot(s => {
                    const data = s.docs.map(item => ({ ...item.data(), id: item.id }));
                    setData(data);
                });
            }else if (where === 'doc') {
                db.collection('shorted').doc(path).get()
                .then((dc) => {
                    setDoc(dc.data());
                });
            }else if (where === 'history') {
                db.collection(path).where('user', '==', user.email).onSnapshot(s => {
                    // const data = s.docs.map(item => ({ ...item.data(), id: item.id }));
                    const data = _.orderBy(s.docs.map(item => ({ ...item.data(), id: item.id })), ['createdAt', 'user'], ['desc', 'desc']);
                    console.log(data);
                    setData(data);
                });
            }
        }
        return () => {}
    }, [db, path]);
    const createDoc = async (docId, data) => {
        await db.doc(`/${path}/${docId}`).set(data);
    }
    return { data, createDoc, doc }
}