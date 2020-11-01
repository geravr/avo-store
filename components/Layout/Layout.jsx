import React from 'react'
import NavBar from '@components/Navbar/Navbar'

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <footer>This is the footer</footer>
    </div>
  )
}

export default Layout
