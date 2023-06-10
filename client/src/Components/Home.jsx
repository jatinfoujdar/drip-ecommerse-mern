import React from 'react'
import Navbar from './Navbar'
import NavImg from './NavImg'
import Banner from './Banner'
import ProductCrousal from './Products/ProductCrousal'
// import Footer from './Footer'

const Home = () => {
  return (
    <>
    <Navbar/>
    <NavImg/>
    <Banner/>
    <ProductCrousal/>
    {/* <Footer/> */}
    </>
  )
}

export default Home