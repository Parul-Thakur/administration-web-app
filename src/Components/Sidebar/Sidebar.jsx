import React, { useRef, useEffect, useState } from "react";
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Collapse,
  useMediaQuery,
  IconButton,
  Divider,
} from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ApiIcon from "@mui/icons-material/Api";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import DnsIcon from "@mui/icons-material/Dns";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import DevicesIcon from "@mui/icons-material/Devices";
import QueueIcon from "@mui/icons-material/Queue";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import Groups3Icon from "@mui/icons-material/Groups3";
import SourceIcon from "@mui/icons-material/Source";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import InputIcon from "@mui/icons-material/Input";
import SummarizeIcon from "@mui/icons-material/Summarize";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import AssignmentIcon from "@mui/icons-material/Assignment";
import EuroIcon from "@mui/icons-material/Euro";
import PaymentsIcon from "@mui/icons-material/Payments";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import SettingsIcon from "@mui/icons-material/Settings";
import KeyIcon from "@mui/icons-material/Key";
import ListIcon from "@mui/icons-material/List";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import InfoIcon from "@mui/icons-material/Info";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import "./Sidebar.css";
import logo from "../../Images/caleta-logo-removebg-preview.png";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css'; 

const Sidebar = ({ open, toggleDrawer }) => {
  const [openAdmin, setOpenAdmin] = useState(
    () => JSON.parse(localStorage.getItem("openAdmin")) || false
  );
  const [openSystem, setOpenSystem] = useState(
    () => JSON.parse(localStorage.getItem("openSystem")) || false
  );

  // Function to toggle the Admin dropdown and save its state
  const toggleAdmin = () => {
    setOpenAdmin((prevState) => {
      const newState = !prevState;
      localStorage.setItem("openAdmin", JSON.stringify(newState)); // Save to localStorage
      return newState;
    });
  };

  // Function to toggle the System dropdown and save its state
  const toggleSystem = () => {
    setOpenSystem((prevState) => {
      const newState = !prevState;
      localStorage.setItem("openSystem", JSON.stringify(newState)); // Save to localStorage
      return newState;
    });
  };

  // Ensure you can see these states persist
  useEffect(() => {
    const savedOpenAdmin = JSON.parse(localStorage.getItem("openAdmin"));
    const savedOpenSystem = JSON.parse(localStorage.getItem("openSystem"));

    if (savedOpenAdmin !== null) {
      setOpenAdmin(savedOpenAdmin);
    }
    if (savedOpenSystem !== null) {
      setOpenSystem(savedOpenSystem);
    }
  }, []);
  const sidebarRef = useRef(null);
  const location = useLocation();

  const is1440pxOrSmaller = useMediaQuery("(max-width: 1440px)");
  const is1024pxOrSmaller = useMediaQuery("(max-width: 1024px)");

  useEffect(() => {
    const handleScroll = () => {
      if (sidebarRef.current) {
        const scrollTop = sidebarRef.current.scrollTop;
        localStorage.setItem("sidebarScrollPosition", scrollTop);
      }
    };

    if (sidebarRef.current) {
      const storedScrollTop = localStorage.getItem("sidebarScrollPosition");
      if (storedScrollTop) {
        sidebarRef.current.scrollTop = parseInt(storedScrollTop, 10);
      }

      sidebarRef.current.addEventListener("scroll", handleScroll);

      return () => {
        if (sidebarRef.current) {
          sidebarRef.current.removeEventListener("scroll", handleScroll);
        }
      };
    }
  }, [location.pathname]);

  return (
    <>
      <Drawer
        variant={is1024pxOrSmaller ? "temporary" : "permanent"}
        anchor="left"
        open={open}
        // onClose={toggleSidebar}
        sx={{
          width: open ? (is1440pxOrSmaller ? "60px" : "15%") : "4%",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: open ? (is1440pxOrSmaller ? "60px" : "15%") : "4%",
            boxSizing: "border-box",
            transition: "width 0.3s",

            backgroundColor: "var(--sidebar-color)",
          },
          transition: "width 0.3s ease-in-out",
        }}
      >
       <SimpleBar
        style={{
          height: '100%',
          maxHeight: '100vh', 
         
        }}
        className="custom-scrollbar" // Optional: Add a custom class
      >
        <Box
          ref={sidebarRef}
          sx={{
            height: "100%",
            overflowY: "auto",
            display: 'flex',
            flexDirection: 'column',
            // scrollbarWidth: "thin",
            // scrollbarColor: "var(--hover) var(--sidebar-color)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: open ? "1rem .5rem" : "1rem",
              marginBottom: "1rem",
              gap: open ? "1rem" : "0",
              justifyContent: open ? "space-between" : "center",
              flexDirection: open ? "row" : "column",
            }}
          >
            {open && (
              <>
                <ListItemIcon sx={{ minWidth: "unset", marginRight: "0.5rem" }}>
                  <img src={logo} alt="logo" style={{ width: "3rem" }} />
                </ListItemIcon>

                <ListItemText
                  primary="Caleta"
                  primaryTypographyProps={{
                    sx: {
                      color: "var(--text-head)",
                      fontSize: "2rem",
                      fontWeight: "bold",
                      margin: "0 2rem 0 0",
                    },
                  }}
                />
              </>
            )}

            {!open && (
              <ListItemIcon sx={{ minWidth: "unset" }}>
                <img src={logo} alt="logo" style={{ width: "2rem" }} />
              </ListItemIcon>
            )}

            <IconButton
              aria-label="toggle drawer"
              edge="start"
              onClick={toggleDrawer}
              sx={{
                marginLeft: open ? "2rem" : "unset",

                color: "var(--btn-bg)",
                borderRadius: "10px",
              }}
            >
              {open ? <NavigateBeforeIcon /> : <NavigateNextIcon />}{" "}
              {/* Change icon based on open state */}
            </IconButton>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: open ? "row" : "column", // Set row when open, column when closed
            }}
          >
            <NavLink to="/dashboard" style={{ textDecoration: "none" }}>
              {({ isActive }) => (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: open ? "0.5rem 2rem" : "0.5rem 1rem 0",
                    backgroundColor: isActive
                      ? "var(--hover)"
                      : "var(--drop-bg)",
                    borderRadius: "20px",
                    fontWeight: isActive ? "bold" : "normal",
                    color: "var(--text-head)",
                    gap: open ? "1rem" : "0",
                    flexDirection: open ? "row" : "column", // Change direction based on sidebar state
                    textAlign: "center",
                  }}
                >
                  <SpaceDashboardIcon
                    sx={{
                      color: "inherit",
                      marginBottom: open ? "0" : "0.5rem", // Space when closed
                    }}
                  />
                  {open && !is1440pxOrSmaller && (
                    <Typography
                      sx={{
                        fontSize: "1rem",
                        fontWeight: "bold",
                        display: { xs: "none", sm: "block" },
                      }}
                    >
                      Parul
                    </Typography>
                  )}
                </Box>
              )}
            </NavLink>

            <Divider
              orientation="vertical"
              flexItem
              sx={{
                margin: "0 0.5rem",
                backgroundColor: "var(--text-head)",
                opacity: "0.3",
              }}
            />

            <NavLink to="/settings" style={{ textDecoration: "none" }}>
              {({ isActive }) => (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: open ? "0" : "0.5rem",
                    marginBottom: open ? "0" : "0.5rem",
                    padding: "0.5rem 1rem",
                    backgroundColor: open
                      ? isActive
                        ? "var(--hover)"
                        : "transparent"
                      : isActive
                      ? "var(--hover)"
                      : "var(--drop-bg)",
                    borderRadius: "20px",
                    fontWeight: isActive ? "bold" : "normal",
                    gap: open ? "1rem" : "0",
                    flexDirection: open ? "row" : "column",
                    textAlign: "center",
                  }}
                >
                  <SettingsIcon
                    sx={{
                      color: "var(--text-head)",
                    }}
                  />
                </Box>
              )}
            </NavLink>
          </Box>

          <List
            sx={{
              backgroundColor: "var(--drop-bg)",
              padding: "0",
              borderRadius: "0px 20px 0px 20px",
              margin: open ? "2rem .8rem" : "1rem 0",
            }}
            className="sidebarLinks"
          >
            {/* Administration Tools Dropdown */}
            <ListItem button onClick={toggleAdmin}>
              {!open && (
                <ListItemIcon
                  sx={{
                    minWidth: "auto",
                    color: "var(--text-head)",
                    justifyContent: "center",
                    fontSize: ".7rem",
                  }}
                >
                  <AdminPanelSettingsIcon />
                </ListItemIcon>
              )}
              {open && (
                <ListItemText
                  primary="Administration Tools"
                  primaryTypographyProps={{
                    sx: {
                      fontSize: ".8rem",
                      color: "var(--text-head)",
                      display: { xs: "none", sm: "block" },
                    },
                  }}
                />
              )}
              {open ? (
                <IconButton sx={{ color: "var(--text-head)" }}>
                  {openAdmin ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
              ) : (
                ""
              )}
            </ListItem>
            <Collapse in={openAdmin} timeout="auto">
              {[
                { text: "Servers", icon: <DnsIcon />, path: "/server" },
                { text: "Users", icon: <PeopleAltIcon />, path: "/users" },
                { text: "Devices", icon: <DevicesIcon />, path: "/devices" },
                { text: "Print Queues", icon: <QueueIcon />, path: "/queues" },
                {
                  text: "Departments",
                  icon: <CorporateFareIcon />,
                  path: "/departments",
                },
                {
                  text: "Groups",
                  icon: <Groups3Icon />,
                  path: "/groups/user-groups",
                },
                {
                  text: "Cost Codes",
                  icon: <SourceIcon />,
                  path: "/cost-codes",
                },
                {
                  text: "Organizational Unit",
                  icon: <Diversity1Icon />,
                  path: "/organizational-unit",
                },
                { text: "Imports", icon: <InputIcon />, path: "/user-imports" },
                {
                  text: "Reports",
                  icon: <SummarizeIcon />,
                  path: "/reports/scheduled-reports",
                },
                {
                  text: "Statistics",
                  icon: <QueryStatsIcon />,
                  path: "/statistics",
                },
                {
                  text: "Email Template",
                  icon: <AssignmentIcon />,
                  path: "/email-templates",
                },
                {
                  text: "Pricing",
                  icon: <EuroIcon />,
                  path: "/pricing-configuration",
                },
                { text: "Cashier", icon: <PaymentsIcon />, path: "/cashier" },
                {
                  text: "Custom Print",
                  icon: <LocalPrintshopIcon />,
                  path: "/custom-print-page",
                },
              ].map(({ text, icon, path }) => (
                <NavLink
                  to={path}
                  key={text}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  style={{ textDecoration: "none" }}
                >
                  {({ isActive }) => (
                    <ListItem
                      sx={{
                        color: isActive
                          ? "var(--text-head)"
                          : "var(--text-grey)",
                        backgroundColor: isActive
                          ? "var(--hover)"
                          : "transparent",
                        borderRadius: isActive ? "10px" : "0",
                        fontWeight: "bold",
                        gap: "1rem",
                        transition:
                          "background-color 0.3s, transform 0.3s, border-radius 0.3s",
                        "&:hover": {
                          backgroundColor: "var(--hover)",
                          borderRadius: "10px",
                          transform: "scale(1.05)",
                          fontWeight: "bold",
                        },
                        padding: ".5rem",
                        justifyContent:
                          openAdmin && !is1440pxOrSmaller
                            ? "center"
                            : "flex-start",
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: "auto",
                          color: "inherit",
                          justifyContent: "center",
                          fontSize: ".7rem",
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      {open && !is1440pxOrSmaller && (
                        <ListItemText
                          primary={text}
                          primaryTypographyProps={{
                            sx: {
                              fontSize: ".7rem",
                              display: { xs: "none", sm: "block" },
                            },
                          }}
                        />
                      )}
                    </ListItem>
                  )}
                </NavLink>
              ))}
            </Collapse>
            <hr
              style={{
                borderColor: "var(--text-head)",
                backgroundColor: "var(--text-head)",
                borderWidth: "1px",
                width: "100%",
                borderStyle: "solid",
                opacity: 0.1,
              }}
            />
            {/* System Dropdown */}
            <ListItem button onClick={toggleSystem}>
              {!open && (
                <ListItemIcon
                  sx={{
                    minWidth: "auto",
                    color: "var(--text-head)",
                    justifyContent: "center",
                    fontSize: ".7rem",
                  }}
                >
                  <SettingsSystemDaydreamIcon />
                </ListItemIcon>
              )}
              {open && (
                <ListItemText
                  primary="System"
                  primaryTypographyProps={{
                    sx: {
                      fontSize: ".8rem",
                      color: "var(--text-head)",
                      display: { xs: "none", sm: "block" },
                    },
                  }}
                />
              )}
              {open ? (
                <IconButton sx={{ color: "var(--text-head)" }}>
                  {openSystem ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
              ) : (
                ""
              )}
            </ListItem>
            <Collapse in={openSystem} timeout="auto">
              {[
                { text: "License & more", icon: <InfoIcon />, path: "/lla" },
                {
                  text: "Logs",
                  icon: <BackupTableIcon />,
                  path: "/core-application-logs",
                },
                { text: "API", icon: <ApiIcon />, path: "/api" },
              ].map(({ text, icon, path }) => (
                <NavLink
                  to={path}
                  key={text}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  style={{ textDecoration: "none" }}
                >
                  {({ isActive }) => (
                    <ListItem
                      sx={{
                        color: isActive
                          ? "var(--text-head)"
                          : "var(--text-grey)",
                        backgroundColor: isActive
                          ? "var(--hover)"
                          : "transparent",
                        borderRadius: isActive ? "10px" : "0",
                        fontWeight: "bold",
                        gap: "1rem",
                        transition:
                          "background-color 0.3s, transform 0.3s, border-radius 0.3s",
                        "&:hover": {
                          backgroundColor: "var(--hover)",
                          borderRadius: "10px",
                          transform: "scale(1.05)",
                          fontWeight: "bold",
                        },
                        padding: "0.5rem",
                        justifyContent:
                          openSystem && !is1440pxOrSmaller
                            ? "center"
                            : "flex-start",
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: "auto",
                          color: "inherit",
                          justifyContent: "center",
                          fontSize: ".7rem",
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      {open && !is1440pxOrSmaller && (
                        <ListItemText
                          primary={text}
                          primaryTypographyProps={{
                            sx: {
                              fontSize: ".7rem",
                              display: { xs: "none", sm: "block" },
                            },
                          }}
                        />
                      )}
                    </ListItem>
                  )}
                </NavLink>
              ))}
            </Collapse>
          </List>
        </Box>
        </SimpleBar>
      </Drawer>
    </>
  );
};

export default Sidebar;
