import React from 'react';
// Important Components from React Router:
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';
import Numbers from './Numbers';
import RouteNavigation from './RouteNavigation';

const ReactRouterExample = () => {
    return (
        <BrowserRouter>
            <h1>Welcome to our Website!</h1>

            <RouteNavigation />

            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/numbers/:myvalue" element={<Numbers />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default ReactRouterExample;
