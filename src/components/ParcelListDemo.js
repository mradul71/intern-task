import React, { useEffect, useState } from 'react'
import Parcel from './Parcel';
import ParcelForm from './ParcelForm';
import {db} from '../firebase-config';
import { doc, setDoc, getDoc, addDoc } from "firebase/firestore";
import ParcelFormDemo from './ParcelFormDemo';

function ParcelListDemo({user}) {

      const [todos, setTodos] = useState([]);
        useEffect(() => {
            if (user.uid)
              (async () => {
                const dataField = await getDoc(doc(db, 'users', user.uid))
                if (dataField.exists()) {
                  const data = dataField.data().newTodos
                  setTodos([...data])
                  console.log(todos);
                }
              })()
          }, [user.uid])
        
          return <div>{JSON.stringify(todos)}</div>
}

export default ParcelListDemo