import React from 'react'
import { Row } from 'react-bootstrap'

// Components
import ProductCard from '@components/ProductCard/ProductCard'

const ProductList = ({ products }) => {
  if (!products) {
    return <h3>No existen productos</h3>
  }

  return (
    <Row className="justify-content-between">
      {products.map((product) => {
        return <ProductCard product={product} key={product.id} />
      })}
    </Row>
  )
}

export default ProductList
