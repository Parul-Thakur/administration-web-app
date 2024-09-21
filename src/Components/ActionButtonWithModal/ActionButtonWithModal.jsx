import React from "react";
import { Box, Button } from "@mui/material";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import SaveModal from "../SaveModal";
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';

export default function ActionButtonWithModal({
  isEditMode,
  isModalOpen,
  handleSubmit,
  handleClose,
  updateText = updateText, 
  addText = addText, 
  icon: Icon = null 
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "right",
        // padding: " 2rem 0 1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "right",
          // padding: "0 2rem",
        }}
      >
        <Button
          // variant="outlined"
          sx={{
            fontSize: "0.8rem",
            color: "var(--text-color)",
            padding: "0.5rem 1.5rem",
            transition: "transform 0.2s ease",
            borderRadius: "1rem",
            "&:hover": {
              backgroundColor: "var(--hover3)", // Hover effect
             
            },
          }}
          onClick={handleSubmit}
        >
          {isEditMode ? (
            <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            {Icon && <Icon />} {updateText}
            </Box>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            {Icon && <Icon />}
              {addText}
            </Box>
          )}
        </Button>
      </Box>
      <SaveModal
        isOpen={isModalOpen}
        onClose={handleClose}
        modalTitle={isEditMode ? "Confirm Update" : "Confirm Addition"}
        modalContent={
          isEditMode
            ? "Are you sure you want to update this item? Please ensure the changes are correct before proceeding."
            : "Are you sure you want to add this item? Please review the details before confirming."
        }
        pageType={isEditMode ? "edit" : "add"}
        isSettings={false}
        isError={false}
      />
    </Box>
  );
}
