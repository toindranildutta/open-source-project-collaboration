import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../src/components/Header/Header'
import Footer from '../src/components//Footer/Footer'
import About from './pages/About'

const Layout = () => {
  return (
    <>
    <Header />
    <Outlet />
    <About/>
    <Footer />
    </>
  )
}

export default Layout