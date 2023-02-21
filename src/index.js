import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import RefExample from './components/useRef/RefExample';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RefExample />
  </React.StrictMode>
);
