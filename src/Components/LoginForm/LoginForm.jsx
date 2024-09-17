// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Typography,
//   Button,
//   TextField,
//   IconButton,
//   InputAdornment,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import loginImage from "../../Images/file.png";
// import logo from "../../Images/caleta-logo-removebg-preview.png";

// const LoginForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedEmail = localStorage.getItem("userEmail");
//     if (storedEmail) {
//       navigate("/dashboard");
//     }
//   }, [navigate]);

//   const handleClickShowPassword = () => setShowPassword(!showPassword);

//   const handleSignIn = () => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       alert("Please enter a valid email address");
//     } else {
//       localStorage.setItem("userEmail", email);
//       navigate("/dashboard");
//     }
//   };

//   return (
//     <Box sx={{ display: "flex", width: "100vw", height: "100vh" }}>
//       {/* Left Side */}
//       <Box
//         sx={{
//           flex: 1,
//           backgroundColor: " var(--card2)",
//           color: "white",
//           margin: "20px",
//           borderRadius: "10px",
//           padding: "20px",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "flex-start",
//           alignItems: "flex-start",
//           position: "relative",
//           overflow: "hidden",
//         }}
//       >
//         <Box
//           sx={{
//             position: "absolute",
//             left: "-10px",
//             top: "-60px",
//             width: "1000px",
//             height: "700px",
//             backgroundColor: "var(--card1)",
//             borderRadius: "0 0 700px 700px",
//             transform: "rotate(-5deg)",
//           }}
//         />
//         <Box sx={{ display: "flex", alignItems: "center", zIndex: 1 }}>
//           <img
//             src={logo}
//             alt="logo"
//             style={{ maxWidth: "5em", height: "auto" }}
//           />
//           <Typography
//             variant="h1"
//             sx={{ fontSize: "2.5em", marginLeft: "10px" }}
//           >
//             Caleta
//           </Typography>
//         </Box>
//         <img
//           src={loginImage}
//           alt="loginImage"
//           style={{ maxWidth: "100%", margin: "auto", zIndex: 1 }}
//         />
//         <Typography
//           variant="h3"
//           sx={{
//             fontSize: "1.2rem",
//             textAlign: "center",
//             zIndex: 1,
//             margin: "10px auto",
//           }}
//         >
//           Access personalized settings, print history, and <br /> exclusive
//           offers by logging in.
//         </Typography>
//       </Box>

//       {/* Right Side */}
//       <Box
//         sx={{
//           flex: 1,
//           backgroundColor: "white",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <Box sx={{ textAlign: "center", marginBottom: "3rem" }}>
//           <Typography variant="h3" sx={{}}>
//             Welcome to <span style={{ color: " var(--card1)" }}>Caleta</span>
//           </Typography>
//           <Typography
//             variant="h6"
//             sx={{ color: "var(--text-grey)", marginTop: "10px" }}
//           >
//             Sign in by entering the information below
//           </Typography>
//         </Box>

//         {/* Email Field */}
//         <Box sx={{ width: "80%", marginBottom: "2rem" }}>
//           <TextField
//             fullWidth
//             label="Email Address"
//             variant="outlined"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter email address"
//             sx={{ marginBottom: "2rem" }}
//           />
//         </Box>

//         {/* Password Field */}
//         <Box sx={{ width: "80%", marginBottom: "2rem" }}>
//           <TextField
//             fullWidth
//             label="Password"
//             variant="outlined"
//             type={showPassword ? "text" : "password"}
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter password"
//             sx={{ marginBottom: "2rem" }}
//             InputProps={{
//               endAdornment: (
//                 <InputAdornment position="end">
//                   <IconButton onClick={handleClickShowPassword}>
//                     {showPassword ? <Visibility /> : <VisibilityOff />}
//                   </IconButton>
//                 </InputAdornment>
//               ),
//             }}
//           />
//         </Box>

