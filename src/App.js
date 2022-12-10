import './App.css';
import {useState, useEffect} from 'react'
import  {v4 as myUuid} from 'uuid'
 import { BrowserRouter, Routes, Route } from 'react-router-dom';
 import Home from './Home';
 import Services from './Services';
 import About from './About';
 import Products from './Products';
 import Error from './Error'
import SharedLayout from './SharedLayout';
 

 
 const App = ( ) => {

  
 
  return (
    <BrowserRouter >
          
         <Routes>
            <Route path='/' element= {<SharedLayout/>}>
              <Route index element = {<Home/>}/>
              <Route path='/services' element= {<Services/>}/>
              <Route path='/about' element= {<About/>}/>
              <Route path='/products' element= {<Products/>}/>
              <Route path='/*' element= {<Error/>}/>
            </Route>
            
         </Routes>
       <h1>Footer</h1>
    </BrowserRouter>
  );
}

export default App;
