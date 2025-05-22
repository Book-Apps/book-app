import React from 'react'
import { FaBars, FaBell, FaHeart, FaSearch, FaUserCircle,FaHome } from 'react-icons/fa'
import { FaShare } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className=' bg-blue-600 w-full h-20 flex justify-between items-center '>
 <div className='flex gap-8'>
       <span><img src="./logo.png" alt="" className='w-36 mt-2'/></span>
       {/* <FaBars className='text-white me-4 cursor-pointer  '/> */}
       <span><FaHome className='text-white mt-7' size={36}/></span>
       <span><img src="./mezmur1.png" alt="" className='w-36 mt-2 '/></span>
       
     </div>
  <nav className=' flex mt-10 justify-center  w-1/2 gap-24 '>
    
     <span className='flex '>
      <input type="text" placeholder='ድለዩ ክትረኽቡ'className='flex w-96 mb-10 rounded  p-2 ' />
      <FaSearch className='text-slate-600 absolute right-2/2  top-7' size={26}/>
      </span> 
     <span><FaHeart className='text-white' size={36}/></span>
     <span><FaShare className='text-white'size={36}/></span>
      <span><FaBell className='text-white'size={36}/></span>
     
     
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
   <span className='mr-16'><FaUserCircle className='text-white' size={36}/></span>
  </div>
     
    

     
  )
}

export default Header


     