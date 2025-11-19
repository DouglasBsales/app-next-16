import { setTimeout } from 'node:timers/promises'

export const getCurrentTime = async () => {
  await setTimeout(2000)

  const response = await fetch('http://localhost:3000/api/current-time')

  const data = await response.json()

  return data
}
