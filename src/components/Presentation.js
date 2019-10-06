import React, {useState, useContext, useEffect} from 'react';

import {ContextItem} from '@src/context';




const Presentation = () => {

    const {data, appParam} = useContext(ContextItem);

    return <div>The current time for {data.timezone} is: {data.datetime.slice(0, 16)}</div>

}



export default Presentation