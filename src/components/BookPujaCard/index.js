import React from 'react'
import { GiByzantinTemple } from "react-icons/gi";
import { IoMdCalendar } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import './index.css'

export default function BookPujaCard(prop) {
    const {imageUrl,title,description,pujaVenue,pujaDate} = prop.cardsData
  return (
    <div className='card-conainer'>
        <img src={imageUrl} alt='temple pic' />
        <h1>{title}</h1>
        <p>{description}</p>
        <div className='d-flex align-items-center'><GiByzantinTemple style={{fontSize:'25px',color:'#F18912',marginRight:'10px'}} /> <span>{pujaVenue}</span></div>
        <div className='d-flex'><IoMdCalendar style={{fontSize:'25px',color:'#F18912',marginRight:'10px'}} /><span>{pujaDate}</span></div>
        <button className='participate-btn'>PARTICIPATE <FaArrowRightLong /></button>
    </div>
  )
}
