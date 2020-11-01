import React, { useEffect, useState } from 'react'

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
      {avocadoList.map((avocado) => (
        <div>{avocado.image}</div>
      ))}
    </div>
  )
}

export default HomePage
