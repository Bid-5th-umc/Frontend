import React from 'react'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import Detail from './Detail/Detail'

const Layout = ({ children }) => {
  return (
    <div>
      <Header/>
      <Detail>
        { children }
      </Detail>
      <Footer/>
    </div>
  )
}

export default Layout