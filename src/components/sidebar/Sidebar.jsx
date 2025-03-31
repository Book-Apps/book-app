// import React, { useState } from 'react'

// function Sidebar() {
//   const[show,setshow]=useState('true')

//   const toggle =()=>{
//     setshow(!show)
//   }

//   return (
//     <>
   
//     {/* <div className='flex relative -top-0'> 
//     {show?<div className='h-screen bg-slate-600 w-72 relative -top-6'>Sidebar</div>
//     :null}
//     <button onClick={toggle}>
//       {show?'s':'h'}
//     </button>
//     </div> */}
//     </>
    
//   )
// }

// export default Sidebar

// import React from 'react'
// import { Link } from 'react-router-dom'
//  import {FaAddressBook, FaArchive, FaBook, FaBookOpen, FaCalendarDay, FaCog, FaHome, } from 'react-icons/fa'


// const Sidebar = ({sidebarToggle}) => {
//   return (
    
    // <div className={`${sidebarToggle? " hidden " : " block "}w-64 bg-blue-600  h-screen px-4 py-2 `}>
    //     <div className='my-10 mb-10'>
    //         <h1 className='text-4x pl-10  text-white text-2xl'> ኪሠሪ መዝሙር</h1>
    //     </div>
    //     <hr />
    //     <ul className='mt-6 text-white font-bold' >
    //         <li className='mb-4 rounded hover:shadow hover:bg-blue-300 py-2'>
               
    //             <a href="" className='px-3'>
    //                  <FaBookOpen className='inline-block w-8 h-6 mr-6'> <a href="" className='px-3'></a></FaBookOpen> 
                
    //             </a>
    //             <Link className='inline-block' to='mezmur'> <li>መዝሙር</li></Link> 
    //         </li>

    //         <li className='mb-4 rounded hover:shadow hover:bg-blue-300 py-2'>
                
    //             <a href="" className='px-3'>
    //                  <FaBook className='inline-block w-8 h-6 mr-6'></FaBook> 
                    
    //             </a>
    //             <Link className='inline-block '  to='shortmezmur'><li>ሓጺር መዝሙር</li ></Link > 
    //         </li> 

    //         <li className='mb-4 rounded hover:shadow hover:bg-blue-300 py-2'>
    //             <a href="" className='px-3'>
    //                  <FaHome className='inline-block w-8 h-6 mr-6'></FaHome> 
                   
    //             </a>
    //             <Link className='inline-block ' to='wereb'><li> ወረብ</li></Link>
    //         </li> 

    //         <li className='mb-4 rounded hover:shadow hover:bg-blue-300 py-2'>
    //             <a href="" className='px-3'>
    //                  <FaAddressBook className='inline-block w-8 h-6 mr-6'></FaAddressBook> 
                   
    //             </a>
    //             <Link className='inline-block ' to='sbket'><li> ስብከት</li></Link>
    //         </li>  

    //         <li className='mb-4 rounded hover:shadow hover:bg-blue-300 py-2'>
    //             <a href="" className='px-3'>
    //                  <FaArchive className='inline-block w-8 h-6 mr-6'></FaArchive> 
                    
    //             </a>
    //             <Link className='inline-block ' to='favorite'><li>ማሕፉዳ</li></Link>
    //         </li> 

    //         <li className='mb-4 rounded hover:shadow hover:bg-blue-300 py-2'>
    //             <a href="" className='px-3'>
    //                  <FaCalendarDay className='inline-block w-8 h-6 mr-6'></FaCalendarDay> 
                    
    //             </a>
    //             <Link className='inline-block ' to='calender'><li>ዓውደ ኣዋርሕ</li></Link>
    //         </li> 

    //         <li className='mb-4 rounded hover:shadow hover:bg-blue-300 py-2'>
    //             <a href="" className='px-3'>
    //                  <FaCog className='inline-block w-8 h-6 mr-6'></FaCog> 
                   
    //             </a>
    //              <Link className='inline-block ' to='setting'><li>setting</li></Link>
    //         </li> 
            
              
           
            
    //     </ul>
    // </div>

    
//   )
// }

// export default Sidebar