import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container, Typography } from "@mui/material";
import NavbarMini from "../../Components/NavbarMini/NavbarMini";
import UserGroups from "./UserGroups";
import DeviceGroup from "./DeviceGroup";
import { useLocation } from "react-router-dom";

export default function Groups() {
  const location = useLocation();

  const isUserGroupPage = location.pathname === "/groups/user-groups";
  const isDeviceGroupPage = location.pathname === "/groups/device-groups";

  return (
    <>
      {" "}
      <Typography
        variant="h4"
        component="h4"
        gutterBottom
        style={{ padding: 0, margin: "4rem 2rem 0rem" }}
      >
        Groups
      </Typography>
      <NavbarMini />
      <div className="main">
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
      </div>
    </>
  );
}
