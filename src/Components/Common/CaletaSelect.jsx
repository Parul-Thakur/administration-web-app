import React, { useState, useEffect } from "react";
import {
  Box,
  Menu,
  MenuItem,
  Button,
  Typography,
  ListItemIcon,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LockIcon from "@mui/icons-material/Lock";

const CaletaSelect = ({ selectedApp, onAppSwitch }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [bgColor, setBgColor] = useState("transparent"); // Initial background color

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Handle scroll to change background color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setBgColor("var(--sidebar-color)"); // Change to sidebar color after scrolling
      } else {
        setBgColor("transparent"); // Revert to transparent before 60px
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle menu item click to switch apps
  const handleAppChange = (appType) => {
    onAppSwitch(appType);
    handleClose();
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "1rem",
        zIndex: "10",
        position: "fixed",
        width: "100%",
        backgroundColor: bgColor, // Dynamic background color
        boxShadow:
          bgColor === "var(--sidebar-color)"
            ? "0 4px 12px rgba(0, 0, 0, 0.1)"
            : "none", // Shadow when bg is sidebar color
        padding: ".5rem 1.5rem",
        top: 0,
        transition: "background-color 0.3s ease", // Smooth transition
      }}
    >
      <>
        <Button
          id="caleta-dropdown-button"
          aria-controls={open ? "caleta-dropdown-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          endIcon={<ArrowDropDownIcon />}
          sx={{
            backgroundColor: "transparent",
            textTransform: "none",
            color: bgColor === "white" ? "black" : "var(--text-head)", // Text color change based on bg
            "&:hover": {
              color: "var(--text-color)",
            },
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: 500 }}>
            {selectedApp === "caleta-core" ? "Caleta Core" : "Caleta Web"}
          </Typography>
        </Button>

        <Menu
          id="caleta-dropdown-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "caleta-dropdown-button",
          }}
          sx={{
            "& .MuiMenu-paper": {
              backgroundColor: "var(--color)",
              color: "var(--text-color)",
              padding: "10px",
            },
            "& .MuiMenu-list": {
              padding: 0,
            },
          }}
        >
          <MenuItem
            onClick={() => handleAppChange("caleta-core")}
            sx={{
              color: "var(--btn-bg)",
            }}
          >
            Caleta Core
          </MenuItem>

          <MenuItem
            onClick={() => handleAppChange("caleta-web")}
            sx={{
              color: selectedApp === "caleta-web" ? "var(--btn-bg)" : "inherit",
            }}
          >
            Caleta Web
          </MenuItem>
        </Menu>
      </>
    </Box>
  );
};

export default CaletaSelect;
