import React, { useState } from 'react'
import Cookies from 'js-cookie'
import { IoMdCloseCircle } from "react-icons/io";
import './index.css'
import Loader from '../Loader';

export default function Login(prop) {
    const {changeStatus} = prop
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [loader,setLoader] = useState(false)

    const onLoginClick = e =>{
        e.preventDefault()
        if(name !== '' && email !== ''){
            const obj = {name,email}
            postUserData(obj)
        }
    }

    const postUserData = async data =>{
        const payload = {
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }
        setLoader(true)
        const req = await fetch('https://mandir-backend.onrender.com/login',payload)
        const res = await req.json()
        if(req.status === 200){
            Cookies.set('jwt_token',res.token,{expires:7})
            setName('')
            setEmail('')
            setLoader(false)
            changeStatus()
        }else{
            setLoader(false)
            alert('Please Enter Valid Details')
        }
    }
  return (
    <div className='login-page'>
        <div className='user-card'>
            <button onClick={changeStatus} className='close-btn'><IoMdCloseCircle /></button>
            <div className='card-content'>
                <img src='https://res.cloudinary.com/dmoa3xmnx/image/upload/v1721403395/btacusclngmr9qb4iuyc.svg' alt='mandir icon' />
                <h1>Login to check your booking</h1>
                <p className='para1'>Please login with the same email that you have used for booking.</p>
                <form>
                    <div className='input-container'>
                        <label htmlFor='name'>Name</label>
                        <input value={name} onChange={e => setName(e.target.value)} type='text' id='name' required />
                    </div>
                    <div className='input-container'>
                        <label htmlFor='email'>Email</label>
                        <input value={email} onChange={e => setEmail(e.target.value)} type='email' id='email' required />
                    </div>
                    <p className='para1'>By proceeding you agree to the <span style={{color:"#F59812"}}>Terms & Conditions</span> and <span style={{color:"#F59812"}}>Privacy Policy of</span> Sri Mandir</p>
                    <button onClick={onLoginClick} className='login-btn'>Login</button>
                </form>
            </div>
        </div>
        {loader && <Loader /> }
    </div>
  )
}
