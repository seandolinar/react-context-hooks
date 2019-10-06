import React, {useState, useContext, useEffect} from 'react';

import {ContextItem} from '@src/context';


const Controls = () => {

    const {appParam, methods} = useContext(ContextItem);

    return <div>
        <button
            className={appParam.tz === 'UTC' ? 'is-active' : ''}
            onClick={() => methods.handleAppParamChange({tz: 'UTC'})}
        >UTC</button>
        <button
            className={appParam.tz === 'EST' ? 'is-active' : ''}
            onClick={() => methods.handleAppParamChange({tz: 'EST'})}
        >EST</button>
    </div>

}



export default Controls