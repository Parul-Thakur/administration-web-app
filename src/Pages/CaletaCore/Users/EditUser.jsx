import React, { useEffect, useState } from "react";
import UserForm from "./UserForm";
import UserData from "./UserData";
import { useParams } from "react-router-dom";
import NavbarMini from "../../../Components/Common/NavbarMini/NavbarMini";
import { useNavigate } from "react-router-dom";
import { IconButton, Typography, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { motion } from "framer-motion";

const EditUser = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const id = parseInt(userId, 10);
    const user = UserData.find((user) => user.id === id);
    setUserData(user);
  }, [userId]);

  const handleUpdateUser = (formData) => {
    const updatedUsers = UserData.map((user) =>
      user.id === userData.id ? { ...user, ...formData } : user
    );
    console.log("Updated user data:", updatedUsers);
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
      <NavbarMini />
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
        {userData ? (
          <UserForm
            isEditMode={true}
            existingData={userData} // Pass the specific user data to the form
            onSubmit={handleUpdateUser}
          />
        ) : (
          <div>Loading...</div>
        )}
      </motion.div>
    </>
  );
};

export default EditUser;
