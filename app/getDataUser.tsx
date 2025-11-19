export const GetDataUser = async () => {
  const response = await fetch('http://localhost:3000/api/user-data')

  const data = await response.json()

  return data
}
