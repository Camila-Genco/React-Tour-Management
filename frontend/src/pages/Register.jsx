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
    <div className='w-full min-h-screen flex items-center justify-center text-darkGreen'>
      <div className='grid md:grid-cols-2 absolute max-h-[800px] top-30 w-[75%] my-auto'>
         <div className='hidden rounded-l-xl bg-white md:flex items-center'><img src={image} className="object-contain" alt="" /></div>
        <div className="max-w-2xl h-auto bg-white shadow-lg p-10 rounded-xl md:rounded-none md:rounded-r-xl overflow-visible flex flex-col">
            <AiOutlineUserAdd className='h-14 w-auto left-1/'/>
            <h2 className='text-center'>Sign Up</h2>
            <p className='text-center'>Already have an account? <Link to="/login">Login</Link></p>
            <form action="" className='flex flex-col'>
            <input type="text" name="name" id="username" placeholder='User name' onChange={handleChange} className='my-4 rounded p-2 border-2 border-green'/>
            <input type="email" name="email" id="email" placeholder='Email' onChange={handleChange} className='my-4 rounded p-2 border-2 border-green'/>
            <input type="password" name="password" id="password" placeholder='Password' onChange={handleChange} className='my-4 rounded p-2 border-2 border-green' />
            <button type="submit" onClick={handleClick} className='rounded-xl h-12 bg-green hover:bg-darkGreen my-4 tracking-widest'>Submit</button>
            </form>
        </div>
        </div>
    </div>
  )
}
