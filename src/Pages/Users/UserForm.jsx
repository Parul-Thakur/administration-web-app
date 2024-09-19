import React, { useState, useEffect } from "react";
import EuroSymbolIcon from "@mui/icons-material/EuroSymbol";

import {
  Container,
  Grid,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Checkbox,
  FormControlLabel,
  Button,
  Typography,
  Box,
  InputAdornment,
} from "@mui/material";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import ActionButtonWithModal from "../../Components/ActionButtonWithModal/ActionButtonWithModal";

const departments = ["HR", "Finance", "IT", "Marketing"];
const costCodes = ["C1", "C2", "C3", "C4", "C5"];
const accountTypes = ["None", "Pre Pay", "Invoice"];
const accessTypes = ["Admin", "Standard"];
const setting = [
  "Allow Retain",
  "Allow Copy",
  "Allow Copy in Colour",
  "Allow Copy 1-sided",
  "Allow Scan to Network",
  "Allow Scan to Email",
  "Allow Scan to USB",
  "Allow Fax",
  "Allow Print from USB",
  "Print All at Login",
  "Allow Delegate Print (Web)",
  "Request PIN at login",
];
// Variants for the items (pop-in effect)
// const itemVariants = {
//   open: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       type: "spring",
//       stiffness: 300,
//       damping: 24,
//     },
//   },
//   closed: {
//     opacity: 0,
//     y: 20,
//     scale: 0.8,
//     transition: {
//       duration: 0.2,
//     },
//   },
// };

