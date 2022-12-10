import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Check from './Check';

const LogIn = ({setUser}) => {
   const [ name, setName] =  useState('');
   const [ email, setEmail] =  useState('');

    const navigate = useNavigate();

   const handleSubmit = async (e) => {
     e.preventDefault();
     if(!name || !email) return ;
     setUser({name: name, email: email});
     navigate('/dashboard')

   }
  
    
  return (
    <section>
        <form onSubmit={handleSubmit}>
            <h5>LogIn</h5>
            <label htmlFor='name'>Name</label>
            <input type='text' id = 'name' value = {name} onChange = {(e) => setName(e.target.value)}/>

            <label htmlFor='email'>Email</label>
            <input type='text' id = 'email' value = {email} onChange = {(e) => setEmail(e.target.value)}/>
            <button type='submit'>Login</button>
        </form>
         
          <Check name = {name} email = {email}/>
    </section>
    
  )
}

export default LogIn
