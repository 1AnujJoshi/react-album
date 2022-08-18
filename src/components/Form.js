import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { api } from "../api/api";

import { useState } from "react";
export function Form() {
  const [Id, setId] = useState("");
  const [userId, setuserId] = useState("");
  const [Title, setTitle] = useState("");
  const ariaLabel = { "aria-label": "description" };

  function addAlbum(e) {
    e.preventDefault();

    let data = { Id, userId, Title };
    api.post("albums", { data }).then((res) => {
      console.log(res.data);
    });
  }
  return (
    <div id="addform">
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
        onClick={addAlbum}
        value="Submit"
      >
        Submit
      </Button>
    </div>
  );
}
