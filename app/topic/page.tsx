import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { Box, Button, TextField, TextareaAutosize } from "@mui/material"

export const dynamic = "force-dynamic"

export default async function ServerComponent() {
  const supabase = createServerComponentClient({ cookies })

  const { data: topics } = await supabase.from("topics").select()

  return (
    <div>
      <pre>{JSON.stringify(topics, null, 2)}</pre>

      <form
        action="/auth/add-topic"
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
            name="title"
            id="title"
            label="Title"
            variant="outlined"
            placeholder="Coffee prices start increasing later this month"
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            required
            name="description"
            id="description"
            label="Description"
            variant="outlined"
            placeholder="Coffee prices will increase to $3 minimum in 29-th of October."
            InputLabelProps={{
              shrink: true
            }}
          />
          <Button
            type="submit"
            variant="contained"
          >
            Add topic
          </Button>
        </Box>
      </form>
    </div>
  )
}
