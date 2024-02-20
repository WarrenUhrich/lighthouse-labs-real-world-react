import './App.css';
import ReactRouterExample from './components/routing/ReactRouterExample';
import StyledComponentExample from './components/styled-components/StyledComponentExample';
import RefCounter from './components/useRef/RefCounter';
// import RouterAttempt from './components/routing/RouterAttempt';
// import Counter from './components/useContext/Counter';


function App() {
  return (
    <div className="App">
      <RefCounter />
      {/* <Counter /> */}
      {/* <StyledComponentExample /> */}
      {/* <ReactRouterExample /> */}
      {/* <RouterAttempt /> */}
    </div>
  );
}

export default App;
