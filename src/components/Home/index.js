import React from 'react'
import BookPujaCard from '../BookPujaCard'
import cardsData from '../../cardsData'
import './index.css'
import Header from '../Header'

export default function Home() {
  return (
    <>
    <Header />
    <div className='home-page'>
        <div className='text-content'>
            <p>WORLD’S LARGEST APP FOR HINDU DEVOTEES</p>
            <h1>Pray daily with <span>Sri Mandir</span>.One App for all your devotional needs.</h1>
        </div>
        <img src='https://res.cloudinary.com/dmoa3xmnx/image/upload/v1721387539/dcwe39w6u72op8mhdhn2.webp' alt='home banner' />
        <div className='store-icons'>
            <img src='https://res.cloudinary.com/dmoa3xmnx/image/upload/v1721387633/ynysws70ssrgnv4zv215.svg' alt='playstore'/>
            <img src='https://res.cloudinary.com/dmoa3xmnx/image/upload/v1721387701/tl92nre20wbqon3d7kd1.svg' alt='appstore'/>
        </div>
    </div>
    <ul className='d-flex flex-wrap justify-content-center p-0 m-0'>
      {cardsData.map(item => {
        return <BookPujaCard key={item.id} cardsData={item} />
      })}
    </ul>
    </>
  )
}
