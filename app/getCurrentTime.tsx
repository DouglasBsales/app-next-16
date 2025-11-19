import { cacheLife, cacheTag } from 'next/cache'

export const getCurrentTime = async () => {
  'use cache'

  //   cacheLife('max') // max é o valor padrão do next com revalidação automatica em 15 minutos
  cacheLife('days') // define o tempo que o cache será invalidado

  cacheTag('current-time') // seta a tag atual pra essa função

  const response = await fetch('http://localhost:3000/api/current-time')

  const data = await response.json()

  return data
}
