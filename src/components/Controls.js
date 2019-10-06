import React, {useState, useContext, useEffect} from 'react';

import {ContextItem} from '@src/context';


const Controls = () => {

    const {appParam, methods} = useContext(ContextItem);

    return <div>
        <button
            className={appParam.tz === 'utc' ? 'is-active' : ''}
            onClick={() => methods.handleAppParamChange({tz: 'utc'})}
        >UTC</button>
        <button
            className={appParam.tz === 'est' ? 'is-active' : ''}
            onClick={() => methods.handleAppParamChange({tz: 'est'})}
        >EST</button>
    </div>

}



export default Controls