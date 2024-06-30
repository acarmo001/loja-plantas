import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Userlogin from './components/Userlogin';
import Ourstory from './components/Ourstory';
import ProductPage from './components/ProductPage';
import ShoppingCart from './components/ShoppingCart';
import { CartContext, CartContextprovider } from './context/CartContext';

import './App.css';





function App() {
  return (
         
      <CartContextprovider>
        <CartContext.Consumer>
          {
            context => {
              return (
                <BrowserRouter>
                  <div className="App">
                    <Navbar />
                    <Header />
                    <Routes>
                      <Route path='/' element={<Home />} />
                      <Route path='/products' element={<Products />} />
                      <Route path='/contact' element={<Contact />} />
                      <Route path='/userlogin' element={<Userlogin />} />
                      <Route path='/ourstory' element={<Ourstory />} />
                      <Route path='/productPage/:id' element={<ProductPage />} />  
                      <Route path='/ShoppingCart' element={<ShoppingCart />} />
                    </Routes>
                    <Footer /> 
                  </div>
                </BrowserRouter>
              )
            }          
          }       
        </CartContext.Consumer>
      </CartContextprovider>      
    

  );
}

export default App;
