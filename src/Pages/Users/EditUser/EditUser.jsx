import React, { useEffect, useState } from "react";
import UserForm from "../UserForm";
import UserData from "../Users/UserData";
import { useParams } from "react-router-dom";
import NavbarMini from "../../../Components/NavbarMini/NavbarMini";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";

const EditUser = () => {
  const { userId } = useParams(); // Extract userId from the route parameters
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Convert userId to a number before searching
    const id = parseInt(userId, 10);
    // Fetch user data based on userId from the local file
    const user = UserData.find((user) => user.id === id);
    setUserData(user);
  }, [userId]);

  const handleUpdateUser = (formData) => {
    // Update user data locally
    const updatedUsers = UserData.map((user) =>
      user.id === userData.id ? { ...user, ...formData } : user
    );

    // Log the updated data (you may want to save this back to a file or state in a real app)
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
  return (
    <>
      <Typography
        variant="h4"
        component="h4"
        gutterBottom
        style={{ padding: 0, margin: "4rem 2rem 2rem" }}
      >
        Users
      </Typography>
      <NavbarMini />

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