// Variants for the dropdown itself
// const dropdownVariants = {
//   open: {
//     opacity: 1,
//     height: "auto",
//     transition: {
//       type: "spring",
//       stiffness: 300,
//       damping: 30,
//       staggerChildren: 0.05, // Stagger for a cascading effect
//       when: "beforeChildren", // Animate dropdown first
//     },
//   },
//   closed: {
//     opacity: 0,
//     height: 0,
//     transition: { duration: 0.3 },
//   },
// };
const UserForm = ({ isEditMode, existingData, onSubmit }) => {
  const [formData, setFormData] = useState({
    userLogon: "",
    fullName: "",
    email: "",
    description: "",
    department: "",
    costCode: "",
    accountType: "",
    accessType: "",
    accessStatus: false,
    accessKey: "",
    accountBalance: "",
    failedLogin: "",
  });
  // const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (isEditMode && existingData) {
      setFormData(existingData);
    }
  }, [isEditMode, existingData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // const handleGenerateAccessKey = () => {
  //   setFormData({
  //     ...formData,
  //     accessKey: "GeneratedAccessKey123",
  //   });
  // };

  const [isModalOpen, setModalOpen] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setModalOpen(true);
    onSubmit(formData);
  };
  const handleClose = () => {
    setModalOpen(false);
  };

  const handleCancel = () => {
    // Logic to handle cancel action
    console.log("Form submission canceled");
  };

  return (
    <>
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
              margin: "2rem 0 0",
              color: "var(--text-color)",
            }}
          >
            <Typography variant="h10" component="h4" gutterBottom>
              User Details
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
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  size="small"
                  label="User Logon"
                  variant="outlined"
                  name="userLogon"
                  value={formData.userLogon}
                  onChange={handleChange}
                  InputProps={{
                    style: {
                      fontSize: "0.8rem",
                      color: "var(--text-color)",
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      fontSize: "0.8rem",
                      color: "var(--text-color)",
                    },
                  }}
                  sx={{
                    fontSize: "0.8rem",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "var(--grey)",
                      },
                      "&:hover fieldset": {
                        borderColor: "var(--primary-color)",
                      },
                    },
                    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "var(--primary-color)", // Focused border color
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  size="small"
                  label="Full Name"
                  variant="outlined"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  InputProps={{
                    style: {
                      fontSize: "0.8rem",
                      color: "var(--text-color)",
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      fontSize: "0.8rem",
                      color: "var(--text-color)",
                    },
                  }}
                  sx={{
                    fontSize: "0.8rem",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "var(--grey)", // Default border color
                      },
                      "&:hover fieldset": {
                        borderColor: "var(--primary-color)", // Hover border color
                      },
                    },
                    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "var(--primary-color)", // Focused border color
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  size="small"
                  label="Email Address"
                  variant="outlined"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  InputProps={{
                    style: {
                      fontSize: "0.8rem",
                      color: "var(--text-color)",
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      fontSize: "0.8rem",
                      color: "var(--text-color)",
                    },
                  }}
                  sx={{
                    fontSize: "0.8rem",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "var(--grey)",
                      },
                      "&:hover fieldset": {
                        borderColor: "var(--primary-color)",
                      },
                    },
                    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "var(--primary-color)", // Focused border color
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  size="small"
                  label="Description"
                  variant="outlined"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  InputProps={{
                    style: {
                      fontSize: "0.8rem",
                      color: "var(--text-color)",
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      fontSize: "0.8rem",
                      color: "var(--text-color)",
                    },
                  }}
                  sx={{
                    fontSize: "0.8rem",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "var(--grey)", // Default border color
                      },
                      "&:hover fieldset": {
                        borderColor: "var(--primary-color)", // Hover border color
                      },
                    },
                    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "var(--primary-color)", // Focused border color
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--text-color)",
                    }}
                  >
                    Department
                  </InputLabel>
                  <Select
                    size="small"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    label="Department"
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--text-color)",
                    }}
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "var(--grey) !important", // Force white border color
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "var(--primary-color) !important", // Ensure focused border is also white
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "var(--primary-color) !important", // Ensure hover border is also white
                      },
                      "& .MuiInputLabel-root": {
                        color: "var(--text-head)", // Label color
                      },
                      "& .MuiSelect-icon": {
                        color: "var(--text-color)", // Icon color
                      },
                    }}
                  >
                    {departments.map((dept) => (
                      <MenuItem
                        key={dept}
                        value={dept}
                        style={{
                          fontSize: "0.8rem",
                          color: "var(--text-color)",
                          backgroundColor: "var(--color)",
                        }}
                      >
                        {dept}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              {/* <Grid item xs={12} md={4}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--text-color)",
                    }}
                  >
                    Department
                  </InputLabel>
                  <Select
                    size="small"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    onOpen={() => setIsOpen(true)}
                    onClose={() => setIsOpen(false)}
                    label="Department"
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--text-color)",
                      cursor: "pointer",
                    }}
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "var(--grey) !important",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "var(--primary-color) !important",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "var(--primary-color) !important",
                      },
                      "& .MuiInputLabel-root": {
                        color: "var(--text-head)",
                      },
                      // "& .MuiSelect-icon": {
                      //   color: "var(--text-color)",
                      //   fontSize: "16px",
                      // },
                    }}
                    IconComponent={() => (
                      <motion.div
                        animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ originY: 0.55 }}
                      >
                        <svg
                          width="10" // Set the icon size smaller
                          height="10"
                          fill="var(--text-color)" // Set the icon color to grey
                          viewBox="0 0 20 20"
                        >
                          <path d="M0 7 L 20 7 L 10 16" />
                        </svg>
                      </motion.div>
                    )}
                    MenuProps={{
                      PaperProps: {
                        component: motion.div,
                        initial: "closed",
                        animate: isOpen ? "open" : "closed",
                        variants: dropdownVariants,
                        style: { overflow: "hidden" },
                      },
                    }}
                  >
                    {departments.map((dept) => (
                      <motion.div key={dept} variants={itemVariants}>
                        <MenuItem
                          value={dept}
                          style={{
                            fontSize: "0.8rem",
                            color: "var(--text-color)",
                            backgroundColor: "var(--color)",
                          }}
                        >
                          {dept}
                        </MenuItem>
                      </motion.div>
                    ))}
                  </Select>
                </FormControl>
              </Grid> */}
              <Grid item xs={12} md={4}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--text-color)",
                      // top: "50%",
                      // left: "3%",
                      // transform: "translateY(-50%)",
                    }}
                  >
                    Cost Code
                  </InputLabel>
                  <Select
                    size="small"
                    name="costCode"
                    value={formData.costCode}
                    onChange={handleChange}
                    label="Cost Code"
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--text-color)",
                    }}
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "var(--grey) !important", // Force white border color
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "var(--primary-color)!important", // Ensure focused border is also white
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "var(--primary-color) !important", // Ensure hover border is also white
                      },
                      "& .MuiInputLabel-root": {
                        color: "var(--text-head)", // Label color
                      },
                      "& .MuiSelect-icon": {
                        color: "var(--text-color)", // Icon color
                      },
                    }}
                  >
                    {costCodes.map((code) => (
                      <MenuItem
                        key={code}
                        value={code}
                        style={{
                          fontSize: "0.8rem",
                          color: "var(--text-color)",
                          backgroundColor: "var(--color)",
                        }}
                      >
                        {code}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--text-color)",
                      // top: "50%",
                      // left: "3%",
                      // transform: "translateY(-50%)",
                    }}
                  >
                    Account Type
                  </InputLabel>
                  <Select
                    size="small"
                    name="accountType"
                    value={formData.accountType}
                    onChange={handleChange}
                    label="Account Type"
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--text-color)",
                    }}
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "var(--grey) !important", // Force white border color
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "var(--primary-color)!important", // Ensure focused border is also white
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "var(--primary-color) !important", // Ensure hover border is also white
                      },
                      "& .MuiInputLabel-root": {
                        color: "var(--text-head)", // Label color
                      },
                      "& .MuiSelect-icon": {
                        color: "var(--text-color)", // Icon color
                      },
                    }}
                  >
                    {accountTypes.map((type) => (
                      <MenuItem
                        key={type}
                        value={type}
                        style={{
                          fontSize: "0.8rem",
                          color: "var(--text-color)",
                          backgroundColor: "var(--color)",
                        }}
                      >
                        {type}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              {isEditMode && (
                <>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      size="small"
                      label="Account Balance"
                      variant="outlined"
                      name="accountBalance"
                      value={formData.accountBalance}
                      onChange={handleChange}
                      type="number"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EuroSymbolIcon
                              sx={{
                                color: "var(--text-color)",
                                fontSize: ".8rem",
                              }}
                            />
                          </InputAdornment>
                        ),
                        style: {
                          fontSize: "0.8rem",
                          color: "var(--text-color)",
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          fontSize: "0.8rem",
                          color: "var(--text-color)",
                        },
                      }}
                      sx={{
                        fontSize: "0.8rem",
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "var(--grey)",
                          },
                          "&:hover fieldset": {
                            borderColor: "var(--primary-color)",
                          },
                        },
                        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "var(--primary-color)",
                        },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      size="small"
                      label="Failed Login"
                      variant="outlined"
                      name="failedLogin"
                      value={formData.failedLogin}
                      onChange={handleChange}
                      InputProps={{
                        style: {
                          fontSize: "0.8rem",
                          color: "var(--text-color)",
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          fontSize: "0.8rem",
                          color: "var(--text-color)",
                        },
                      }}
                      sx={{
                        fontSize: "0.8rem",
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "var(--grey)", // Default border color
                          },
                          "&:hover fieldset": {
                            borderColor: "var(--primary-color)", // Hover border color
                          },
                        },
                        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "var(--primary-color)", // Focused border color
                        },
                      }}
                    />
                  </Grid>
                </>
              )}
              <Grid item xs={12} md={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--text-color)",
                      // top: "50%",
                      // left: "3%",
                      // transform: "translateY(-50%)",
                    }}
                  >
                    Access Type
                  </InputLabel>
                  <Select
                    size="small"
                    name="accessType"
                    value={formData.accessType}
                    onChange={handleChange}
                    label="Access Type"
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--text-color)",
                    }}
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "var(--grey) !important", // Force white border color
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "var(--primary-color) !important", // Ensure focused border is also white
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "var(--primary-color) !important", // Ensure hover border is also white
                      },
                      "& .MuiInputLabel-root": {
                        color: "var(--text-head)", // Label color
                      },
                      "& .MuiSelect-icon": {
                        color: "var(--text-color)", // Icon color
                      },
                    }}
                  >
                    {accessTypes.map((type) => (
                      <MenuItem
                        key={type}
                        value={type}
                        style={{
                          fontSize: "0.8rem",
                          color: "var(--text-color)",
                          backgroundColor: "var(--color)",
                        }}
                      >
                        {type}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <Grid container alignItems="center" spacing={1}>
                  <Grid item>
                    <Typography
                      variant="h7"
                      component="h4"
                      sx={{
                        fontSize: "0.8rem", // Match font size
                        fontWeight: "400", // Adjust font weight to match
                        marginRight: 8, // Space between text and checkbox
                        color: "var(--text-color)", // Match text color
                      }}
                    >
                      Access Status
                    </Typography>
                  </Grid>
                  <Grid item>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.accessStatus}
                          onChange={handleChange}
                          name="accessStatus"
                          sx={{
                            color: "var(--text-color)",
                            "&.Mui-checked": {
                              color: "var(--btn-bg)",
                            },
                            padding: 1,
                          }}
                        />
                      }
                      label="Locked"
                      labelPlacement="end"
                      sx={{
                        color: "var(--text-color)",
                        display: "flex",
                        alignItems: "center",

                        "& .MuiFormControlLabel-label": {
                          padding: "0",
                        },
                        "& .MuiTypography-root": {
                          fontSize: "0.8rem",
                        },
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>

          {/* Settings Section */}
          <Box
            sx={{
              backgroundColor: "var(--background-color)",
              padding: "1rem",
              margin: "2rem 0 0",
              color: "var(--text-color)",
            }}
          >
            <Typography variant="h10" component="h4" gutterBottom>
              Settings
            </Typography>
          </Box>

          <Box
            sx={{
              padding: "3rem",
              backgroundColor: "var(--color)",
              color: "var(--text-color)",
              borderRadius: "1rem",
              boxShadow: "var(--box-shadow)",
            }}
          >
            <Grid item xs={12}>
              <Grid container>
                {setting.map((type) => (
                  <Grid
                    item
                    xs={6}
                    md={3}
                    key={type}
                    sx={{ padding: "1rem 0" }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          name={type}
                          checked={formData[type] || false}
                          onChange={handleChange}
                          sx={{
                            color: "var(--text-color)",
                            padding: 1,
                            "&.Mui-checked": {
                              color: "var(--btn-bg)",
                            },
                          }}
                        />
                      }
                      label={type}
                      labelPlacement="end"
                      sx={{
                        color: "var(--text-color)",
                        display: "flex",
                        alignItems: "center",

                        "& .MuiFormControlLabel-label": {
                          padding: "0",
                        },
                        "& .MuiTypography-root": {
                          fontSize: "0.8rem",
                        },
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid item xs={12} md={6}>
              <FormControl fullWidth variant="outlined">
                <Box
                  sx={{
                    marginTop: "2rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    width: { xs: "100%", sm: "80%", md: "60%" },
                    flexDirection: { xs: "column", sm: "row" },
                  }}
                >
                  <TextField
                    fullWidth
                    size="small"
                    label="Access Key"
                    variant="outlined"
                    name="accessKey"
                    value={formData.accessKey}
                    onChange={handleChange}
                    InputProps={{
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
                      flex: 1,
                      fontSize: "0.8rem",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "var(--grey)",
                        },
                        "&:hover fieldset": {
                          borderColor: "var(--primary-color)",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "var(--primary-color)",
                        },
                      },
                    }}
                  />
                  <Button
                    variant="outlined"
                    sx={{
                      fontSize: "0.8rem",
                      padding: "0.5rem 1rem",
                      color: "var(--text-color)",
                      borderColor: "var(--grey)",
                      "&:hover": {
                        backgroundColor: "var(--btn-bg)",
                        color: "var(--btn-text)",
                      },
                      width: { xs: "100%", sm: "auto" },
                    }}
                    // onClick={handleGenerate}
                  >
                    Generate
                  </Button>

                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                      fontSize: "0.8rem",
                      padding: "0.5rem 1rem",
                      color: "var(--text-color)",
                      borderColor: "var(--grey)",
                      "&:hover": {
                        backgroundColor: "var(--btn-bg)",
                        color: "var(--btn-text)",
                      },
                      width: { xs: "100%", sm: "auto" },
                      marginTop: { xs: "0.5rem", sm: "0" },
                    }}
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                </Box>
              </FormControl>
            </Grid>
          </Box>

          {/* Form Actions */}
          <div>
            <ActionButtonWithModal
              isEditMode={isEditMode}
              isModalOpen={isModalOpen}
              handleSubmit={handleSubmit}
              handleClose={handleClose}
              updateText="Update"
              addText="Add user"
              icon={PersonAddAlt1Icon}
            />
          </div>
        </form>
      </Container>
    </>
  );
};

export default UserForm;
