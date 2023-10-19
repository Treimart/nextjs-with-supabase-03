import { Button } from "@mui/material"

export default function LogoutButton() {
  return (
    <form
      action="/auth/sign-out"
      method="post"
    >
      <Button
        color="inherit"
        type="submit"
      >
        Logout
      </Button>
    </form>
  )
}
