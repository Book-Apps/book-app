import React from 'react'
import { FaBars, FaBell, FaHeart, FaSearch, FaUserCircle } from 'react-icons/fa'
import { FaShare } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className=' '>

  <nav className='   bg-blue-600 w-full h-36'>
     <div>
       <span><img src="./logo.png" alt="" className='w-72 '/></span>
       <FaBars className='text-white me-4 cursor-pointer  flex justify-between'/>
     </div>
   {/* <div className='flex items-center text-x1 text-black scroll relative  '>
     <span className='relative md:absolute inset-y-0 left-0  items-center pl-2 '><button className='p-3 mb-32 focus:outline-none text-blue-600 md:text-black'><FaSearch/></button></span>
     <input type="text"className='w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block' />
   </div> */}
       
       {/* <ul className='flex'>
           <Link to='/'><li>Home</li></Link> 
           <Link to='mezmur'> <li>mezmur</li></Link>
           <Link to='shortmezmur'><li>shortMezmur</li></Link> 
           <Link to='wereb'><li>wereb</li></Link>
           <Link to='sbket'><li>sbket</li></Link>
           <Link to='favorite'><li>favorite</li></Link>
           <Link to='alender'><li>calender</li></Link>
           <Link to='setting'><li>setting</li></Link>
       </ul>  */}
   </nav>
  </div>
     
    

     
  )
}

export default Header


     