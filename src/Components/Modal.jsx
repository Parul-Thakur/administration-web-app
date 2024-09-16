import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function Modal({ open, onClose, onConfirm, title, message }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          textAlign: "center",
          backgroundColor:"var(--modal-bg)",
          p: 2,
        },
      }}
    >
      <Box sx={{ textAlign: "center", mb: 2 }}>
        <IconButton
          disableRipple
          sx={{
            bgcolor: "var(--modal-select)",
            "&:hover": {
              bgcolor: "var(--hover)",
            },
            color: "var(--primary-color)",
          }}
        >
          <CheckCircleIcon sx={{ fontSize: 40 }} />
        </IconButton>
      </Box>
      <DialogTitle sx={{ fontWeight: "bold" }}>{title}</DialogTitle>
      <DialogContent>
        <Typography variant="body1" sx={{ mb: 4, color: "var(--text-head)", }}>
          {message}
        </Typography>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center" }}>
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{
            borderColor: "var(--text-head)",
            color: "var(--text-head)",
            "&:hover": {
             
              backgroundColor: "var(--modal-select)",
              color: "var(--color)",
            },
            mr: 2,
            width: "45%",
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            onConfirm();
            onClose();
          }}
          variant="contained"
          sx={{
            bgcolor: "var(--modal-select)",
            color: "var(--color)",
            "&:hover": {
              bgcolor: "var(--secondary-color)",
            },
            width: "45%",
          }}
        >
          Select
        </Button>
      </DialogActions>
    </Dialog>
  );
}
