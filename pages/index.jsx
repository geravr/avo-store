import React, { useEffect, useState } from 'react'

// Components
import ProductList from '@components/ProductList/ProductList'

const HomePage = () => {
  const [avocadoList, setAvocadoList] = useState([])

  useEffect(() => {
    fetch('/api/avo')
      .then((response) => response.json())
      .then(({ count, data }) => {
        setAvocadoList(data)
      })
  }, [])

  return (
    <div>
      <div>Platzi and Next.js!</div>
      <ProductList products={avocadoList} />
    </div>
  )
}

export default HomePage
