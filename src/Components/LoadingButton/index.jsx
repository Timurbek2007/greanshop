import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { Box } from "@mui/material";

export default function ({ text }) {
  const [loading, setLoading] = React.useState(false);

  function handleClick() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }

  return (
    <Box>
      <LoadingButton
        sx={{ width: "460px", height: "55px" }}
        color="success"
        onClick={handleClick}
        loading={loading}
        variant="contained"
        className="loadding"
      >
        {text}
      </LoadingButton>
    </Box>
  );
}
