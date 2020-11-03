import React from 'react'
import NavBar from '@components/Layout/Navbar'
import Main from '@components/Layout/Main'
import Footer from '@components/Layout/Footer'

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <Main>{children}</Main>
      <Footer />
    </div>
  )
}

export default Layout
