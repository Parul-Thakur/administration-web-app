import React, { useState, useEffect } from "react";
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
} from "@mui/material";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import ActionButtonWithModal from "../../Components/ActionButtonWithModal/ActionButtonWithModal";

const departments = ["HR", "Finance", "IT", "Marketing"];
const server = ["indo", "abc"];
const pricing = ["None", "Pre Pay", "Invoice"];
const authentication = ["Access Code", "Windows Authentication"];
const option = [
  "Device Monitoring",
  "Secure Print",
  "Card Reader",
  "Print All At Login",
  "Allow Pre-Pay User",
  "Allow Device Restriction",
];

export default function DeviceForm({ isEditMode, existingData, onSubmit }) {
  const [formData, setFormData] = useState({
    ipaddress: "",
    hostname: "",
    adminpassword: "",
    description: "",
    devicename: "",
    location: "",
    model: "",
    assetnumber: "",
    macaddress: "",
    server: "",
    department: "",
    pricingconfiguration: "",
    authenticationType: "",
    pin: false,
  });

  const status = "offline";

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
  useEffect(() => {
    console.log("Form data server value:", formData.server);
  }, [formData.server]);

  const [isModalOpen, setModalOpen] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setModalOpen(true);
    onSubmit(formData);
  };
  const handleClose = () => {
    setModalOpen(false);
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
              color: "var(--text-grey)",
            }}
          >
            <Typography variant="h10" component="h4" gutterBottom>
              Device details
            </Typography>
          </Box>
          <Box
            sx={{
              padding: "3rem",
              backgroundColor: "var(--color)",
              color: "var(--text-grey)",
              borderRadius: " 1rem  ",
              boxShadow: "var(--box-shadow)",
            }}
          >
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  size="small"
                  label="IP Address"
                  variant="outlined"
                  name="ipaddress"
                  value={formData.ipaddress}
                  onChange={handleChange}
                  InputProps={{
                    style: {
                      fontSize: "0.8rem",
                      color: "var(--text-grey)",
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      fontSize: "0.8rem",
                      color: "var(--text-grey)",
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
              {isEditMode && (
                <>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      size="small"
                      label="Hostname"
                      variant="outlined"
                      name="hostname"
                      value={formData.hostname}
                      onChange={handleChange}
                      InputProps={{
                        style: {
                          fontSize: "0.8rem",
                          color: "var(--text-grey)",
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          fontSize: "0.8rem",
                          color: "var(--text-grey)",
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
                <TextField
                  fullWidth
                  size="small"
                  type="password"
                  label="Admin Password"
                  variant="outlined"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  InputProps={{
                    style: {
                      fontSize: "0.8rem",
                      color: "var(--text-grey)",
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      fontSize: "0.8rem",
                      color: "var(--text-grey)",
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
                      color: "var(--text-grey)",
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      fontSize: "0.8rem",
                      color: "var(--text-grey)",
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
              {isEditMode && (
                <>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      size="small"
                      label="Device Name"
                      variant="outlined"
                      name="devicename"
                      value={formData.devicename}
                      onChange={handleChange}
                      InputProps={{
                        style: {
                          fontSize: "0.8rem",
                          color: "var(--text-grey)",
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          fontSize: "0.8rem",
                          color: "var(--text-grey)",
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
                      label="Model"
                      variant="outlined"
                      name="model"
                      value={formData.model}
                      onChange={handleChange}
                      InputProps={{
                        style: {
                          fontSize: "0.8rem",
                          color: "var(--text-grey)",
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          fontSize: "0.8rem",
                          color: "var(--text-grey)",
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
                    <TextField
                      fullWidth
                      size="small"
                      label="Location"
                      variant="outlined"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      InputProps={{
                        style: {
                          fontSize: "0.8rem",
                          color: "var(--text-grey)",
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          fontSize: "0.8rem",
                          color: "var(--text-grey)",
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
                    <TextField
                      fullWidth
                      size="small"
                      label="Asset Number"
                      variant="outlined"
                      name="assetnumber"
                      value={formData.assetnumber}
                      onChange={handleChange}
                      InputProps={{
                        style: {
                          fontSize: "0.8rem",
                          color: "var(--text-grey)",
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          fontSize: "0.8rem",
                          color: "var(--text-grey)",
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
                    <TextField
                      fullWidth
                      size="small"
                      label="MAC Address"
                      variant="outlined"
                      name="macaddress"
                      value={formData.macaddress}
                      onChange={handleChange}
                      InputProps={{
                        style: {
                          fontSize: "0.8rem",
                          color: "var(--text-grey)",
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          fontSize: "0.8rem",
                          color: "var(--text-grey)",
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
              <Grid item xs={12} md={4}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--text-grey)",
                    }}
                  >
                    Server
                  </InputLabel>
                  <Select
                    size="small"
                    name="server"
                    value={formData.server}
                    onChange={handleChange}
                    label="Server"
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--text-grey)",
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
                        color: "var(--text-grey)", // Icon color
                      },
                    }}
                  >
                    {server.map((s) => (
                      <MenuItem
                        key={s}
                        value={s}
                        style={{
                          fontSize: "0.8rem",
                          color: "var(--text-grey)",
                          backgroundColor: "var(--color)",
                        }}
                      >
                        {s}
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
                      color: "var(--text-grey)",
                    }}
                  >
                    Department
                  </InputLabel>
                  <Select
                    size="small"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    label="department"
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--text-grey)",
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
                        color: "var(--text-grey)", // Icon color
                      },
                    }}
                  >
                    {departments.map((dept) => (
                      <MenuItem
                        key={dept}
                        value={dept}
                        style={{
                          fontSize: "0.8rem",
                          color: "var(--text-grey)",
                          backgroundColor: "var(--color)",
                        }}
                      >
                        {dept}
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
                      color: "var(--text-grey)",
                    }}
                  >
                    Pricing Configuration
                  </InputLabel>
                  <Select
                    size="small"
                    name="pricing"
                    value={formData.pricing}
                    onChange={handleChange}
                    label="Pricing Configuration"
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--text-grey)",
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
                        color: "var(--text-grey)", // Icon color
                      },
                    }}
                  >
                    {pricing.map((price) => (
                      <MenuItem
                        key={price}
                        value={price}
                        style={{
                          fontSize: "0.8rem",
                          color: "var(--text-grey)",
                          backgroundColor: "var(--color)",
                        }}
                      >
                        {price}
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
                      color: "var(--text-grey)",
                    }}
                  >
                    Authentication Type
                  </InputLabel>
                  <Select
                    size="small"
                    name="authentication"
                    value={formData.authentication}
                    onChange={handleChange}
                    label=" Authentication Type"
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--text-grey)",
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
                        color: "var(--text-grey)", // Icon color
                      },
                    }}
                  >
                    {authentication.map((auth) => (
                      <MenuItem
                        key={auth}
                        value={auth}
                        style={{
                          fontSize: "0.8rem",
                          color: "var(--text-grey)",
                          backgroundColor: "var(--color)",
                        }}
                      >
                        {auth}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container alignItems="center" spacing={1}>
                  <Grid item>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.pin}
                          onChange={handleChange}
                          name="pin"
                          sx={{
                            color: "var(--text-grey)",
                            "&.Mui-checked": {
                              color: "var(--btn-bg)",
                            },
                            padding: 1,
                          }}
                        />
                      }
                      label="2FA - PIN Required"
                      labelPlacement="end"
                      sx={{
                        color: "var(--text-grey)",
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

          {/* Option Section ==========================================*/}
          <Box
            sx={{
              backgroundColor: "var(--background-color)",
              padding: "1rem",
              margin: "2rem 0 0",
              color: "var(--text-grey)",
            }}
          >
            <Typography variant="h10" component="h4" gutterBottom>
              Options
            </Typography>
          </Box>
          <Box
            sx={{
              padding: "3rem",
              backgroundColor: "var(--color)",
              color: "var(--text-grey)",
              borderRadius: " 1rem  ",
              boxShadow: "var(--box-shadow)",
            }}
          >
            <Grid item xs={12}>
              <Grid container>
                {option.map((type) => (
                  <Grid
                    item
                    xs={6}
                    md={4}
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
                            color: "var(--text-grey)",
                            padding: "0",

                            "&.Mui-checked": {
                              color: "var(--btn-bg)",
                            },
                            padding: 1,
                          }}
                        />
                      }
                      label={type}
                      labelPlacement="end"
                      sx={{
                        color: "var(--text-grey)",
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

            {/* ==============================status======================= */}
            <Grid item xs={12} md={6}>
              <FormControl fullWidth variant="outlined">
                <Box
                  sx={{
                    marginTop: "2rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "2rem",
                    width: { xs: "100%", sm: "80%", md: "60%" },
                    flexDirection: { xs: "column", sm: "row" },
                  }}
                >
                  {isEditMode && (
                    <>
                      <Typography
                        variant="h7"
                        sx={{ color: "var(--text-grey)", fontSize: "0.8rem" }}
                      >
                        Device status
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <Box
                          sx={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            backgroundColor:
                              status === "online" ? "green" : "red",
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{
                            color: "var(--text-grey)",
                            fontSize: "0.8rem",
                          }}
                        >
                          {status === "online" ? "Online" : "Offline"}
                        </Typography>
                      </Box>
                    </>
                  )}
                </Box>
              </FormControl>
            </Grid>
          </Box>
          <div>
            <ActionButtonWithModal
              isEditMode={isEditMode}
              isModalOpen={isModalOpen}
              handleSubmit={handleSubmit}
              handleClose={handleClose}
              updateText="Update"
              addText="Add device"
              icon={AddToQueueIcon}
            />
          </div>
        </form>
      </Container>
    </>
  );
}
