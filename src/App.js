import './App.css';
import {useState, useEffect} from 'react'
import  {v4 as myUuid} from 'uuid'
 import { BrowserRouter, Routes, Route } from 'react-router-dom';
 import Home from './Home';
 import Services from './Services';
 import About from './About';
 import Products from './Products';
 import Error from './Error'
 

 
 const App = ( ) => {

  
 
  return (
    <BrowserRouter >
         <h1>App JS</h1>
         <Routes>
            <Route path='/' element= {<Home/>}/>
            <Route path='/services' element= {<Services/>}/>
            <Route path='/about' element= {<About/>}/>
            <Route path='/products' element= {<Products/>}/>
            <Route path='/*' element= {<Error/>}/>
         </Routes>
       
    </BrowserRouter>
  );
}

export default App;
