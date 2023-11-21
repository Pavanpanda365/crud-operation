import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Crud from './components/Crud'
import Home from './components/Home';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
         <Route path='/' element={<Crud/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
