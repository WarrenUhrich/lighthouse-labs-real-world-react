import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import RefExample from './components/useRef/RefExample';
import Counter from './components/useContext/Counter';
import StyledComponentExample from './components/styled-components/StyledComponentExample';
import RouterAttempt from './components/routing/RouterAttempt';
import ReactRouterExample from './components/routing/ReactRouterExample';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReactRouterExample />
    {/* <RouterAttempt /> */}
    {/* <StyledComponentExample /> */}
    {/* <Counter /> */}
    {/* <RefExample /> */}
  </React.StrictMode>
);
