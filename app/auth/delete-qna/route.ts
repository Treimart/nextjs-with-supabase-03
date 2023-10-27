import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"
const { v4: uuidv4 } = require("uuid")
uuidv4() // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

export const dynamic = "force-dynamic"

export async function POST(request: Request) {
  const requestUrl = new URL(request.url)
  const formData = await request.formData()
  const id = String(formData.get("id"))
  const supabase = createRouteHandlerClient({ cookies })

  const { data, error } = await supabase.from("qnas").delete().match({ id: id })

  if (error) {
    console.log("Error inserting data: ", error)
    return NextResponse.redirect(
      `${requestUrl.origin}/qna/delete?error=Could_not_delete_qna`,
      {
        status: 301
      }
    )
  }

  return NextResponse.redirect(
    `${requestUrl.origin}/qna/delete?message=Qna_has_been_deleted`,
    {
      status: 301
    }
  )
}
