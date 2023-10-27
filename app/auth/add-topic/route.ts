import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function POST(request: Request) {
  const requestUrl = new URL(request.url)
  const formData = await request.formData()
  const title = String(formData.get("title"))
  const description = String(formData.get("description"))
  const supabase = createRouteHandlerClient({ cookies })

  const { error } = await supabase.from("topics").insert([
    {
      user_id: null,
      created_at: new Date().toISOString(),
      title: title,
      description: description,
      is_relevant: true
    }
  ])

  if (error) {
    console.log("Error inserting data: ", error)
    return NextResponse.redirect(
      `${requestUrl.origin}/topic?error=Could_not_add_topic`,
      {
        status: 301
      }
    )
  }

  return NextResponse.redirect(
    `${requestUrl.origin}/topic?message=topic_has_been_added`,
    {
      status: 301
    }
  )
}
