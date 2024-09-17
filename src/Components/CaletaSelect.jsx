import React, { useState } from "react";
import {
  Box,
  Menu,
  MenuItem,
  Button,
  Typography,
  ListItemIcon,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { motion } from "framer-motion";
import LockIcon from "@mui/icons-material/Lock";
const CaletaSelect = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start", 
        padding: "1rem",
        alignItems: "center",
        gap: "1rem",
        zIndex: "1",
        position: "fixed",
      }}
    >
      <>
        <Button
          id="caleta-dropdown-button"
          aria-controls={open ? "caleta-dropdown-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          endIcon={<ArrowDropDownIcon />} // Dropdown arrow icon
          sx={{
            backgroundColor: "transparent",
            textTransform: "none",
            "&:hover": {
              color: "var(--text-head)", // Hover effect
            },
            color: "var(--text-color)", // Color for text
          }}
        >
          <Typography variant="body1">Caleta Core</Typography>
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
              backgroundColor: "var(--color)", // Custom background color
              color: "var(--text-color)", // Custom text color
              padding: "10px", // Remove padding from the menu
            },
            "& .MuiMenu-list": {
              padding: 0, // Remove padding from the list items container
            },
          }}
        >
          <MenuItem
            onClick={handleClose}
            sx={{
              color: "var(--btn-bg)", // Selected background color
            }}
          >
            Caleta Core
          </MenuItem>

          {/* Caleta Web with Lock Icon */}
          <MenuItem onClick={handleClose} disabled>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px", // Adjust the gap between the text and the icon
              }}
            >
              Caleta Web
              <ListItemIcon sx={{ minWidth: "auto" }}>
                <LockIcon fontSize="xs" />
              </ListItemIcon>
            </Box>
          </MenuItem>
        </Menu>
      </>
    </Box>
  );
};

export default CaletaSelect;
