import React from 'react'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Footer from '../components/Footer'


function Prod() {
  
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
    <Products/>
    </div>
    <Footer/>
    </>
  )
}

export default Prod