import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../src/components/Header/Header'
import Footer from '../src/components//Footer/Footer'
import { FirebaseProvider } from './context/firebase'

const Layout = () => {

  return (
    <>
    <FirebaseProvider>

    <Header />
    <Outlet />
    <Footer />
    

    </FirebaseProvider>
    </>
  )
}

export default Layout