import React, { useEffect, useState } from "react";
import { Box, CssBaseline } from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import RightSidebar from "./RightSidebar/RightSidebar";
import CaletaSelect from "./CaletaSelect";

function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [open, setOpen] = useState(() => {
    const savedState = localStorage.getItem("sidebarOpen");
    return savedState ? JSON.parse(savedState) : true;
  });

  const [selectedApp, setSelectedApp] = useState(() => {
    const savedApp = localStorage.getItem("selectedApp");
    return savedApp || "caleta-core"; // Default to Caleta Core
  });

  // Update localStorage when sidebar open state changes
  useEffect(() => {
    localStorage.setItem("sidebarOpen", JSON.stringify(open));
  }, [open]);

  // Update localStorage when app selection changes
  useEffect(() => {
    localStorage.setItem("selectedApp", selectedApp);
  }, [selectedApp]);

  // Route protection based on selectedApp
  useEffect(() => {
    const isWebRoute = location.pathname.startsWith("/web");
    const isCoreRoute = location.pathname.startsWith("/dashboard");

    // Prevent access to Caleta Web routes if Caleta Core is selected
    if (selectedApp === "caleta-core" && isWebRoute) {
      navigate("/dashboard");
    }

    // Prevent access to Caleta Core routes if Caleta Web is selected
    if (selectedApp === "caleta-web" && isCoreRoute) {
      navigate("/web/web-setting");
    }
  }, [location.pathname, selectedApp, navigate]);

  // Toggle sidebar drawer
  const toggleDrawer = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  // Function to handle app switch
  const handleAppSwitch = (appType) => {
    setSelectedApp(appType);

    // Redirect to the respective dashboard when app is switched
    if (appType === "caleta-core") {
      navigate("/dashboard");
    } else {
      navigate("/web/web-setting");
    }
  };

  const sidebarWidth = open ? "15%" : "4%";

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Sidebar toggleDrawer={toggleDrawer} open={open} selectedApp={selectedApp} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginLeft: "0rem",
          marginRight: "3%",
          marginTop: "0px",
        }}
      >
        {/* CaletaSelect Component at the top */}
        <CaletaSelect selectedApp={selectedApp} onAppSwitch={handleAppSwitch} />

        {/* Render page content (routes) */}
        <Outlet />
      </Box>

      <RightSidebar />
    </Box>
  );
}

export default Layout;
