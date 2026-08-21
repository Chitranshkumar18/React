import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout



//Outlet react-router-dom ka ek component hai jo nested routes ke liye placeholder ka kaam karta hai — matlab parent route ke andar child route kahan render hogi, wo jagah batata hai.
