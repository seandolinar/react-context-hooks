import React, {useState, useContext, useEffect} from 'react';

import {ContextItem} from '@src/context';




const Presentation = () => {

    const {data, appParam} = useContext(ContextItem);

    return <div>The current time for {data.timeZoneName} is: {data.currentDateTime}</div>

}



export default Presentation