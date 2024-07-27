import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { Box } from "@mui/material";
import ColorButton from "../buttonbig";

export default function CustomizedSnackbars() {
  const [open, setOpen] = React?.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (!reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Box>
      <Button onClick={handleClick}>
        <ColorButton>
          <i class="fa-solid fa-arrow-right-from-bracket"></i>
          Login
        </ColorButton>
      </Button>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{
            width: "100%",
          }}
        >
          You are not registered yet
        </Alert>
      </Snackbar>
    </Box>
  );
}
