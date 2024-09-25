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
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import TuneIcon from "@mui/icons-material/Tune";
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
import logo from "../../../Images/core/caleta-logo-removebg-preview.png";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

const Sidebar = ({ open, toggleDrawer, selectedApp }) => {
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
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
  };
  const isDashboardActive = location.pathname === "/dashboard";
  const isSettingsActive = location.pathname === "/settings";

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
            height: "100%",
            maxHeight: "100vh",
          }}
          className="custom-scrollbar" // Optional: Add a custom class
        >
          <Box
            ref={sidebarRef}
            sx={{
              height: "100%",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              // scrollbarWidth: "thin",
              // scrollbarColor: "var(--hover) var(--sidebar-color)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                padding: open ? "0rem .8rem " : "0.5rem 0 1rem",

                gap: open ? ".5rem" : "0",
                justifyContent: open ? "space-between" : "center",
                flexDirection: open ? "row" : "column",
              }}
            >
              {open && (
                <>
                  <ListItemIcon
                    sx={{ minWidth: "unset" }}
                    onClick={
                      selectedApp === "caleta-core"
                        ? handleLogoClick
                        : undefined
                    }
                    style={{ cursor: "pointer" }}
                  >
                    <img src={logo} alt="logo" style={{ width: "2rem" }} />
                  </ListItemIcon>

                  <ListItemText
                    primary="Caleta"
                    primaryTypographyProps={{
                      sx: {
                        color: "var(--text-color)",
                        fontSize: "1.5rem",
                        fontWeight: 700,
                      },
                    }}
                  />
                </>
              )}

              {!open && (
                <ListItemIcon
                  sx={{ minWidth: "unset" }}
                  onClick={handleLogoClick}
                  style={{ cursor: "pointer" }}
                >
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
            <Divider
              orientation="horizontal"
              flexItem
              sx={{
                margin: " 0.2rem 0 0.5rem",
                backgroundColor: "var(--grey)",
                opacity: "0.3",
              }}
            />
            <Box
              sx={{
                backgroundColor: isDashboardActive
                  ? "var(--hover)" // Change the entire background when dashboard is active
                  : "transparent", // Keep it transparent otherwise
                borderRadius: "20px", // Optional: smooth corners for the whole section
                padding: "0.1rem 0", // Optional: adjust spacing around the content
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: open ? "row" : "column",
                }}
              >
                {/* Dashboard NavLink */}
                <NavLink to="/dashboard" style={{ textDecoration: "none" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: open ? "0.2rem 1rem" : "0.5rem 1rem 0",
                      backgroundColor: isDashboardActive
                        ? "var(--hover)" // Apply hover bg color when dashboard is active
                        : "var(--drop-bg)",
                      borderRadius: "20px",
                      gap: open ? "1.5rem" : "0",
                      flexDirection: open ? "row" : "column",
                      textAlign: "center",
                    }}
                  >
                    <SpaceDashboardIcon
                      sx={{
                        fontSize: "1.2rem",
                        color: isDashboardActive
                          ? "var(--text-head)"
                          : "var(--text-color)",
                        marginBottom: open ? "0" : "0.5rem",
                      }}
                    />
                    {open && !is1440pxOrSmaller && (
                      <Typography
                        sx={{
                          color: isDashboardActive
                            ? "var(--text-head)"
                            : "var(--text-color)",
                          fontSize: "0.875rem",
                          fontWeight: 500,
                          display: { xs: "none", sm: "block" },
                        }}
                      >
                        Hanoi
                      </Typography>
                    )}
                  </Box>
                </NavLink>

                {/* Divider */}
                {selectedApp !== "caleta-web" && (
                  <>
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{
                        margin: "0 1.5rem 0 1rem",
                        backgroundColor: isDashboardActive
                          ? "var(--hover)" // Change background color when dashboard is active
                          : "var(--text-head)", // Default background color
                        opacity: "0.3",
                      }}
                    />

                    {/* Settings NavLink */}
                    <NavLink to="/settings" style={{ textDecoration: "none" }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: open ? "0" : "0.5rem",
                          marginBottom: open ? "0" : "0.5rem",
                          padding: "0.2rem 0.5rem",
                          backgroundColor: isDashboardActive
                            ? "var(--hover)" // Apply hover bg color when dashboard is active
                            : isSettingsActive
                            ? "var(--hover)" // Change bg color only for settings when active
                            : "var(--drop-bg)",
                          borderRadius: "20px",
                          flexDirection: open ? "row" : "column",
                          textAlign: "center",
                        }}
                      >
                        <SettingsIcon
                          sx={{
                            color: "var(--text-head)",
                            fontSize: "1.2rem",
                          }}
                        />
                      </Box>
                    </NavLink>
                  </>
                )}
              </Box>
            </Box>
            <Divider
              orientation="horizontal"
              flexItem
              sx={{
                margin: " 0.6rem 0 0",
                backgroundColor: "var(--grey)",
                opacity: "0.3",
              }}
            />
            <List
              sx={{
                backgroundColor: "var(--drop-bg)",
                padding: "0",
                borderRadius: "20px ",
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
                      justifyContent: "center",
                      fontSize: ".7rem",
                      color: "var(--text-head)",
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
                        fontWeight: 500,
                        fontSize: ".8rem",
                        color: "var(--text-color)",
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
                {selectedApp === "caleta-core" ? (
                  <>
                    {[
                      { text: "Servers", icon: <DnsIcon />, path: "/server" },
                      {
                        text: "Users",
                        icon: <PeopleAltIcon />,
                        path: "/users",
                      },
                      {
                        text: "Devices",
                        icon: <DevicesIcon />,
                        path: "/devices",
                      },
                      {
                        text: "Print Queues",
                        icon: <QueueIcon />,
                        path: "/queues",
                      },
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
                      {
                        text: "Imports",
                        icon: <InputIcon />,
                        path: "/user-imports",
                      },
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
                      {
                        text: "Cashier",
                        icon: <PaymentsIcon />,
                        path: "/cashier",
                      },
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
                                : "var(--text-color)",
                              backgroundColor: isActive
                                ? "var(--hover)"
                                : "transparent",
                              borderRadius: isActive ? "20px" : "0",
                              fontWeight: "bold",
                              gap: "1rem",
                              transition:
                                "background-color 0.3s, transform 0.3s, border-radius 0.3s",
                              "&:hover": {
                                backgroundColor: "var(--hover2)",
                                color: "var(--text-head)",
                                borderRadius: "20px",
                                fontWeight: "bold",
                              },
                              padding: "0.1rem 1rem",
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
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              {React.cloneElement(icon, {
                                sx: { fontSize: 20 },
                              })}
                            </ListItemIcon>
                            {openAdmin && !is1440pxOrSmaller && (
                              <ListItemText
                                primary={text}
                                primaryTypographyProps={{
                                  sx: {
                                    fontSize: "0.875rem",
                                    fontWeight: 500,
                                    display: { xs: "none", sm: "block" },
                                  },
                                }}
                              />
                            )}
                          </ListItem>
                        )}
                      </NavLink>
                    ))}
                  </>
                ) : selectedApp === "caleta-web" ? (
                  <>
                    {[
                      {
                        text: "Settings",
                        icon: <SettingsIcon />,
                        path: "/web/web-setting",
                      },
                      {
                        text: "Customization",
                        icon: <TuneIcon />,
                        path: "/web/custom",
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
                                : "var(--text-color)",
                              backgroundColor: isActive
                                ? "var(--hover)"
                                : "transparent",
                              borderRadius: isActive ? "20px" : "0",
                              fontWeight: "bold",
                              gap: "1rem",
                              transition:
                                "background-color 0.3s, transform 0.3s, border-radius 0.3s",
                              "&:hover": {
                                backgroundColor: "var(--hover2)",
                                color: "var(--text-head)",
                                borderRadius: "20px",
                                fontWeight: "bold",
                              },
                              padding: "0.1rem 1rem",
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
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              {React.cloneElement(icon, {
                                sx: { fontSize: 20 },
                              })}
                            </ListItemIcon>
                            {openAdmin && !is1440pxOrSmaller && (
                              <ListItemText
                                primary={text}
                                primaryTypographyProps={{
                                  sx: {
                                    fontSize: "0.875rem",
                                    fontWeight: 500,
                                    display: { xs: "none", sm: "block" },
                                  },
                                }}
                              />
                            )}
                          </ListItem>
                        )}
                      </NavLink>
                    ))}
                  </>
                ) : null}
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
                      justifyContent: "center",
                      fontSize: ".7rem",
                      color: "var(--text-head)",
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
                        fontWeight: 500,
                        fontSize: ".8rem",
                        color: "var(--text-color)",
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
                {selectedApp === "caleta-core" ? (
                  <>
                    {[
                      {
                        text: "License & more",
                        icon: <InfoIcon />,
                        path: "/lla",
                      },
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
                                : "var(--text-color)",
                              backgroundColor: isActive
                                ? "var(--hover)"
                                : "transparent",
                              borderRadius: isActive ? "20px" : "0",
                              fontWeight: "bold",
                              gap: "1rem",
                              transition:
                                "background-color 0.3s, transform 0.3s, border-radius 0.3s",
                              "&:hover": {
                                backgroundColor: "var(--hover2)",
                                borderRadius: "20px",
                                color: "var(--text-head)",
                                // transform: "scale(1.05)",
                                fontWeight: "bold",
                              },
                              padding: "0.1rem 1rem",
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
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              {React.cloneElement(icon, {
                                sx: { fontSize: 20 },
                              })}
                            </ListItemIcon>
                            {open && !is1440pxOrSmaller && (
                              <ListItemText
                                primary={text}
                                primaryTypographyProps={{
                                  sx: {
                                    fontSize: "0.875rem",
                                    fontWeight: 500,
                                    display: { xs: "none", sm: "block" },
                                  },
                                }}
                              />
                            )}
                          </ListItem>
                        )}
                      </NavLink>
                    ))}
                  </>
                ) : selectedApp === "caleta-web" ? (
                  <>
                    {[
                      {
                        text: "License & more",
                        icon: <InfoIcon />,
                        path: "/web/lla",
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
                                : "var(--text-color)",
                              backgroundColor: isActive
                                ? "var(--hover)"
                                : "transparent",
                              borderRadius: isActive ? "20px" : "0",
                              fontWeight: "bold",
                              gap: "1rem",
                              transition:
                                "background-color 0.3s, transform 0.3s, border-radius 0.3s",
                              "&:hover": {
                                backgroundColor: "var(--hover2)",
                                color: "var(--text-head)",
                                borderRadius: "20px",
                                fontWeight: "bold",
                              },
                              padding: "0.1rem 1rem",
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
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              {React.cloneElement(icon, {
                                sx: { fontSize: 20 },
                              })}
                            </ListItemIcon>
                            {openAdmin && !is1440pxOrSmaller && (
                              <ListItemText
                                primary={text}
                                primaryTypographyProps={{
                                  sx: {
                                    fontSize: "0.875rem",
                                    fontWeight: 500,
                                    display: { xs: "none", sm: "block" },
                                  },
                                }}
                              />
                            )}
                          </ListItem>
                        )}
                      </NavLink>
                    ))}
                  </>
                ) : null}
              </Collapse>
            </List>
          </Box>
        </SimpleBar>
      </Drawer>
    </>
  );
};

export default Sidebar;
