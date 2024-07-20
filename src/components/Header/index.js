import React, { useState } from 'react'
import { IoPerson } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import './index.css'
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
export default function Header() {
    const [profileState,setProfileState] = useState(false)
  return (
   <header className='header-parent'>
        <nav className='nav-bar-head'>
          <img src='https://res.cloudinary.com/dmoa3xmnx/image/upload/v1721387605/mandirIcon.svg' alt='mandir logo' />
          <ul>
            <li><Link style={{textDecoration:'none',color:'#E25F62'}} to='/'>Home</Link></li>
            <li>Puja</li>
            <li>Panchang</li>
            <li>Temples</li>
            <li>Library <IoChevronDown /> </li>
          </ul>
          <div className='nav-right'>
          <h1>English <IoChevronDown /> </h1>
          <button onClick={()=> setProfileState(prev=> !prev)}><IoPerson /></button>  
          </div>
        </nav>
        {profileState && <Navbar />}
   </header>
  )
}
