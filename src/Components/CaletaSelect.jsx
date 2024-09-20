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

const CaletaSelect = () => {
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
        setBgColor("var(--sidebar-color)"); // Change to white after 100px scroll
      } else {
        setBgColor("transparent"); // Revert to transparent before 100px
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
          bgColor === "white" ? "0 4px 12px rgba(0, 0, 0, 0.1)" : "none", // Shadow when bg is white
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
            Caleta Core
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
            onClick={handleClose}
            sx={{
              color: "var(--btn-bg)",
            }}
          >
            Caleta Core
          </MenuItem>

          <MenuItem onClick={handleClose} disabled>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              Caleta Web
              <ListItemIcon sx={{ minWidth: "auto" }}>
                <LockIcon fontSize="small" />
              </ListItemIcon>
            </Box>
          </MenuItem>
        </Menu>
      </>
    </Box>
  );
};

export default CaletaSelect;
