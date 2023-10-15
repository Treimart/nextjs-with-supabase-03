import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { Box, Button, TextField } from "@mui/material"

export const dynamic = "force-dynamic"

export default async function ServerComponent() {
  const supabase = createServerComponentClient({ cookies })

  const { data: todos } = await supabase.from("todos").select()

  return (
    <div>
      <pre>{JSON.stringify(todos, null, 2)}</pre>

      <form
        action="/auth/add-todo"
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
            placeholder="Take dog for a walk"
            InputLabelProps={{
              shrink: true
            }}
          />
          <Button
            type="submit"
            variant="contained"
          >
            Add todo
          </Button>
        </Box>
      </form>
    </div>
  )
}
