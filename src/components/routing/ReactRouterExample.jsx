import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';

const MyReactRouterApp = () => {
  return (
    <Router>
      <h1>Welcome to our Website</h1>
      <nav>
        <h2>Navigation</h2>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default MyReactRouterApp;