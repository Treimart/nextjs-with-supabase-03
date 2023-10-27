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
        action="/auth/add-qna"
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
            name="question"
            id="question"
            label="Question"
            variant="outlined"
            placeholder="How many legs does an octopus have?"
            InputLabelProps={{
              shrink: true
            }}
          />
          <Button
            type="submit"
            variant="contained"
          >
            Add qna
          </Button>
        </Box>
      </form>
    </div>
  )
}
