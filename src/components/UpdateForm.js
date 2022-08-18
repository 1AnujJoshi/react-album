import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Input from "@mui/material/Input";
import { useState } from "react";
import { api } from "../api/api";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

export function UpdateForm({ id }) {
  const [Id, setId] = useState("");
  const [userId, setuserId] = useState("");
  const [Title, setTitle] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const ariaLabel = { "aria-label": "description" };

  function update(e) {
    e.preventDefault();
    setOpen(false);
    let data = { Id, userId, Title };
    api.put(`albums/${id}/`, { data }).then((res) => {
      console.log("Album with id " + id + " updated successfully!!");
      console.log(res.data);
    });
  }

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Update
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h1">
            Update Your Album
          </Typography>
          <Typography
            component="span"
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1 },
                width: 800,
                maxWidth: "100%",
                textAlign: "center",
              }}
              noValidate
              required={true}
              autoComplete="off"
            >
              <Input
                label="Outlined secondary"
                type="number"
                placeholder="UserId"
                value={userId}
                onChange={(e) => {
                  setuserId(e.target.value);
                }}
                inputProps={ariaLabel}
              />
              <Input
                type="number"
                placeholder="Id"
                value={Id}
                onChange={(e) => {
                  setId(e.target.value);
                }}
                inputProps={ariaLabel}
                required
              />
              <Input
                type="text"
                placeholder="Title"
                value={Title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                inputProps={ariaLabel}
                required
              />
            </Box>

            <Button
              sx={{
                marginTop: "10px",
              }}
              variant="contained"
              type="submit"
              onClick={update}
              value="Submit"
            >
              Submit
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
