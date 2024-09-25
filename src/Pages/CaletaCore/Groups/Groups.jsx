import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container, Typography } from "@mui/material";
import NavbarMini from "../../../Components/Common/NavbarMini/NavbarMini";
import UserGroups from "./UserGroups";
import DeviceGroup from "./DeviceGroup";
import { useLocation } from "react-router-dom";

export default function Groups() {
  const location = useLocation();

  const isUserGroupPage = location.pathname === "/groups/user-groups";
  const isDeviceGroupPage = location.pathname === "/groups/device-groups";
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
        Groups
      </Typography>
      <NavbarMini />
      <motion.div
        className="main"
        variants={tableVariants}
        initial="hidden"
        animate="visible"
      >
        <Container
          // component={Paper}
          elevation={3}
          style={{ padding: 0, maxWidth: "95%", margin: "3rem 0" }}
        >
          {isUserGroupPage && (
            <>
              <UserGroups />
            </>
          )}
          {isDeviceGroupPage && (
            <>
              <DeviceGroup />
            </>
          )}
        </Container>
      </motion.div>
    </>
  );
}
