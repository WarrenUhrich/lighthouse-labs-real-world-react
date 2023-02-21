import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import RefExample from './components/useRef/RefExample';
import Counter from './components/useContext/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Counter />
    {/* <RefExample /> */}
  </React.StrictMode>
);
