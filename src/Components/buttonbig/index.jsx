import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import "../../styles/button.css";

export default function ColorButton() {
  return (
    <Stack direction="row" spacing={1}>
      <Button variant="contained" color="success" className="button">
        SHOP NOW
      </Button>
    </Stack>
  );
}
