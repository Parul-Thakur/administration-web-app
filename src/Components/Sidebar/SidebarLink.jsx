import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { motion } from "framer-motion";
import "./Sidebar.css";

const SidebarLink = ({ icon, text, isActive, open }) => {
  return (
    <ListItem
      component={motion.div}
      className="blob-list-item"
      sx={{
        color: isActive ? "var(--btn-bg)" : "var(--text-grey)",
        fontSize: "1rem",
        backgroundColor: isActive ? "var(--hover)" : "transparent",
        borderRadius: isActive ? "50px" : "0",
        fontWeight: isActive ? "bold" : "normal",
        transition: "background-color 0.3s, transform 0.3s, border-radius 0.3s",
        overflow: "hidden",
        position: "relative",
        "&:hover": {
          backgroundColor: "var(--hover)",
          color: "var(--btn-bg)",
          borderRadius: "50px",
          transform: "scale(1.05)",
          fontWeight: "bold",
        },
      }}
    >
      <span className="blob-btn__inner">
        <span className="blob-btn__blobs">
          <span className="blob-btn__blob"></span>
          <span className="blob-btn__blob"></span>
          <span className="blob-btn__blob"></span>
          <span className="blob-btn__blob"></span>
        </span>
      </span>

      <ListItemIcon
        sx={{
          color: isActive ? "var(--btn-bg)" : "var(--text-grey)",
          fontSize: "1rem",
        }}
      >
        {icon}
      </ListItemIcon>
      {open && (
        <ListItemText
          primary={text}
          primaryTypographyProps={{
            sx: {
              fontSize: "0.9rem",
              color: isActive ? "var(--btn-bg)" : "var(--text-grey)",
              padding: "0",
            },
          }}
        />
      )}
    </ListItem>
  );
};

export default SidebarLink;
