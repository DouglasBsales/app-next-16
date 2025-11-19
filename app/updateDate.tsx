interface UpdateDateProps {
  updateValueData: () => Promise<void>
}

export async function UpdateDate({ updateValueData }: UpdateDateProps) {
  'use client'
  return <button onClick={updateValueData}>atualizar data atual</button>
}
