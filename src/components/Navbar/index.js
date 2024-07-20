import React, { useState } from 'react'
import { FaChevronRight } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { PiCampfireThin } from "react-icons/pi";
import { IoPerson } from "react-icons/io5";
import Cookies from 'js-cookie'
import './index.css'
import Login from '../Login';
import { useNavigate } from 'react-router-dom';
export default function Navbar() {
  const [loginStatus,setLoginStatus] = useState(false)
  const navigate = useNavigate()
  const closeLogin = () =>{
    setLoginStatus(prev => !prev)
  }
  const checkUser = Cookies.get('jwt_token')
  const bookPujaClick = ()=>{
    if(!checkUser){
      setLoginStatus(true)
    }else{
      navigate('/book-puja')
    }
  }
  return (
    <>
      <div className='right-nav-container'>
          <p>To check all available pujas & offers:</p>
          {!checkUser && <button onClick={()=> setLoginStatus(prev => !prev)} className='login-btn'>Login / Create an account</button>}
          {checkUser && <p>Welcome to Sri Mandir Puja Seva</p>}
          <div className='account-details'>
              <p>Account Details</p>
              <button><span className='d-flex align-items-center'><IoPerson style={{fontSize:'20px',color:'#00000050',marginRight:'10px'}} /> My Profile</span><FaChevronRight /></button>
              <button onClick={bookPujaClick}><span className='d-flex align-items-center'><IoDocumentTextOutline style={{fontSize:'20px',color:'#00000070',marginRight:'10px'}} /> My Puja Bookings</span><FaChevronRight /></button>
              <button><span className='d-flex align-items-center'><IoDocumentTextOutline style={{fontSize:'20px',color:'#00000070',marginRight:'10px'}} /> My Ramotsav Bookings</span><FaChevronRight /></button>
              <button><span className='d-flex align-items-center'><PiCampfireThin style={{fontSize:'20px',color:'#00000070',marginRight:'10px'}} /> Book a Puja</span><FaChevronRight /></button>
          </div>
          <div className='help-support'>
              <p>Help & Support for Puja Booking</p>
              <img src='https://res.cloudinary.com/dmoa3xmnx/image/upload/v1721390687/pyyb0cobfjfgilmo1h1v.png' alt='help data' />
          </div>
      </div>
      {loginStatus && <Login changeStatus={closeLogin} />}
    </>
  )
}
