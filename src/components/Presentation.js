import React, {useState, useContext, useEffect} from 'react';

import {ContextItem} from '@src/context';




const Presentation = () => {

    const {data} = useContext(ContextItem);

    return <div>The current time for {data.timezone} is: {data.datetime.slice(0, 16)}</div>

}



export default Presentation