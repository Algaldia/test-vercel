"use client"

import { useEffect, useState } from 'react';
import { retreavingData } from '../../lib/spreadSheets'

export default function Enviroment(){
    const [user, setUser] = useState([{
        id: "",
        english: "",
        portuguese: "",
        spanish: ""
    },{
        id: "",
        english: "",
        portuguese: "",
        spanish: ""
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
            <h1>Hello! {user[0].id}, you have {user[0].english} years</h1>
            <h1>Hello! {user[1].id}, you have {user[1].english} years</h1>
        </>
    );
}