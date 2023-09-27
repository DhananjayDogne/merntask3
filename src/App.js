import Home from './components/Home';

import './App.css';
import State from './context/State';

function App() {
  return (
    <div className="App">
      <State>
        <Home/>
      </State>
    </div>
  );
}

export default App;
