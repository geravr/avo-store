import React, { useEffect, useState } from 'react'

// Components
import ProductList from '@components/ProductList/ProductList'
import Spinner from '@components/Spinner/Spinner'

const HomePage = () => {
  const [avocadoList, setAvocadoList] = useState([])
  const [isLoading, setIsloading] = useState(true)

  useEffect(() => {
    fetch('/api/avo')
      .then((response) => response.json())
      .then(({ count, data }) => {
        setAvocadoList(data)
        setIsloading(false)
      })
  }, [])

  if (isLoading) {
    return <Spinner size="12vh" />
  }

  return (
    <div>
      <div>Platzi and Next.js!</div>
      <ProductList products={avocadoList} />
    </div>
  )
}

export default HomePage
