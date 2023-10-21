import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useMediaQuery,
  useTheme,
  Button,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

const Navigation = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Toolbar>
      <Typography
        sx={{ flexGrow: 1, letterSpacing: "0.05em", fontWeight: 800 }}
        variant="h6"
      >
        Portfolio
      </Typography>
      {isSmallScreen && (
        <>
          <IconButton onClick={handleMenu}>
            <MenuIcon  />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem  className={classes.newlink} onClick={handleClose}><NavLink className={({isActive}) => isActive ? classes.newactive : undefined} to=''>Home</NavLink></MenuItem>
            <MenuItem className={classes.newlink} onClick={handleClose}><NavLink className={({isActive}) => isActive ? classes.newactive : undefined} to='blog'>Blogs</NavLink></MenuItem>
            <MenuItem className={classes.newlink} onClick={handleClose}><NavLink className={({isActive}) => isActive ? classes.newactive : undefined} to='work'>Work</NavLink></MenuItem>
            <MenuItem className={classes.newlink} onClick={handleClose}><NavLink className={({isActive}) => isActive ? classes.newactive : undefined} to='contact'>Contact</NavLink></MenuItem>
          </Menu>
        </>
      )}
      {!isSmallScreen && (
        <Box
          className={classes.link}
          sx={{ display: "flex", flexDirection: "row", gap: 4,pr:5 }}
        >
          <NavLink className={({isActive}) => isActive ? classes.active : undefined} end to="">Home</NavLink>
          <NavLink className={({isActive}) => isActive ? classes.active : undefined} end to="blog">Blogs</NavLink>
          <NavLink className={({isActive}) => isActive ? classes.active : undefined} end to="work">Work</NavLink>
          <NavLink className={({isActive}) => isActive ? classes.active : undefined} end to="contact">Contact</NavLink>
        </Box>
      )}
    </Toolbar>
  );
};

export default Navigation;
