import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import loginImage from "../../Images/file.png";
import logo from "../../Images/caleta-logo-removebg-preview.png";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

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
    <Box sx={{ display: "flex", width: "100vw", height: "100vh" }}>
      {/* Left Side */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: " var(--card2)",
          color: "white",
          margin: "20px",
          borderRadius: "10px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "-10px",
            top: "-60px",
            width: "1000px",
            height: "700px",
            backgroundColor: "var(--card1)",
            borderRadius: "0 0 700px 700px",
            transform: "rotate(-5deg)",
          }}
        />
        <Box sx={{ display: "flex", alignItems: "center", zIndex: 1 }}>
          <img
            src={logo}
            alt="logo"
            style={{ maxWidth: "5em", height: "auto" }}
          />
          <Typography
            variant="h1"
            sx={{ fontSize: "2.5em", marginLeft: "10px" }}
          >
            Caleta
          </Typography>
        </Box>
        <img
          src={loginImage}
          alt="loginImage"
          style={{ maxWidth: "100%", margin: "auto", zIndex: 1 }}
        />
        <Typography
          variant="h3"
          sx={{
            fontSize: "1.2rem",
            textAlign: "center",
            zIndex: 1,
            margin: "10px auto",
          }}
        >
          Access personalized settings, print history, and <br /> exclusive
          offers by logging in.
        </Typography>
      </Box>

      {/* Right Side */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ textAlign: "center", marginBottom: "3rem" }}>
          <Typography variant="h3" sx={{}}>
            Welcome to <span style={{ color: " var(--card1)" }}>Caleta</span>
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "var(--text-grey)", marginTop: "10px" }}
          >
            Sign in by entering the information below
          </Typography>
        </Box>

        {/* Email Field */}
        <Box sx={{ width: "80%", marginBottom: "2rem" }}>
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
        <Box sx={{ width: "80%", marginBottom: "2rem" }}>
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

        {/* Login Button */}
        <Box sx={{ width: "80%", textAlign: "center" }}>
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
  );
};

export default LoginForm;
