import TestComponent from './components/TestComponent';
import { capitalize } from './utils/strings';

const App = () => {
  return (
    <div>
      {capitalize('app')}
      <TestComponent />
    </div>
  );
};

export default App;
