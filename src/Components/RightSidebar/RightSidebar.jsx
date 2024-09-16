// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Menu,
//   MenuItem,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Box,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import PersonIcon from "@mui/icons-material/Person";
// import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
// import LogoutIcon from "@mui/icons-material/Logout";
// import logo from "../../Images/caleta-logo-removebg-preview.png";
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import Brightness4Icon from "@mui/icons-material/Brightness4";
// import Brightness7Icon from "@mui/icons-material/Brightness7";
// import { useTheme } from "../../ThemeContext";
// // import Breadcrumb from "../Breadcrumb/Breadcrumb";

// const Navbar = ({ toggleDrawer }) => {
//   const { toggleTheme, theme } = useTheme();
//   const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);

//   const userEmail = localStorage.getItem("userEmail");
//   const formatUserName = (userEmail) => {
//     const userName = userEmail
//       ? userEmail.replace(/@gmail\.com$/, "")
//       : "Guest";
//     return userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
//   };
//   const userName = formatUserName(userEmail);

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("userEmail");
//     window.location.href = "/";
//   };

//   return (
//     <AppBar
//       position="fixed"
//       sx={{
//         zIndex: (theme) => theme.zIndex.drawer + 1,
//         backgroundColor: "var(--sidebar-color)",
//         boxShadow: "none",
//       }}
//     >
//       <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//         {/* <div style={{ display: "flex", alignItems: "center" }}>
//           <ListItem sx={{ paddingLeft: 0 }}>
//             <ListItemIcon sx={{ minWidth: "unset", marginRight: "0.5rem" }}>
//               <img src={logo} alt="logo" style={{ width: "3rem" }} />
//             </ListItemIcon>

//             <ListItemText
//               primary="Caleta"
//               primaryTypographyProps={{
//                 sx: {
//                   color: "var(--text-head)",
//                   fontSize: "1.5rem",
//                   fontWeight: "semi-bold",
//                   margin: "0 2rem 0 0",
//                 },
//               }}
//             />
//             <IconButton
//               color="var(--text-grey)"
//               aria-label="toggle drawer"
//               edge="start"
//               onClick={toggleDrawer}
//               sx={{
//                 marginleft: "5rem",
//                 backgroundColor: "var(--color)",
//                 color: "var(--btn-bg)",
//                 borderRadius: "10px",
//               }}
//             >
//               <MenuIcon />
//             </IconButton>
//           </ListItem>
//         </div> */}
//         {/* <Breadcrumb /> */}
//         <div style={{ display: "flex", alignItems: "center" }}>
//           <IconButton
//             sx={{ marginRight: 2, color: "var(--text-color)" }}
//             onClick={toggleTheme}
//             aria-label="Toggle theme"
//           >
//             {theme === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
//           </IconButton>
//           <IconButton
//             sx={{ marginRight: 2, color: "var(--text-color)" }}
//             onClick={handleMenu}
//             aria-label="Account menu"
//           >
//             <MoreHorizIcon />
//           </IconButton>
//         </div>

//         <Menu
//           id="menu-appbar"
//           anchorEl={anchorEl}
//           anchorOrigin={{ vertical: "top", horizontal: "right" }}
//           keepMounted
//           transformOrigin={{ vertical: "top", horizontal: "right" }}
//           open={open}
//           onClose={handleClose}
//           sx={{
//             "& .MuiMenuItem-root": {
//               color: "var(--text-color)",
//             },
//             "& .MuiPaper-root": {
//               backgroundColor: "var(--background-color)",
//             },
//           }}
//         >
//           <MenuItem
//             onClick={handleClose}
//             sx={{
//               backgroundColor: "var(--hover)",
//             }}
//           >
//             {" "}
//             <IconButton
//               sx={{ color: "var(--text-color)" }}
//               aria-label="Account menu"
//             >
//               <PersonIcon />
//             </IconButton>
//             {userName}
//           </MenuItem>
//           <MenuItem onClick={handleLogout}>
//             {" "}
//             <IconButton
//               sx={{ color: "var(--text-color)" }}
//               aria-label="Account menu"
//             >
//               <LogoutIcon />
//             </IconButton>
//             Logout
//           </MenuItem>
//           <MenuItem>
//             {" "}
//             <IconButton
//               sx={{ color: "var(--text-color)" }}
//               aria-label="Account menu"
//             >
//               <PrivacyTipIcon />
//             </IconButton>
//             Privacy Policy
//           </MenuItem>
//         </Menu>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;
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
