import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const pages = ["Menu", "About"];

const AppHeader = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <div style={{ display: "flex", flexGrow: 1 }}>
            <Link
              to="/"
              style={{ textDecoration: "inherit", color: "inherit" }}
            >
              <MenuItem>
                <Typography
                  style={{ paddingRight: "15px", fontWeight: "bold" }}
                  variant="h4"
                  component="div"
                >
                  Hungry Scholars
                </Typography>
              </MenuItem>
            </Link>

            {pages.map((page) => (
              <MenuItem key={page}>
                <Link
                  to={page}
                  style={{
                    textDecoration: "inherit",
                    color: "inherit",
                  }}
                >
                  <Typography textAlign="center">{page}</Typography>
                </Link>
              </MenuItem>
            ))}
          </div>
          <div style={{ display: "flex", paddingRight: "15px" }}>
            {
              <Link
                to="/login"
                style={{ textDecoration: "inherit", color: "inherit" }}
              >
                <Button color="inherit">Order From Us</Button>
              </Link>
            }
          </div>
          <div style={{ display: "flex" }}>
            {
              <Link
                to="/signup"
                style={{ textDecoration: "inherit", color: "inherit" }}
              >
                <Button color="inherit">Sign up</Button>
              </Link>
            }
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppHeader;
