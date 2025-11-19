import { cacheLife } from 'next/cache'

export const GetDataUser = async () => {
  'use cache' // 15 minutos cacheado

  cacheLife('seconds') // define o padrão de cache com base nas options

  const response = await fetch('http://localhost:3000/api/user-data')

  const data = await response.json()

  return data
}
