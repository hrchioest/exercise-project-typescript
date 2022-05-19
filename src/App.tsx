import {PersonProvider} from './context/PersonContext';
import Home from './pages/Home/Home';
import './App.css';


function App() {

  return (
    <PersonProvider>
      <Home />
    </PersonProvider>
  );
}

export default App;
