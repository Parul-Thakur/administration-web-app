import React from "react";
import ReportForm from "./ReportForm";
import { Divider, Typography } from "@mui/material";

export default function AddReports() {
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
        Report
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
        {/* <NavbarMini /> */}
        <ReportForm isEditMode={false} onSubmit={handleAddUser} />
      </div>
    </>
  );
}
