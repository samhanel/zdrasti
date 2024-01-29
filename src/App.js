import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Login from './Login';
import Signup from './Signup';
import RiskCalculator from './components/RiskCalculator';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/home' element={<RiskCalculator />}></Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
