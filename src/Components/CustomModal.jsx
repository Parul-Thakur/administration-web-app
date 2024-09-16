import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from "@mui/material";

function CustomModal({ open, handleClose, icon: Icon, color, title, message, buttonText }) {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogTitle>
        <Typography 
          variant="h6" 
          sx={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "0.5rem", 
            color: color || "black" // Default to black if color is not provided
          }}
        >
          {Icon && <Icon />} {title}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1" sx={{ color: "var(--text-color)" }}>
          {message}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" variant="contained">
          {buttonText || "Close"} {/* Default to "Close" if buttonText is not provided */}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CustomModal;
