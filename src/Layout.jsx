import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../src/components/Header/Header'
// import Footer from '../src/components//Footer/Footer'
import About from './pages/About'
import ProfilePage from './pages/ProfilePage'

const Layout = () => {

  return (
    <>
    <Header />
    <Outlet />
    <About/>
    {/* <Footer /> */}
    <ProfilePage/>

    </>
  )
}

export default Layout