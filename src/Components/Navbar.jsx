import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
<div className='shadow-md sticky z-50 top-0 bg-white'>
    <nav className="w-9/12 mx-auto flex items-center justify-between py-4 ">
  <h1 className="text-xl font-bold">Book Vibe</h1>

  <ul className="flex gap-10 justify-center items-center">
    <li> <NavLink className={({isActive})=>{
      return(
        isActive? 'px-6 py-2 rounded-sm border border-green-400 text-green-800'
               : 'border-none'
      )
    }} to="/">Home</NavLink></li>
    <li><NavLink className={({isActive})=>{
     return(
      isActive?' px-6 py-2 rounded-sm border border-green-400 text-green-800'
      :'border-none'
     );
    }} to="/books">Listed Books</NavLink></li>
    <li><NavLink className={({isActive})=>{
           return(
        isActive?'px-6 py-2 border border-green-400 text-green-800'
        :'border-none'
           );
    }} to="/readonly">Pages to Read</NavLink></li>
  </ul>

  <div className="flex gap-3">
    <button className='bg-green-600 text-white px-5 py-2 rounded-sm'>Sign In</button>
    <button className='bg-cyan-500 text-white px-5 py-2 rounded-sm'>Sign Up</button>
  </div>
</nav>
</div>
  )
}

export default Navbar