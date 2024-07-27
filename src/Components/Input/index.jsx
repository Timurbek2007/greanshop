import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function CustomInput({ children, title }) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": {
          width: "35ch",
          border: "1px solid green",
          borderRadius: "6px",
          margin: "20px 0px",
        },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        placeholder={children}
        label={title}
        variant="filled"
        color="success"
        sx={{ display: "flex" }}
        className="input"
      />
    </Box>
  );
}
