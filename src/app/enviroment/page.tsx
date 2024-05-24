"use client"

import { useEffect, useState } from 'react';
import { retreavingData } from '../../lib/spreadSheets'

export default function Enviroment(){
    const [user, setUser] = useState([{
        name: "",
        age: ""
    },{
        name: "",
        age: ""
    }])
    useEffect(() => {
        async function extractData() {
            const response : any = await retreavingData();
            setUser(response); 
        }
        extractData();
    }, [])
    return(
        <>
            <h1>Hello! {user[0].name}, you have {user[0].age} years</h1>
            <h1>Hello! {user[1].name}, you have {user[1].age} years</h1>
        </>
    );
}