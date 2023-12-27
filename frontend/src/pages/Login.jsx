import React, {useContext} from 'react'
import { useState } from 'react'

import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {BiUserCircle} from "react-icons/bi"

import { AuthContext } from '../context/AuthContext'
import { BASE_URL } from '../utils/config'

export const Login = () => {
 
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined
  })

  const {dispatch} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = e =>{
    setCredentials(prev =>({...prev, [e.target.id]:e.target.value}) )
  }

  const handleClick = async e =>{
    e.preventDefault();
    dispatch({type:"LOGIN_START"})
   
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "post",
        headers:{
          "content-type": "application/json"
        },
        credentials: "include", 
        body: JSON.stringify(credentials)
      })
      const result = await res.json();
      if(!res.ok) alert(result.message);
      dispatch({type:"LOGIN_SUCCESS", payload:result.data});
      navigate("/")
    } catch (err) {
      dispatch({type:"LOGIN_FAILURE", payload: err.message})
    };
  }

  
  return (
    <div className='w-full custom-height flex items-center justify-center text-white font-light bg-gradient-to-b from-lightGreen to-white'>     
        <div className="authContainer">
            <BiUserCircle className='h-14 w-auto'/>
            <h2>Login</h2>
            <p>Don't have an account yet? <Link to="/register" className='text-white font-bold no-underline'>Sign Up</Link></p>
            <form className='flex flex-col'>
                <input type="email" name="email" id="email" placeholder='Email' required onChange={handleChange}/>
                <input type="password" name="password" id="password" placeholder='Password' required onChange={handleChange}/>
                <button type="submit" onClick={handleClick} className='submitButton'>Login</button>
            </form>
        </div>
</div>
  )
}
