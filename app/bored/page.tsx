import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { Box, Button, TextField } from "@mui/material"

export const dynamic = "force-dynamic"

export default async function ServerComponent() {
  const supabase = createServerComponentClient({ cookies })

  const res = await fetch("https://www.boredapi.com/api/activity")
  const data = await res.json()
  const activity = data.activity

  console.log(activity)

  return (
    <div>
      <pre>{JSON.stringify(activity, null, 2)}</pre>
    </div>
  )
}
