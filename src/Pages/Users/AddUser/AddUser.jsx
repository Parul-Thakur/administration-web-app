import React from "react";
import UserForm from "../UserForm";
import { Divider, IconButton, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const AddUser = () => {
  const handleAddUser = (formData) => {
    console.log("User data submitted:", formData);
  };
  const tableVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/users/"); 
  };
  return (
    <>
      {" "}
      <Typography
        variant="h4"
        component="h4"
        gutterBottom
        style={{
          padding: 0,
          margin: "3rem 2rem 0rem",
          color: "var(--text-head)",
          fontWeight: 500,
          fontFamily: "var(--font-family)",
        }}
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
       <IconButton onClick={handleBack} disableRipple>
        <ArrowBackIcon
          sx={{ color: "var(--text-color)", margin: "2rem  0 0 5rem" }}
        />
      </IconButton>
      <motion.div
        className="main"
        variants={tableVariants}
        initial="hidden"
        animate="visible"
      >
        <UserForm isEditMode={false} onSubmit={handleAddUser} />
      </motion.div>
    </>
  );
};
export default AddUser;
