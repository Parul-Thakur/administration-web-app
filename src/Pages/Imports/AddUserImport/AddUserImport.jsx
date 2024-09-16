import React from "react";
import UserImportForm from "../UserImportForm";
import { Divider, Typography } from "@mui/material";

export default function AddUserImport() {
  const handleAddUser = (formData) => {
    console.log("User data submitted:", formData);
  };

  return (
    <>
      <Typography
        variant="h4"
        component="h4"
        gutterBottom
        style={{ padding: 0, margin: "4rem 2rem 0rem" }}
      >
        User Imports
      </Typography>
      <Divider
        orientation="horizontal"
        flexItem
        sx={{
          margin: " 0.5rem",
          backgroundColor: "var(--text-head)",
          opacity: "0.3",
        }}
      />
      <div className="reportMain">
        <UserImportForm isEditMode={false} onSubmit={handleAddUser} />
      </div>
    </>
  );
}
