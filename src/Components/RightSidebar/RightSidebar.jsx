import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  IconButton,
  Tooltip,
  tooltipClasses,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import LogoutIcon from "@mui/icons-material/Logout";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "../../utils/ThemeContext";
import { styled } from "@mui/system";

// Custom Tooltip with custom background color and text color
const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "var(--text-head)", // Custom background color
    color: "var(--btn-text)", // Custom text color
    fontSize: "0.7rem", // Custom font size
    borderRadius: "5px", // Rounded corners
    padding: "10px 15px", // Padding inside the tooltip
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
  },
}));

const RightSidebar = () => {
  const { toggleTheme, theme } = useTheme();

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    window.location.href = "/";
  };

  const userEmail = localStorage.getItem("userEmail");

  // Extract the username from the email and capitalize it
  const userName = userEmail
    ? userEmail
        .replace(/@gmail\.com$/, "")
        .replace(/\b\w/g, (char) => char.toUpperCase())
    : "Guest";

  return (
    <Box
      sx={{
        position: "fixed",
        right: 0,
        top: 0,
        width: "70px", // Sidebar width for icons only
        height: "100%",
        backgroundColor: "var(--sidebar-color)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", // Space between top and bottom items
        padding: "1rem 0",
        zIndex: (theme) => theme.zIndex.drawer + 2,
        alignItems: "center", // Center the icons horizontally
      }}
    >
      <List
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Ensure list items are centered
          padding: 0,
        }}
      >
        <CustomTooltip
          title={
            <>
              {userName}
              <br />
              {userEmail}
            </>
          }
          placement="left"
        >
          <ListItem
            button
            sx={{
              justifyContent: "center",
              padding: "0.5rem 0", // Adjust padding for better centering
            }}
          >
            <ListItemIcon
              sx={{
                color: "var(--text-head)",
                minWidth: "unset", // Remove default minWidth to allow centering
              }}
            >
              <PersonIcon />
            </ListItemIcon>
          </ListItem>
        </CustomTooltip>

        <CustomTooltip title="Logout" placement="left">
          <ListItem
            button
            onClick={handleLogout}
            sx={{
              justifyContent: "center",
              padding: "0.5rem 0", // Adjust padding for better centering
            }}
          >
            <ListItemIcon
              sx={{
                color: "var(--text-head)",
                minWidth: "unset", // Remove default minWidth to allow centering
              }}
            >
              <LogoutIcon />
            </ListItemIcon>
          </ListItem>
        </CustomTooltip>
        <CustomTooltip title="Privacy Policy" placement="left">
          <ListItem
            button
            sx={{
              justifyContent: "center",
              padding: "0.5rem 0", // Adjust padding for better centering
            }}
          >
            <ListItemIcon
              sx={{
                color: "var(--text-head)",
                minWidth: "unset", // Remove default minWidth to allow centering
              }}
            >
              <PrivacyTipIcon />
            </ListItemIcon>
          </ListItem>
        </CustomTooltip>
      </List>

      <CustomTooltip title="Toggle Theme" placement="left">
        <IconButton
          sx={{
            color: "var(--text-head)",
            marginBottom: "1rem", // Add some margin at the bottom for spacing
          }}
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
      </CustomTooltip>
    </Box>
  );
};

export default RightSidebar;
