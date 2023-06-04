import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ fontWeight: "bold", fontSize: "25px" }}
          >
            DEMO
          </Typography>
          <Typography>
            <ul
              style={{
                display: "flex",
                textDecoration: "none",
                listStyle: "none",
              }}
            >
              <li style={{ paddingRight: "22px", fontWeight: "bold" }}>Home</li>
              <li style={{ paddingRight: "22px", fontWeight: "bold" }}>
                About
              </li>
              <li style={{ paddingRight: "22px", fontWeight: "bold" }}>
                Our Services
              </li>
              <li style={{ paddingRight: "22px", fontWeight: "bold" }}>
                Our Blogs
              </li>
              <li style={{ paddingRight: "22px", fontWeight: "bold" }}>
                Contact Us
              </li>
            </ul>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
