import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { Box, Button, TextField } from "@mui/material"

export const dynamic = "force-dynamic"

export default async function ServerComponent() {
  const supabase = createServerComponentClient({ cookies })

  const { data: qnas } = await supabase.from("qnas").select()

  return (
    <div>
      <pre>{JSON.stringify(qnas, null, 2)}</pre>

      <form
        action="/auth/delete-qna"
        method="post"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "2em"
          }}
        >
          <TextField
            required
            name="id"
            id="id"
            label="ID"
            variant="outlined"
            placeholder="410fb1a2-c7b8-4174-a1b5-ef1ab5568687"
            InputLabelProps={{
              shrink: true
            }}
          />
          <Button
            type="submit"
            variant="contained"
          >
            Delete qna
          </Button>
        </Box>
      </form>
    </div>
  )
}
