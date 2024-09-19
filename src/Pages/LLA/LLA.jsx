import React, { useState } from "react";
import {
  Toolbar,
  Typography,
  Box,
  Container,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import DescriptionIcon from "@mui/icons-material/Description";
import FeatureIcon from "@mui/icons-material/Star";
import AboutIcon from "@mui/icons-material/Info";
import About from "../About/About";
import LicenseInfo from "../Licence/LicenseInfo";
import LicenseFeature from "../Licence/LicenseFeature";
import LicenseDetails from "../Licence/LicenceDetails";

// Define the width of the internal drawer/sidebar
const internalDrawerWidth = 240;
const icons = {
  Overview: <InfoIcon sx={{ color: "var(--text-color)" }} />,
  Details: <DescriptionIcon sx={{ color: "var(--text-color)" }} />,
  Features: <FeatureIcon sx={{ color: "var(--text-color)" }} />,
  Summary: <AboutIcon sx={{ color: "var(--text-color)" }} />,
};
export default function LLA() {
  const [currentPage, setCurrentPage] = useState("License");

  // Function to render the selected component based on the current page
  const renderContent = () => {
    switch (currentPage) {
      case "Information1":
        return <LicenseInfo />;
      case "Features":
        return <LicenseFeature />;
      case "Details":
        return <LicenseDetails />;
      case "Summary":
        return <About />;
      default:
        return <LicenseInfo />;
    }
  };

  return (
    <>
      <Typography
        variant="h4"
        component="h4"
        gutterBottom
        style={{ padding: 0, margin: "4rem 2rem 0rem" }}
      >
        License
      </Typography>
      <Divider
        orientation="horizontal"
        flexItem
        sx={{
          margin: "0.5rem",
          backgroundColor: "var(--text-head)",
          opacity: "0.3",
        }}
      />

      <div className="main">
        <Container style={{ padding: 0, margin: "0 0 3rem" }}>
          <Box
            sx={{
              display: "flex",
              marginTop: "3rem",
              borderRadius: "1rem",
              boxShadow: "var(--box-shadow)",
            }}
          >
            {/* Internal Sidebar/Drawer */}
            <Drawer
              variant="permanent"
              sx={{
                width: internalDrawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                  width: internalDrawerWidth,
                  boxSizing: "border-box",
                  position: "relative",
                  backgroundColor: "var(--sidebar-color)",
                  color: "var(--text-color)",
                },
              }}
            >
              <Box sx={{ overflow: "auto" }}>
                <Typography
                  variant="h6"
                  sx={{
                    padding: "1rem",
                    fontWeight: "bold",
                    fontSize: ".7rem", // Adjust font size as needed
                    // textAlign: "left",
                    color: "var(--text-color)",
                  }}
                >
                  License
                </Typography>
                <List>
                  {["Overview", "Details", "Features"].map((text) => (
                    <ListItem
                      button
                      key={text}
                      onClick={() => setCurrentPage(text)}
                      sx={{
                        fontSize: ".8rem",
                        "&:hover": {
                          backgroundColor: "var(--hover)", // Hover color
                        },
                        padding: "0.5rem 1rem", // Adjust padding for ListItem
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        {icons[text]} {/* Render the corresponding icon */}
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography sx={{ fontSize: ".8rem" }}>
                            {text}
                          </Typography>
                        }
                        sx={{ marginLeft: "0.5rem" }} // Adjust margin to reduce space
                      />
                    </ListItem>
                  ))}

                  <Divider sx={{ margin: "1rem 0" }} />
                  <Box sx={{ marginTop: "1rem" }} />
                  <Typography
                    sx={{
                      padding: "0 0 1rem",
                      fontSize: ".7rem", // Small font for text
                      margin: "0.5rem 1rem",
                      color: "var(--text-color)",
                      fontWeight: "bold", // Add color if needed
                    }}
                  >
                    About
                  </Typography>
                  <ListItem
                    button
                    key="Summary"
                    onClick={() => setCurrentPage("Summary")}
                    sx={{
                      fontSize: ".8rem",
                      "&:hover": {
                        backgroundColor: "var(--hover)", // Hover color
                      },
                      padding: "0.5rem 1rem", // Adjust padding for ListItem
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      {icons["Summary"]}{" "}
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography sx={{ fontSize: ".8rem" }}>
                          Summary
                        </Typography>
                      }
                      sx={{ marginLeft: "0.5rem" }} // Adjust margin to reduce space
                    />
                  </ListItem>
                </List>
              </Box>
            </Drawer>

            {/* Main content area for LLA */}
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                p: 3,
                backgroundColor: "var(--color)",
                color: "var(--text-color)",
              }}
            >
              {renderContent()}
            </Box>
          </Box>
        </Container>
      </div>
    </>
  );
}
