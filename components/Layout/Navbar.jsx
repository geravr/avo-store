import React from 'react'
import Link from 'next/link'

// Icons
import AvoLogo from '@components/SVGIcons/AvoLogo'
import Basket from '@components/SVGIcons/Basket'

// React Bootstrap
import { Container, Navbar as NavbarB, Badge } from 'react-bootstrap'

export default function Navbar() {
  return (
    <NavbarB bg="light" variant="light" sticky="top" className="mb-4">
      <Container style={{ maxWidth: '700px' }}>
        <Link href="/" passHref>
          <NavbarB.Brand className="d-flex align-items-center">
            <AvoLogo /> Avo store
          </NavbarB.Brand>
        </Link>
        <Link href="/about">
          <a className="d-flex align-items-center">
            <Basket />
            <Badge variant="secondary" className="ml-1">
              0
            </Badge>
          </a>
        </Link>
      </Container>
    </NavbarB>
  )
}
