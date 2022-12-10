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
import SingleProduct from './SingleProduct';
import LogIn from './LogIn';
import DashBoard from './DashBoard';
import ProtectedRoute from './ProtectedRoute';
 

 
 const App = ( ) => {

  const [user, setUser] = useState(null);
  
 
  return (
    <BrowserRouter >
          
         <Routes>
            <Route path='/' element= {<SharedLayout/>}>
              <Route index element = {<Home/>}/>
              <Route path='/services' element= {<Services/>}/>
              <Route path='/about' element= {<About/>}/>
              <Route path='/products' element= {<Products/>}/>
              <Route path='/products/:productId' element = {<SingleProduct/>}/>
              <Route path='/login' element= {<LogIn setUser = {setUser}/>}/>
              <Route path='/dashboard' element = {<ProtectedRoute user = {user}><DashBoard user={user}/></ProtectedRoute>}/>
              <Route path='/*' element= {<Error/>}/>
            </Route>
            
         </Routes>
       <h1>Footer</h1>
    </BrowserRouter>
  );
}

export default App;
