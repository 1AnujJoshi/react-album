import * as React from "react";
import { Link } from "react-router-dom";
import { AddAlbumForm } from "../components/AddAlbumForm";
import HomeIcon from "@mui/icons-material/Home";
import Typography from "@mui/material/Typography";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <Link to="/">
          <HomeIcon sx={{ fontSize: 40, color: "#1976d2" }} />
        </Link>
      </div>
      <div>
        <Typography sx={{ fontSize: 30, color: "#1976d2" }}>
          JSON-React-Album
        </Typography>
      </div>

      <AddAlbumForm sx={{ fontSize: 40, color: "#1976d2" }} />
    </div>
  );
};

export default Navbar;
