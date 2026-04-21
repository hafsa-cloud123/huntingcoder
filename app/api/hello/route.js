import { NextResponse } from 'next/server'

export async function GET(request,res) {
  console.log(request)

  return NextResponse.json({ name: 'hafsa' }, { status: 200 })
}
