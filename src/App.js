import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import BookPuja from './components/BookPuja'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/book-puja' element={<BookPuja />} />
      </Routes>
    </>
  )
}
