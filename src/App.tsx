import {PersonProvider} from './context/PersonContext';
import ListCard from './container/ListCard';
import './App.css';


function App() {

  return (
    <PersonProvider>
      <ListCard />
    </PersonProvider>
  );
}

export default App;
