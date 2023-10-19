import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"
const { v4: uuidv4 } = require("uuid")
uuidv4() // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

export const dynamic = "force-dynamic"

export async function POST(request: Request) {
  const requestUrl = new URL(request.url)
  const formData = await request.formData()
  const title = String(formData.get("title"))
  const supabase = createRouteHandlerClient({ cookies })

  //const user = supabase.auth.getUser()
  //console.log(user)

  const { error } = await supabase.from("todos").insert([
    {
      id: uuidv4(),
      created_at: new Date().toISOString(),
      title: title,
      is_complete: false,
      user_id: null
    }
  ])

  if (error) {
    console.log("Error inserting data: ", error)
    return NextResponse.redirect(
      `${requestUrl.origin}/todo?error=Could not add todo`,
      {
        status: 301
      }
    )
  }

  return NextResponse.redirect(
    `${requestUrl.origin}/todo?message=Todo has been added`,
    {
      status: 301
    }
  )
}
