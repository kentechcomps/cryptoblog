import { useState } from 'react';
import { BrowserRouter , Routes ,Route } from 'react-router-dom';
import Blogdetails  from './Blogdetails';
import Home from './Home';
import CryptoNews from './CryptoNews';


import './App.css';


function App() {


            
  return (
    <>
 <BrowserRouter>
 <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/details/:id" element={<Blogdetails/>} />
    <Route path="/CryptoNews" element={<CryptoNews/>}/>
 </Routes>
 </BrowserRouter> 


    </>
  );
}

export default App;
