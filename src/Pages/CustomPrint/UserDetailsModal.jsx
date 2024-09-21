// src/components/UserDetailsModal.js
import React from "react";
import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CustomTable from "../../Components/CustomTable/CustomTable";

const UserDetailsModal = ({ open, onClose, data, columns }) => {
  if (!open) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      sx={{
        "& .MuiDialog-paper": {
          backgroundColor: "var(--background-color)", 
        },
      }}
    >
      <DialogTitle
        sx={{
          backgroundColor: "var(--background-color)", 
          color: "var(--text-color)", 
        }}
      >
        List of all delegated users
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
          style={{ position: "absolute", right: "1rem", top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent
        dividers
        sx={{
          backgroundColor: "var(--background-color)", 
        }}
      >
        <CustomTable
          columns={columns}
          data={data}
          localStorageKey="modalData"
          isCustomModalPage={true}
        />
      </DialogContent>
    </Dialog>
  );
};

export default UserDetailsModal;
