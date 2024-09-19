import React from 'react';
import { Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function CustomDropdown({ anchorEl, activeRow, rowIndex, onMenuClick, onClose, options }) {
  return (
    <div className="more-options">
      <MoreVertIcon onClick={onMenuClick} />
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl && activeRow === rowIndex)}
        onClose={onClose}
        // Custom styles for the Menu background
        sx={{
          '& .MuiPaper-root': {
            backgroundColor: 'var(--background-color)', // Your custom background color
          },
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={index}
            onClick={option.onClick}
            // Custom styles for MenuItem background
            sx={{
              '&:hover': {
                backgroundColor: 'var(--hover2)', // Your custom hover color
              },
              backgroundColor: 'var(--background-color)', // Default background color
              color: 'var(--text-color)', // Text color
            }}
          >
            <ListItemIcon
              sx={{
                color: 'var(--text-color)', // Icon color
              }}
            >
              {option.icon}
            </ListItemIcon>
            <ListItemText
              primary={option.label}
              sx={{
                color: 'var(--text-color)', // Text color
              }}
            />
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default CustomDropdown;
