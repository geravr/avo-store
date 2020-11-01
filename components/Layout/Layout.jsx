import React from 'react'
import NavBar from '@components/Navbar/Navbar'

const Layout = ({ children }) => {
  return (
    <div className="container">
      <NavBar />
      {children}
      <footer>This is the footer</footer>

      <style jsx>
        {' '}
        {`
           {
            .container {
              background: salmon;
            }
          }
        `}{' '}
      </style>
    </div>
  )
}

export default Layout