//         {/* Login Button */}
//         <Box sx={{ width: "80%", textAlign: "center" }}>
//           <Button
//             fullWidth
//             variant="contained"
//             onClick={handleSignIn}
//             sx={{
//               backgroundColor: "var(--btn-bg)",
//               padding: "1rem",
//               fontSize: "1rem",
//               fontWeight: "600",
//               borderRadius: "10px",
//               transition: "background-color 0.3s, transform 0.2s ease",
//             }}
//           >
//             Continue
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default LoginForm;
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  IconButton,
  InputAdornment,
  Container,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import logo from "../../Images/caleta-logo-removebg-preview.png";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleSignIn = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
    } else {
      localStorage.setItem("userEmail", email);
      navigate("/dashboard");
    }
  };
  return (
    <>
      <Container maxWidth="md" sx={{ position: "relative" }}>
      {/* Big Semi-Circle on the Left */}
      <Box
        sx={{
          position: "fixed",
          right: {
            xs: "40%",
            sm: "50%",
            md: "60%",
            lg: "65%",
            xl: "70%",
          },
          width: {
            xs: "20rem",
            sm: "40rem",
            md: "60rem",
            lg: "70rem",
            xl: "80rem",
          },
          height: {
            xs: "20rem",
            sm: "40rem",
            md: "60rem",
            lg: "70rem",
            xl: "80rem",
          },
          bgcolor: "rgba(162, 196, 250, 0.2)",
          borderRadius: "50%",
          zIndex: 0,
          overflow: "hidden",
          boxShadow: "var(--box-shadow)",
        }}
      />
      {/* Decorative blob in the top-right corner */}
      <Box
        sx={{
          position: "fixed",
          top: {
            xs: "-20%",
            sm: "-25%",
            md: "-30%",
          },
          left: {
            xs: "50%",
            sm: "60%",
            md: "70%",
          },
          width: {
            xs: "30rem",
            sm: "40rem",
            md: "50rem",
            lg: "55rem",
          },
          height: {
            xs: "30rem",
            sm: "40rem",
            md: "50rem",
            lg: "55rem",
          },
          transform: "rotate(-15deg)",
          zIndex: 1,
        }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="rgba(162, 196, 250, 0.5)"
            d="M41.7,-68.9C55.1,-64.5,67.9,-55.5,67,-43.3C66.2,-31,51.8,-15.5,50.1,-0.9C48.5,13.6,59.7,27.3,58.6,36.1C57.4,44.9,43.9,48.8,32.1,57.2C20.3,65.5,10.2,78.2,-2,81.6C-14.1,85,-28.2,79.2,-35.1,68C-42.1,56.8,-41.8,40.4,-50.5,28.2C-59.3,16,-76.9,8,-80.5,-2.1C-84.1,-12.1,-73.6,-24.3,-61.5,-30.7C-49.5,-37.2,-35.9,-37.9,-25.4,-44.1C-14.9,-50.2,-7.4,-61.6,3.3,-67.4C14.1,-73.2,28.3,-73.3,41.7,-68.9Z"
            transform="translate(100 100)"
          />
        </svg>
      </Box>
      {/* Other Circles */}
      <Box
        sx={{
          position: "fixed",
          top: {
            xs: "20%",
            sm: "22%",
            md: "25%",
          },
          right: {
            xs: "10%",
            sm: "12%",
            md: "15%",
          },
          zIndex: 0,
          width: {
            xs: "12rem",
            sm: "20rem",
            md: "26rem",
          },
          height: {
            xs: "12rem",
            sm: "20rem",
            md: "26rem",
          },
          bgcolor: "#5b83d8",
          borderRadius: "50%",
          boxShadow: "var(--box-shadow)",
          "&::after": {
            content: '""',
            position: "absolute",
            width: {
              xs: "20px",
              sm: "30px",
              md: "40px",
            },
            height: {
              xs: "20px",
              sm: "30px",
              md: "40px",
            },
            bgcolor: "#5b83d8",
            borderRadius: "50%",
            top: {
              xs: "6rem",
              sm: "8rem",
              md: "10rem",
            },
            right: {
              xs: "5rem",
              sm: "7rem",
              md: "9rem",
            },
          },
        }}
      />
      {/* Bottom Circle */}
      <Box
        sx={{
          position: "fixed",
          bottom: {
            xs: "30%",
            sm: "32%",
            md: "36%",
          },
          right: {
            xs: "4%",
            sm: "6%",
            md: "8%",
          },
          zIndex: 1,
          boxShadow: "var(--box-shadow)",
          "&::before": {
            content: '""',
            position: "absolute",
            width: {
              xs: "40px",
              sm: "50px",
              md: "60px",
            },
            height: {
              xs: "40px",
              sm: "50px",
              md: "60px",
            },
            bgcolor: "var(--btn-bg)",
            borderRadius: "50%",
            top: {
              xs: "6%",
              sm: "8%",
              md: "9%",
            },
            right: {
              xs: "1%",
              sm: "2%",
              md: "2%",
            },
          },
          "&::after": {
            content: '""',
            position: "absolute",
            width: {
              xs: "30px",
              sm: "35px",
              md: "40px",
            },
            height: {
              xs: "30px",
              sm: "35px",
              md: "40px",
            },
            bgcolor: "var(--card1)",
            borderRadius: "50%",
            top: {
              xs: "1%",
              sm: "2%",
              md: "1%",
            },
            right: {
              xs: "2%",
              sm: "3%",
              md: "4%",
            },
          },
        }}
      />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "5rem",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontSize: "2rem",
              fontWeight: "bold",
              color: "var(--text-color)",
              textAlign: "center",
              mb: 2,
              span: {
                color: "var(--secondary-color)", // Color for the span element
              },
            }}
          >
            Secure Web <span>Interface</span>
          </Typography>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "var(--text-grey)",
              textAlign: "center",
              fontSize: ".8rem",
              mb: 2,
            }}
          >
            PIN Authentication
          </Typography>
          <Box
            component="form"
            onSubmit={handleSignIn}
            sx={{
              mt: 1,
              padding: "7rem 5rem",
              width: "100%",
              bgcolor: "var(--color)",
              borderRadius: "1rem",
              zIndex: 1,
              boxShadow: "var(--box-shadow)",
            }}
          >
            <Box sx={{ width: "100%", marginBottom: "2rem" }}>
              <TextField
                fullWidth
                label="Email Address"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                sx={{ marginBottom: "2rem" }}
              />
            </Box>

            {/* Password Field */}
            <Box sx={{ width: "100%", marginBottom: "2rem" }}>
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                sx={{ marginBottom: "2rem" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword}>
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            {error && (
              <Typography color="error" variant="body2" sx={{ mt: 2 }}>
                {error}
              </Typography>
            )}
            <Box sx={{ width: "100%", textAlign: "center" }}>
              <Button
                fullWidth
                variant="contained"
                onClick={handleSignIn}
                sx={{
                  backgroundColor: "var(--btn-bg)",
                  padding: "1rem",
                  fontSize: "1rem",
                  fontWeight: "600",
                  borderRadius: "10px",
                  transition: "background-color 0.3s, transform 0.2s ease",
                }}
              >
                Continue
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default LoginForm;
