import React, { useEffect, useState } from "react";
import UserImportForm from "./UserImportForm";
import { userImportData } from "./ImportData";
import { useParams } from "react-router-dom";
import NavbarMini from "../../../Components/Common/NavbarMini/NavbarMini";
import { Divider, Typography } from "@mui/material";
import { motion } from "framer-motion";
export default function EditUserImport() {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const id = parseInt(userId, 10);
    const user = userImportData.find((user) => user.id === id);
    setUserData(user);
  }, [userId]);

  const handleUpdateUser = (formData) => {
    const updatedUsers = userImportData.map((user) =>
      user.id === userData.id ? { ...user, ...formData } : user
    );
    console.log("Updated user data:", updatedUsers);
  };
  const tableVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
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
      <motion.div
        className="reportMain"
        variants={tableVariants}
        initial="hidden"
        animate="visible"
      >
        {userData ? (
          <UserImportForm
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
}
