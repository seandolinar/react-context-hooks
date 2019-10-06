import React, {useState, useContext, useEffect} from 'react';

import {ContextItem} from './context';



const DataContainer = ({children}) => {

   

    const getData = () => {
        fetch('http://worldclockapi.com/api/json/est/now').then(res => res.json().then(json => console.log(json))) 
    }



    useEffect(() => {
        getData();
    }, [])


    return <ContextItem.Provider 
        // value={}
    >
        {children}
    </ContextItem.Provider>
}

export default DataContainer