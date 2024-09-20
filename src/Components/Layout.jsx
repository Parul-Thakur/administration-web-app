import React, { useEffect, useState } from "react";
import { Box, CssBaseline } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Breadcrumb from "./Breadcrumb/Breadcrumb";
import RightSidebar from "./RightSidebar/RightSidebar";
import CaletaSelect from "./CaletaSelect";

function Layout() {
  const location = useLocation();
  const [open, setOpen] = useState(() => {
    const savedState = localStorage.getItem("sidebarOpen");
    return savedState ? JSON.parse(savedState) : true;
  });

  useEffect(() => {
    localStorage.setItem("sidebarOpen", JSON.stringify(open));
  }, [open]);

  const toggleDrawer = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  // Hide Breadcrumb on Dashboard page
  const showBreadcrumb = location.pathname !== "/dashboard";
  const sidebarWidth = open ? "15%" : "4%";
  const rightSidebarWidth = "4%";

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Sidebar toggleDrawer={toggleDrawer} open={open} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginLeft: "0rem",
          marginRight: "3%",
          marginTop: "0px",
        }}
      >
        {/* {showBreadcrumb && <Breadcrumb />} */}
        {/* CaletaSelect Component at the top */}
        <CaletaSelect />

        {/* Breadcrumb and page content */}
      
        <Outlet />
      </Box>

      <RightSidebar />
    </Box>
  );
}

export default Layout;
