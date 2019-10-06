import React, {useState, useContext, useEffect} from 'react';

import {ContextItem} from './context';



const DataContainer = ({children}) => {

    const [data, setData] = useState({datetime: ''});
    const [appParam, setAppParam] = useState({tz: 'UTC'});

   
    // HANDLES DATA
    const getData = () => {
        fetch(`https://worldtimeapi.org/api/timezone/${appParam.tz}`).then(res => res.json().then(json => setData(json))) 
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