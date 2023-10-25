import { NextResponse } from "next/server"

export async function GET() {
  const res = await fetch("https://www.boredapi.com/api/activity")
  const data = await res.json()
  //const data = await "Hello, this is a test"

  console.log("DATA FROM BORED/ROUTE.JS" + data)

  return NextResponse.json(data)
}
