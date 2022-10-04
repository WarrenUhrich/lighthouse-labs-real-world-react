import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import CustomRouter from './components/router-examples/CustomRouter';
import ExampleReactRouter from './components/router-examples/ExampleReactRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <CustomRouter /> */}
    <ExampleReactRouter />
  </React.StrictMode>
);
