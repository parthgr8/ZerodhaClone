import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from './landingPage/home/HomePage.jsx'
import SignUp from './landingPage/signUp/SignUp.jsx'
import SupportPage from './landingPage/support/SupportPage.jsx'
import PricingPage from './landingPage/pricing/PricingPage.jsx'
import ProductsPage from './landingPage/products/ProductsPage.jsx'
import About from './landingPage/aboutUs/About.jsx'
import Navbar from './landingPage/Navbar.jsx'
import Footer from './landingPage/Footer.jsx'
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/products" element={<ProductsPage/>}></Route>
      <Route path="/support" element={<SupportPage/>}></Route>
      <Route path="/pricing" element={<PricingPage/>}></Route>
      <Route path="/about" element={<About/>}></Route>
    </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App
