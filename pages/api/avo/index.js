import DB from '@database'

const allAvos = async (request, response) => {
  const db = new DB()
  const allEntries = await db.getAll()
  const count = allEntries.length

  response.statusCode = 200
  response.setHeader('Content-type', 'application/json')
  response.end(
    JSON.stringify({
      count,
      data: allEntries,
    })
  )
}

export default allAvos
