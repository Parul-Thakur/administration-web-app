import React from "react";
import UserForm from "../UserForm";
import { Divider, Typography } from "@mui/material";

const AddUser = () => {
  const handleAddUser = (formData) => {
    console.log("User data submitted:", formData);
  };

  return (
    <>
      {" "}
      <Typography
        variant="h4"
        component="h4"
        gutterBottom
        style={{ padding: 0, margin: "4rem 2rem 0rem" }}
      >
        Users
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
      <div className="main">
        <UserForm isEditMode={false} onSubmit={handleAddUser} />
      </div>
    </>
  );
};
export default AddUser;
