import Link from "next/link"
import Messages from "./messages"
import { Box, Button, TextField } from "@mui/material"

export default function Login() {
  return (
    <div>
      <Button href="/">Back</Button>

      <form
        action="/auth/sign-in"
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
            name="email"
            id="email"
            label="Email"
            variant="outlined"
            placeholder="name@example.com"
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            required
            name="password"
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            placeholder="********"
            InputLabelProps={{
              shrink: true
            }}
          />
          <Button
            type="submit"
            variant="contained"
          >
            Sign in
          </Button>
          <Button
            formAction="/auth/sign-up"
            type="submit"
          >
            Sign Up
          </Button>
        </Box>
        <Messages />
      </form>
    </div>
  )
}
