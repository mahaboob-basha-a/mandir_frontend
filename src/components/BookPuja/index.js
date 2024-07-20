import React from 'react'
import './index.css'
import BookPujaCard from '../BookPujaCard'
import cardsData from '../../cardsData'
import Header from '../Header'

export default function BookPuja() {
  return (
    <>
    <Header />
    <div className='top-slider'>
    <h3>Perform your Puja as per Vedic rituals at Famous Hindu Temples in India with Sri Mandir</h3>
    <img className='w-50 slder-img' src="https://res.cloudinary.com/dmoa3xmnx/image/upload/v1721449199/banner1.webp" alt="banner" />
    </div>
    <div className='bottom-slide'>
    <h2>Upcoming Pujas on Sri Mandir.</h2>
    <p>Book online puja with Sri Mandir in more than 500+ temples across India. Receive video of the puja along with the Prasad and receive blessings from the divine for prosperity and well-being of you and your family</p>
    <ul className='d-flex flex-wrap justify-content-center p-0 m-0'>
      {cardsData.map(item => {
        return <BookPujaCard key={item.id} cardsData={item} />
      })}
    </ul>
</div>
    </>
  )
}
