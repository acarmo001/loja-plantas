import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import Contact from './components/Contact';

import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/contact' element={<Contact />} />          
        </Routes>  
      </div>
    </BrowserRouter>
    
  );
}

export default App;
