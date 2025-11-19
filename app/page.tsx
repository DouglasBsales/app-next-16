import { Suspense } from 'react'
import { getCurrentTime } from './getCurrentTime'
import { GetDataUser } from './getDataUser'

const ShowDate = async () => {
  const data = await getCurrentTime()

  return <p>{data.date}</p>
}

const ShowDataUser = async () => {
  const dataUser = await GetDataUser()

  return (
    <div>
      <p>{dataUser.name}</p>
      <p>{dataUser.age}</p>
      <p>{dataUser.profission}</p>
      <p>{dataUser.work}</p>
    </div>
  )
}

export default async function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col items-center gap-2">
        <div className="mb-5">
          <p>teste visualização component</p>
        </div>
        <p>Hello world</p>
        <Suspense fallback={<p> carregando data...</p>}>
          <ShowDate />
        </Suspense>
        <Suspense fallback={<p>carregando dados do usuário...</p>}>
          <ShowDataUser />
        </Suspense>
      </div>
    </div>
  )
}

