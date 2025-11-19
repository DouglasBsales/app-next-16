import { NextResponse } from 'next/server'

export function GET() {
  const dataUser = {
    name: 'Douglas barbosa sales',
    age: 23,
    profission: 'Desenvolvedor',
    work: 'CTI INFORMÁTICA',
  }

  return NextResponse.json(dataUser)
}
