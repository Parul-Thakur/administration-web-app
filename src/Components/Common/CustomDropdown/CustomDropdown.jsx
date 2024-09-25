import React from "react";
import { Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function CustomDropdown({
  anchorEl,
  activeRow,
  rowIndex,
  onMenuClick,
  onClose,
  options,
}) {
  return (
    <div className="more-options">
      <MoreVertIcon onClick={onMenuClick} />
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl && activeRow === rowIndex)}
        onClose={onClose}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "var(--background-color)", // Custom background color
            margin: 0, // Remove margins (if any)
           paddingTop: 0,

          },
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={index}
            onClick={option.onClick}
            sx={{
              "&:hover": {
                backgroundColor: "var(--hover2)",
              },
              backgroundColor: "var(--background-color)",
              color: "var(--text-color)",
              padding: "4px 8px", // Adjust padding for MenuItem
              minHeight: "auto", // Remove default minimum height
              height: "auto", // Ensure height fits content
            }}
          >
            <ListItemIcon
              sx={{
                color: "var(--text-color)",
                minWidth: "30px", // Adjust icon padding
              }}
            >
              {option.icon}
            </ListItemIcon>
            <ListItemText
              primary={option.label}
              sx={{
                color: "var(--text-color)", // Text color
                margin: 0, // Remove margin
                padding: 0, // Ensure no padding
              }}
            />
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default CustomDropdown;
