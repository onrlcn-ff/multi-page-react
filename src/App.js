import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import About from './components/About';
import Component from './components/Component';
import Iletisim from './components/Iletisim';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Navbar /> 
      <Routes>
        <Route path='/Slider' element={<Slider/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Iletisim' element={<Iletisim/>}/>
        <Route path='/Component' element={<Component/>}/>
      </Routes>

    </div>
  );
}

export default App;
