import React from 'react';
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Home from './pages/Home';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='cart' element={<Cart />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App