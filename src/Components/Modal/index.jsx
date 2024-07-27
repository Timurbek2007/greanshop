import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import ColorButtons from "../Button";
import ColorButton from "../buttonbig";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal({ handleCloseModal }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        onClick={handleOpen}
        style={{ paddingTop: "20px", paddingBottom: "0px" }}
      >
        Sign In
      </Button>
      <Button
        onClick={handleCloseModal}
        style={{ paddingTop: "20px", paddingBottom: "0px" }}
      >
        Cancel
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200, borderRadius: 7, border: "none" }}>
          <h2 id="child-modal-title">An error occurred</h2>
          <Button onClick={handleClose}>Back</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal() {
  const [open, setOpen] = React?.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        <ColorButton>SHOP NOW</ColorButton>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400, borderRadius: 8, border: "none" }}>
          <h2 id="parent-modal-title">You are not registered</h2>
          <ChildModal handleCloseModal={handleClose} />
        </Box>
      </Modal>
    </div>
  );
}
