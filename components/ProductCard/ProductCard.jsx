import React from 'react'
import { Card, Col } from 'react-bootstrap'
import Link from 'next/link'

import style from './productCard.module.css'

const ProductCard = ({ product }) => {
  const { name, id, price, image } = product
  return (
    <Col md="6" className="my-3">
      <Link href={`/product/${id}`}>
        <Card className={style.card}>
          <Card.Img variant="top" src={image} />
          <Card.Footer>
            <Card.Title>{name}</Card.Title>${price}
          </Card.Footer>
        </Card>
      </Link>
    </Col>
  )
}

export default ProductCard
