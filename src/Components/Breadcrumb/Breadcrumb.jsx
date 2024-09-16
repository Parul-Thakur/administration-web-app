// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Breadcrumbs, Typography, Box } from "@mui/material";
// import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

// const Breadcrumb = () => {
//   const location = useLocation();
//   const paths = location.pathname.split("/").filter((x) => x);

//   return (
//     <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1, overflow: "hidden" }}>
//       <Breadcrumbs
//         aria-label="breadcrumb"
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           whiteSpace: "nowrap",
//           overflow: "hidden",
//           textOverflow: "ellipsis",
//         }}
//         separator={<span style={{ color: "var(--text-head)" }}> / </span>} // Set the slash color to white
//       >
//         <Link
//           to="/"
//           style={{ textDecoration: "none", color: "var(--text-head)" }}
//         >
//           <Typography
//             variant="body2"
//             sx={{
//               color: "var(--text-head)",
//               fontWeight: "bold",
//               fontSize: "1rem",
//               display: "flex",
//               alignItems: "center",
//               gap: ".6rem",
//             }}
//           >
//             <NavigateBeforeIcon />
//             Home
//           </Typography>
//         </Link>
//         {paths.map((path, index) => {
//           const to = `/${paths.slice(0, index + 1).join("/")}`;
//           const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

//           return (
//             <Link
//               key={to}
//               to={to}
//               style={{ textDecoration: "none", color: "var(--text-head)" }}
//             >
//               <Typography
//                 variant="body2"
//                 sx={{
//                   color: "var(--text-head)",
//                   fontWeight: "bold",
//                   fontSize: "1rem",
//                   display: "inline-flex",
//                   alignItems: "center",
//                 }}
//               >
//                 {capitalize(path)}
//               </Typography>
//             </Link>
//           );
//         })}
//       </Breadcrumbs>
//     </Box>
//   );
// };

// export default Breadcrumb;
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const Breadcrumb = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
      <Typography
        variant="body2"
        sx={{
          color: "var(--text-head)",
          fontWeight: "bold",
          fontSize: "1rem",
          display: "flex",
          alignItems: "center",
          gap: ".6rem",
          cursor: "pointer",
          margin:"5rem 5rem 0",
        }}
        onClick={() => navigate(-1)} // Navigate to the previous page
      >
        <NavigateBeforeIcon />
        Back
      </Typography>
    </Box>
  );
};

export default Breadcrumb;
