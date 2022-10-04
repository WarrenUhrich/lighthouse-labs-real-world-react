import { useContext } from 'react';
import CountContext from './CountContext';

const CountDisplay = () => {
    const context = useContext(CountContext);

   return (
      <p>Button clicked {context.count} times.</p>
   );
};

export default CountDisplay;
