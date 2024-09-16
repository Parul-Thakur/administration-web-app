import React from "react";

import DeviceImportForm from "../DeviceImportForm";
import { Divider, Typography } from "@mui/material";

export default function AddDeviceImport() {
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
        Device Imports
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
        <DeviceImportForm isEditMode={false} onSubmit={handleAddUser} />
      </div>
    </>
  );
}
