import React, {useState, useContext, useEffect} from 'react';

import {ContextItem} from './context';



const DataContainer = ({children}) => {

   

    useEffect(() => {

    }, [])


    return <ContextBlock.Provider 
        // value={}
    >
        {children}
    </ContextBlock.Provider>
}

export default DataContainer