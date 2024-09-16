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
      >
        {options.map((option, index) => (
          <MenuItem key={index} onClick={option.onClick}>
            <ListItemIcon>{option.icon}</ListItemIcon>
            <ListItemText primary={option.label} />
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default CustomDropdown;
