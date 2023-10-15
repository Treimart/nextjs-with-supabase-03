import Link from "next/link"
import Messages from "./messages"
import { Box, Button, TextField } from "@mui/material"

export default function Login() {
  return (
    <div>
      <Link
        href="/"
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{" "}
        Back
      </Link>

      <form
        className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
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
        </Box>
        <Messages />
      </form>
    </div>
  )
}
