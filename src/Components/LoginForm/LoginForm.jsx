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
//             sx={{ color: "var(--text-color)", marginTop: "10px" }}
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
  Grid,
  Paper,
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
      <Container>
        <Box
          sx={{
            // overflow: "hidden",
            position: "absolute",
            top: "0",
            left: "0",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            zIndex: 2,
          }}
        >
          <img
            src={logo}
            alt="logo"
            style={{ maxWidth: "4rem", height: "auto" }}
          />
          <Typography
            variant="h1"
            sx={{
              fontSize: "2.5rem",
              marginLeft: "10px",
              fontWeight: "500",
              color: "#356076",
            }}
          >
            Caleta
          </Typography>
        </Box>

        {/* Big Semi-Circle on the Left */}

        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0, 
            width: "35vw", 
            height: "50vw", 
            bgcolor: "rgba(135, 206, 250, 0.08)",
            borderTopRightRadius: "50%", 
            borderBottomRightRadius: "50%",
            zIndex: 0,
            boxShadow: "var(--box-shadow)",
          }}
        />

        {/* triangle */}
        <Box
          sx={{
            // overflow: "hidden",
            position: "fixed",
            bottom: "10vw",
            right: "20vw",
            width: 0,
            height: 0,
            borderLeft: "7vw solid transparent",
            borderRight: "7vw solid transparent",
            borderBottom: "24vh solid #4682A9",
            zIndex: 0,
            transform: "rotate(45deg)",
            animation: "rotateAnimation 50s infinite ease-in-out",
            "@keyframes rotateAnimation": {
              "0%": {
                transform: "rotate(45deg)",
              },
              "50%": {
                transform: "rotate(180deg)",
              },
              "100%": {
                transform: "rotate(45deg)",
              },
            },
          }}
        />
   {/* triangle */}
   <Box
          sx={{
            overflow: "hidden",
            position: "fixed",
            top: "40vh",
            left: "30vw",
            zIndex: 1,
            transform: "rotate(-25deg)",
            width: 0,
            height: 0,
            borderLeft: "2vw solid transparent",
            borderRight: "2vw solid transparent",
            borderBottom: "8vh solid #4682A9",
            animation: "rotateAnimation 10s infinite ease-in-out",
            "@keyframes rotateAnimation": {
              "0%": {
                transform: "rotate(0deg)",
              },
              "50%": {
                transform: "rotate(180deg)",
              },
              "100%": {
                transform: "rotate(0deg)",
              },
            },
          }}
        />
        <style>
          <style>
            {`
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-20px);
            }
          }
        `}
          </style>
        </style>
        {/* Decorative Blob in the Top-Right Corner */}
        <Box
          sx={{
            animation: "bounce 3s ease-in-out infinite",
            position: "fixed",
            top: "-25vh",
            right: "-10vw",
            width: "40vw",
            height: "40vw",
            transform: "rotate(-15deg)",
            zIndex: 1,
          }}
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="rgba(112, 197, 223, 0.68)"
              d="M41.7,-68.9C55.1,-64.5,67.9,-55.5,67,-43.3C66.2,-31,51.8,-15.5,50.1,-0.9C48.5,13.6,59.7,27.3,58.6,36.1C57.4,44.9,43.9,48.8,32.1,57.2C20.3,65.5,10.2,78.2,-2,81.6C-14.1,85,-28.2,79.2,-35.1,68C-42.1,56.8,-41.8,40.4,-50.5,28.2C-59.3,16,-76.9,8,-80.5,-2.1C-84.1,-12.1,-73.6,-24.3,-61.5,-30.7C-49.5,-37.2,-35.9,-37.9,-25.4,-44.1C-14.9,-50.2,-7.4,-61.6,3.3,-67.4C14.1,-73.2,28.3,-73.3,41.7,-68.9Z"
              transform="translate(100 100)"
            />
          </svg>
        </Box>

        {/* Other Circles */}
        <Box
          sx={{
            position: "fixed",
            top: "25vh",
            right: "-10vw",
            zIndex: 0,
            width: "20vw",
            height: "20vw",
            bgcolor: "#4682A9",
            borderRadius: "50%",
            boxShadow: "var(--box-shadow)",
            zIndex: 2,
            "&::after": {
              content: '""',
              position: "absolute",
              width: "5vw",
              height: "5vw",
              bgcolor: "rgba(116, 155, 194, 0.63)",
              borderRadius: "50%",
              top: "10vw",
              right: "18vw",
              zIndex: 2,
            },
          }}
        />

        {/* Bottom Circle */}
        <Box
          sx={{
            position: "fixed",
            bottom: "40vh",
            right: "0vw",
            zIndex: 1,
            boxShadow: "var(--box-shadow)",
            "&::before": {
              content: '""',
              position: "absolute",
              width: "5vw",
              height: "5vw",
              bgcolor: "rgba(112, 197, 223, 0.68)",
              borderRadius: "50%",
              top: "2vw",
              right: "0vw",
            },
            "&::after": {
              content: '""',
              position: "absolute",
              width: "3vw",
              height: "3vw",
              bgcolor: "rgba(116, 155, 194, 0.63)",
              borderRadius: "50%",
              top: "7vw",
              right: "0vw",
              animation: "bounce 4s ease-in-out infinite",
            },
          }}
        />

     

        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{
            minHeight: "100vh",
          }}
        >
          <Grid
            item
            component={Paper}
            elevation={2}
            sx={{
              width: {
                xs: "100%",
                md: "400px",
                xl: "500px",
                xlg: "700px",
              },
              padding: {
                xs: "2rem",
                sm: "3rem",
                md: "3rem 0rem",
              },
              borderRadius: "1rem",
              backgroundColor: "var(--color)",
              zIndex: 1,
              overflow: "hidden",
            }}
          >
            <Box sx={{ textAlign: "center", mb: 4 }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontSize: {
                    xs: "1.5rem", // Smaller font size for mobile
                    sm: "1.75rem",
                    md: "2rem",
                  },
                  fontWeight: "bold",
                  color: "var(--text-color)",
                }}
              >
                Welcome to
                <span style={{ color: "#4682A9" }}> Caleta</span>
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  fontSize: {
                    xs: ".7rem", // Smaller text size for mobile
                    sm: ".8rem",
                  },
                  fontWeight: "bold",
                  color: "#5E6668",
                }}
              >
                Sign in by entering the information below
              </Typography>
            </Box>

            <Box
              component="form"
              onSubmit={handleSignIn}
              sx={{
                padding: {
                  xs: "1rem 1.5rem",
                  sm: "2rem 3rem",
                  // md: "3rem 4rem",
                },
              }}
            >
              <Box sx={{ width: "100%", marginBottom: "1.5rem" }}>
                <TextField
                  fullWidth
                  size="small"
                  label="Email Address"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  sx={{
                    marginBottom: "1.5rem",
                  }}
                />
              </Box>

              {/* Password Field */}
              <Box sx={{ width: "100%", marginBottom: "1.5rem" }}>
                <TextField
                  fullWidth
                  size="small"
                  label="Password"
                  variant="outlined"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  sx={{
                    marginBottom: "1.5rem",
                  }}
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

              <Box sx={{ textAlign: "center" }}>
                <Button
                  fullWidth
                  size="small"
                  variant="contained"
                  onClick={handleSignIn}
                  sx={{
                    backgroundColor: "#356076",
                    padding: {
                      xs: "0.75rem",
                      sm: ".5rem 0",
                    },
                    fontSize: {
                      xs: "0.875rem",
                      sm: "1rem",
                    },
                    fontWeight: "600",
                    borderRadius: "10px",
                    "&:hover": {
                      backgroundColor: "#356076", // Hover effect
                    },
                  }}
                >
                  Continue
                </Button>
                <Typography
                  variant="body1"
                  gutterBottom
                  mt={4}
                  sx={{
                    fontSize: {
                      xs: ".7rem", // Smaller text size for mobile
                      sm: ".8rem",
                    },
                    fontWeight: "bold",
                    color: "#5E6668",
                  }}
                >
                  Forgot your password?{" "}
                  <span style={{ color: "#4682A9" }}> Reset Password</span>
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default LoginForm;
