import React, { useState } from "react";
import NavbarMini from "../../../Components/Common/NavbarMini/NavbarMini";
import ClearIcon from "@mui/icons-material/Clear";
import { aliasData } from "./UserData";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Grid,
  TextField,
  FormControl,
  Button,
  Typography,
  Box,
  InputAdornment,
  IconButton,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CustomTable from "../../../Components/Common/CustomTable/CustomTable";
import { motion } from "framer-motion";

function Alias() {
  const [data, setData] = useState(aliasData);
  const [formData, setFormData] = useState({
    accessKey: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/users/");
  };
  const columns = React.useMemo(
    () => [
      { Header: "Alias", accessor: "alias" },
      {
        Header: "Select",
        Cell: ({ row }) => (
          <Button
            variant="contained"
            color="primary"
            // onClick={() => handleAddUser(row.original)}
            // disabled={selectedUsers.some(
            //   (u) => u.userlogon === row.original.userlogon
            // )}
            startIcon={<AddCircleOutlineIcon />}
            sx={{
              borderRadius: "20px",
              fontSize: "0.7rem",
              backgroundColor: "var(--btn-bg)",
              color: "var(--btn-text)",
              padding: "0.5rem 1rem",
              transition: "transform 0.2s ease",
              "&:hover": {
                transform: "translateY(-2px)",
              },
            }}
          >
            Add
          </Button>
        ),
      },
    ]
    // [selectedUsers]
  );
  const tableVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  return (
    <div>
      <Typography
        variant="h4"
        component="h4"
        gutterBottom
        style={{
          padding: 0,
          margin: "3rem 2rem 0rem",
          color: "var(--text-head)",
          fontWeight: 500,
          fontFamily: "var(--font-family)",
        }}
      >
        Users
      </Typography>
      <NavbarMini />
      <IconButton onClick={handleBack} disableRipple>
        <ArrowBackIcon
          sx={{ color: "var(--text-color)", margin: "2rem  0 0 5rem" }}
        />
      </IconButton>
      <motion.div
        className="main"
        variants={tableVariants}
        initial="hidden"
        animate="visible"
      >
        <Container
          // component={Paper}
          elevation={3}
          style={{ padding: 0, margin: "0 0 3rem" }}
        >
          <form onSubmit={handleSubmit}>
            {/* User Details Section */}
            <Box
              sx={{
                backgroundColor: "var(--background-color)",
                padding: "1rem",
                // margin: "2rem 0 0",
                color: "var(--text-color)",
              }}
            >
              <Typography
                variant="h8"
                component="h4"
                gutterBottom
                style={{
                  fontWeight: 500,
                  fontSize: ".875rem",
                }}
              >
                Alias
              </Typography>
            </Box>
            <Box
              sx={{
                padding: "3rem",
                backgroundColor: "var(--color)",
                color: "var(--text-color)",
                borderRadius: " 1rem  ",
                boxShadow: "var(--box-shadow)",
              }}
            >
              {/* ==============================ADD ACCESS CODE============================================================ */}
              <Grid item xs={12} md={6}>
                <FormControl fullWidth variant="outlined" size="small">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      width: { xs: "100%", sm: "80%", md: "60%" }, // Responsive width
                    }}
                  >
                    <TextField
                      fullWidth
                      size="small"
                      label="Alias"
                      variant="outlined"
                      name="accessKey"
                      value={formData.accessKey}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          accessKey: e.target.value,
                        })
                      } // Update the form data
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="clear input"
                              onClick={() =>
                                setFormData({ ...formData, accessKey: "" })
                              } // Clear the input field
                              edge="end"
                              size="small"
                              sx={{
                                color: "var(--text-color)",
                                "&:hover": {
                                  color: "var(--primary-color)", // Optional: Change color on hover
                                },
                              }}
                            >
                              <ClearIcon fontSize="small" />
                            </IconButton>
                          </InputAdornment>
                        ),
                        style: {
                          fontSize: "0.8rem",
                          color: "var(--text-color)",
                          height: "40px",
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          fontSize: "0.8rem",
                          color: "var(--text-color)",
                        },
                      }}
                      sx={{
                        flex: 1, // Allows the text field to take up available space
                        fontSize: "0.8rem",
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "var(--grey)", // Default border color
                          },
                          "&:hover fieldset": {
                            borderColor: "var(--primary-color)", // Hover border color
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "var(--primary-color)", // Focused border color
                          },
                        },
                      }}
                    />
                    <Button
                      variant="outlined"
                      sx={{
                        fontSize: "0.8rem",
                        padding: "0.5rem 1rem", // Adjusted padding for responsiveness
                        color: "var(--text-color)", // Button text color
                        borderColor: "var(--grey)", // Button border color
                        "&:hover": {
                          backgroundColor: "var(--btn-bg)",
                          color: "var(--btn-text)", // Button hover background color
                        },
                        width: { xs: "100%", sm: "auto" }, // Full width on small screens
                      }}
                      // onClick={handleGenerate}
                    >
                      Add Alias
                    </Button>
                  </Box>
                </FormControl>
              </Grid>
              {/* <Typography
                variant="body2"
                sx={{
                  fontSize: "0.8rem",
                  color: "var(--text-color)",
                  padding: "5rem 0 0",
                  backgroundColor: "var(--color)",
                  textAlign: "center",
                }}
              >
                No alias found
              </Typography> */}
            </Box>
            <Box mt={5}>
              <CustomTable
                setData={setData}
                data={data}
                columns={columns}
                localStorageKey={aliasData}
                isAccessPage={true}
              />
            </Box>
          </form>
        </Container>
      </motion.div>
    </div>
  );
}

export default Alias;
