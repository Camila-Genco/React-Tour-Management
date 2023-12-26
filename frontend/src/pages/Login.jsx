import React, {useContext} from 'react'
import {BiUserCircle} from "react-icons/bi"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { BASE_URL } from '../utils/config'
import { useNavigate } from 'react-router-dom'
import image from "../assets/images/Login-cuate.svg"

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
    <div className='w-full custom-height flex items-center justify-center text-white font-light bg-gradient-to-b from-lightGreen to-white' >     
        <div className="min-w-[40%] h-auto bg-darkGreen shadow-lg p-10 rounded-xl overflow-visible flex flex-col">
        <BiUserCircle className='h-14 w-auto left-1/'/>
        <h2 className='text-center'>Login</h2>
        <p className='text-center'>Don't have an account yet? <Link to="/register" className='text-white font-bold no-underline'>Sign Up</Link></p>
        <form action="" className='flex flex-col'>
          <input type="email" name="email" id="email" placeholder='Email' required onChange={handleChange} className='my-4 rounded p-2 bg-lightGreen'/>
          <input type="password" name="password" id="password" placeholder='Password' required  onChange={handleChange} className='my-4 rounded p-2  bg-lightGreen' />
        <button type="submit" onClick={handleClick} className='rounded-xl h-12 my-4 buttonWhite  hover:bg-white hover:font-bold hover:text-darkGreen tracking-widest'>Login</button>
        </form>
    </div>
    
</div>
  )
}
