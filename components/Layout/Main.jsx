import React from 'react'
import { Container } from 'react-bootstrap'

const Main = ({ children }) => {
  return (
    <main>
      <Container style={{ maxWidth: '700px' }}>{children}</Container>
    </main>
  )
}

export default Main
