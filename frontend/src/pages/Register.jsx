import React, {useState, useContext} from 'react'
import {AiOutlineUserAdd} from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { BASE_URL } from '../utils/config'
import image from "../assets/images/Sign up-cuate.svg"

export const Register = () => {

  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined
  })

  const {dispatch} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleChange = e =>{
    setCredentials(prev =>({...prev, [e.target.id]:e.target.value}) )
  }

  const handleClick = async e =>{
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "post",
        headers:{
          "content-type": "application/json"
        }, 
        body: JSON.stringify(credentials)
      })
      const result = await res.json();
      if(!res.ok) alert(result.message);
      dispatch({type:"REGISTER_SUCCESS"});
      navigate("/login")

    } catch (err) {
      alert(err.message)
    };
  }

  return (
    <div className='w-full custom-height flex items-center justify-center text-white font-light bg-gradient-to-b from-lightGreen to-white'>
      
        
        <div className="min-w-[40%] h-auto bg-darkGreen shadow-lg p-10 rounded-xl  overflow-visible flex flex-col text-white">
            <AiOutlineUserAdd className='h-14 w-auto left-1/'/>
            <h2 className='text-center'>Sign Up</h2>
            <p className='text-center'>Already have an account? <Link to="/login" className='text-white font-bold no-underline'>Login</Link></p>
            <form action="" className='flex flex-col'>
            <input type="text" name="name" id="username" placeholder='User name' onChange={handleChange} className='my-4 rounded p-2 bg-lightGreen '/>
            <input type="email" name="email" id="email" placeholder='Email' onChange={handleChange} className='my-4 rounded p-2 bg-lightGreen'/>
            <input type="password" name="password" id="password" placeholder='Password' onChange={handleChange} className='my-4 rounded p-2 bg-lightGreen' />
            <button type="submit" onClick={handleClick} className='rounded-xl h-12 my-4 buttonWhite  hover:bg-white hover:font-bold hover:text-darkGreen tracking-widest'>Submit</button>
            </form>
        </div>
        </div>
    
  )
}
