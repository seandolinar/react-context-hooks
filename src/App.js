import React from 'react';

import DataContainer from './DataContainer';

import Controls from '@components/Controls';
import Presentation from '@components/Presentation';

import './styles/App.scss';

const App = () => <DataContainer>
        <Controls />
        <Presentation />
    </DataContainer>

export default App