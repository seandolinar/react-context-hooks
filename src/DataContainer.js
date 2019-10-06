import React, {useState, useContext, useEffect} from 'react';

import {ContextItem} from './context';



const DataContainer = ({children}) => {

    const [data, setData] = useState({});
    const [appParam, setAppParam] = useState({tz: 'utc'});

   
    // HANDLES DATA
    const getData = () => {
        fetch(`http://worldclockapi.com/api/json/${appParam.tz}/now`).then(res => res.json().then(json => setData(json))) 
    }

    useEffect(() => {
        getData(); // This hooks gets the data once after the component mounts
    }, [appParam.tz])

    const handleAppParamChange = (obj) => {

        const newAppParam = Object.assign({}, appParam, obj);

        setAppParam(newAppParam);
    }


    return <ContextItem.Provider 
        value={
            {
            data,
            appParam,
            methods: {
                handleAppParamChange
            }}}
    >
        {children}
    </ContextItem.Provider>
}

export default DataContainer