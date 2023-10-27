import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"
const { v4: uuidv4 } = require("uuid")
uuidv4() // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

export const dynamic = "force-dynamic"

export async function POST(request: Request) {
  const requestUrl = new URL(request.url)
  const formData = await request.formData()
  const question = String(formData.get("question"))
  const supabase = createRouteHandlerClient({ cookies })

  const { error } = await supabase.from("qnas").insert([
    {
      id: uuidv4(),
      created_at: new Date().toISOString(),
      question: question,
      anwser: null,
      is_pending: true,
      user_id: "3d0e2338-9df8-418e-be48-6b81230a86a9"
    }
  ])

  if (error) {
    console.log("Error inserting data: ", error)
    return NextResponse.redirect(
      `${requestUrl.origin}/qna?error=Could_not_add_qna`,
      {
        status: 301
      }
    )
  }

  return NextResponse.redirect(
    `${requestUrl.origin}/qna?message=Qna_has_been_added`,
    {
      status: 301
    }
  )
}
