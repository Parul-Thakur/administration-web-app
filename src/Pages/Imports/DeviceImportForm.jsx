import React, { useState, useEffect } from "react";
import { userData } from "./ImportData";
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
  Typography,
  Box,
} from "@mui/material";
import ReportRadioBtn from "../Reports/ReportRadiobtn";
import ActionButtonWithModal from "../../Components/ActionButtonWithModal/ActionButtonWithModal";
const pricing = ["Import", " Do not Import", "Import and Lock"];
const department = ["HR", "Finance", "IT", "Marketing"];
const server = ["None", "Pre Pay", "Invoice"];
const options = ["Add Devices", "Modify Devices"];
const auth = ["Access Code", "Windows Authentication"];

export default function UserImportForm({ isEditMode, existingData, onSubmit }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(userData);
  const deviceSourceTypeOptions = [
    { value: "S1", label: "CSV File" },
    { value: "S2", label: "IP Range" },
  ];

  const [formData, setFormData] = useState({
    selectedOptions: [],
    name: "",
    password: "",
    add: false,
    modify: false,
    server: "",
    department: "",
    pricing: "",
    monitor: false,
    secure: false,
    read: false,
    prepay: false,
    login: false,
    auth: "",
    fapin: "",
    sourceType: "S1",
  });

  useEffect(() => {
    if (isEditMode && existingData) {
      setFormData(existingData);
    }
  }, [isEditMode, existingData]);

  useEffect(() => {
    // Filter users based on the search input
    const searchValue = searchTerm.toLowerCase();
    const filtered = userData.filter((user) =>
      user.name.toLowerCase().includes(searchValue)
    );
    setFilteredUsers(filtered);
  }, [searchTerm, userData]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

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
    console.log("Form submission canceled");
  };

  return (
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
            Information
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
                label="Name"
                variant="outlined"
                name="name"
                value={formData.name}
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
                    borderColor: "var(--primary-color)",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                size="small"
                label="Password"
                variant="outlined"
                name="password"
                type="password"
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
                    borderColor: "var(--primary-color)",
                  },
                }}
              />
            </Grid>
          </Grid>
        </Box>
        {/*=======================Import Options Section=============================================================== */}
        <Box
          sx={{
            backgroundColor: "var(--background-color)",
            padding: "1rem",
            margin: "2rem 0 0",
            color: "var(--text-grey)",
          }}
        >
          <Typography variant="h10" component="h4" gutterBottom>
            Import Options
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
          <Grid item xs={12} spacing={2}>
            <Grid container>
              {options.map((type) => (
                <Grid
                  item
                  xs={6}
                  md={3}
                  key={type}
                  sx={{ padding: "0 0 1rem" }}
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
        </Box>
        {/*======================= Device Options Section================================ */}
        <Box
          sx={{
            backgroundColor: "var(--background-color)",
            padding: "1rem",
            margin: "2rem 0 0",
            color: "var(--text-grey)",
          }}
        >
          <Typography variant="h10" component="h4" gutterBottom>
            Device Options
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
                  name=" server"
                  value={formData.server}
                  onChange={handleChange}
                  label="New Users Email Template"
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--text-grey)",
                  }}
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "var(--grey) !important", // Force white border color
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "var(--btn-bg) !important", // Ensure focused border is also white
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "var(--btn-bg) !important", // Ensure hover border is also white
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
                  name=" department"
                  value={formData.department}
                  onChange={handleChange}
                  label="New Users Email Template"
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--text-grey)",
                  }}
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "var(--grey) !important", // Force white border color
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "var(--btn-bg) !important", // Ensure focused border is also white
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "var(--btn-bg) !important", // Ensure hover border is also white
                    },
                    "& .MuiInputLabel-root": {
                      color: "var(--text-head)", // Label color
                    },
                    "& .MuiSelect-icon": {
                      color: "var(--text-grey)", // Icon color
                    },
                  }}
                >
                  {department.map((d) => (
                    <MenuItem
                      key={d}
                      value={d}
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--text-grey)",
                        backgroundColor: "var(--color)",
                      }}
                    >
                      {d}
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
                    // top: "50%",
                    // left: "3%",
                    // transform: "translateY(-50%)",
                  }}
                >
                  Pricing Configuration
                </InputLabel>
                <Select
                  size="small"
                  name=" pricing"
                  value={formData.pricing}
                  onChange={handleChange}
                  label="New Users Email Template"
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--text-grey)",
                  }}
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "var(--grey) !important", // Force white border color
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "var(--btn-bg) !important", // Ensure focused border is also white
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "var(--btn-bg) !important", // Ensure hover border is also white
                    },
                    "& .MuiInputLabel-root": {
                      color: "var(--text-head)", // Label color
                    },
                    "& .MuiSelect-icon": {
                      color: "var(--text-grey)", // Icon color
                    },
                  }}
                >
                  {pricing.map((p) => (
                    <MenuItem
                      key={p}
                      value={p}
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--text-grey)",
                        backgroundColor: "var(--color)",
                      }}
                    >
                      {p}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.monitor}
                    onChange={handleChange}
                    name="monitor"
                    sx={{
                      color: "var(--text-grey)",
                      "&.Mui-checked": {
                        color: "var(--btn-bg)",
                      },
                    }}
                  />
                }
                label="Device Monitoring"
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
            <Grid item xs={12} md={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.secure}
                    onChange={handleChange}
                    name="secure"
                    sx={{
                      color: "var(--text-grey)",
                      "&.Mui-checked": {
                        color: "var(--btn-bg)",
                      },
                    }}
                  />
                }
                label="Secure Print"
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
            <Grid item xs={12} md={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.read}
                    onChange={handleChange}
                    name="read"
                    sx={{
                      color: "var(--text-grey)",
                      "&.Mui-checked": {
                        color: "var(--btn-bg)",
                      },
                    }}
                  />
                }
                label="Card Reader"
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
            <Grid item xs={12} md={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.login}
                    onChange={handleChange}
                    name="login"
                    sx={{
                      color: "var(--text-grey)",
                      "&.Mui-checked": {
                        color: "var(--btn-bg)",
                      },
                    }}
                  />
                }
                label="Print All At Login"
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
            <Grid item xs={12} md={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.prepay}
                    onChange={handleChange}
                    name="prepay"
                    sx={{
                      color: "var(--text-grey)",
                      "&.Mui-checked": {
                        color: "var(--btn-bg)",
                      },
                    }}
                  />
                }
                label="Allow Pre-Pay User"
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
                  name=" auth"
                  value={formData.auth}
                  onChange={handleChange}
                  label="New Users Email Template"
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--text-grey)",
                  }}
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "var(--grey) !important", // Force white border color
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "var(--btn-bg) !important", // Ensure focused border is also white
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "var(--btn-bg) !important", // Ensure hover border is also white
                    },
                    "& .MuiInputLabel-root": {
                      color: "var(--text-head)", // Label color
                    },
                    "& .MuiSelect-icon": {
                      color: "var(--text-grey)", // Icon color
                    },
                  }}
                >
                  {auth.map((a) => (
                    <MenuItem
                      key={a}
                      value={a}
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--text-grey)",
                        backgroundColor: "var(--color)",
                      }}
                    >
                      {a}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.fapin}
                    onChange={handleChange}
                    name="fapin"
                    sx={{
                      color: "var(--text-grey)",
                      "&.Mui-checked": {
                        color: "var(--btn-bg)",
                      },
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
            <Grid item xs={12} md={12}>
              <ReportRadioBtn
                options={deviceSourceTypeOptions}
                label="Source Type*"
                name="sourceType"
                selectedValue={formData.sourceType}
                handleChange={handleChange}
              />
              {/* <DynamicRadioButton
                options={deviceSourceTypeOptions}
                label="Source Type*"
              /> */}
            </Grid>
          </Grid>
          {formData.sourceType === "S1" && (
            <>
              <Box
                sx={{
                  backgroundColor: "var(--color)",
                  padding: "1rem",
                  margin: "2rem 0 0",
                  color: "var(--text-grey)",
                }}
              >
                <Typography variant="h10" component="h4" gutterBottom>
                  CSV Properties
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
                      label="File path*"
                      variant="outlined"
                      name="filepath"
                      value={formData.filepath}
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
                          borderColor: "var(--primary-color)",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      size="small"
                      label="Separator"
                      variant="outlined"
                      value=";"
                      InputProps={{
                        readOnly: true,
                        style: {
                          fontSize: "0.8rem",
                          color: "var(--text-grey)",
                          border: "1px solid var(--grey)", //
                          backgroundColor: "transparent",
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
                          borderColor: "var(--primary-color)",
                        },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.header}
                          onChange={handleChange}
                          name="header"
                          sx={{
                            color: "var(--text-grey)",
                            "&.Mui-checked": {
                              color: "var(--btn-bg)",
                            },
                          }}
                        />
                      }
                      label="First line is a header"
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
              </Box>
              <Box
                sx={{
                  backgroundColor: "var(--color)",
                  padding: "1rem",
                  margin: "2rem 0 0",
                  color: "var(--text-grey)",
                }}
              >
                <Typography variant="h10" component="h4" gutterBottom>
                  CSV Fields
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
                      label="IP Address*"
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
                          borderColor: "var(--primary-color)",
                        },
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>
            </>
          )}
          {formData.sourceType === "S2" && (
            <>
              {/*======================= IP Range Section================================ */}
              <Box
                sx={{
                  backgroundColor: "var(--color)",
                  padding: "1rem",
                  margin: "2rem 0 0",
                  color: "var(--text-grey)",
                }}
              >
                <Typography variant="h10" component="h4" gutterBottom>
                  IP Range
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
                      label="Start*"
                      variant="outlined"
                      name="start"
                      value={formData.start}
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
                          borderColor: "var(--primary-color)",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      size="small"
                      label="End*"
                      variant="outlined"
                      name="end"
                      value={formData.end}
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
                          borderColor: "var(--primary-color)",
                        },
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>
            </>
          )}
        </Box>

        {/* Form Actions */}
        <div>
          <ActionButtonWithModal
            isEditMode={isEditMode}
            isModalOpen={isModalOpen}
            handleSubmit={handleSubmit}
            handleClose={handleClose}
            updateText="Update"
            addText="Add device"
            // icon={PersonAddAlt1Icon}
          />
        </div>
        {/* <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            backgroundColor: "var(--color)",
          }}
        >
          <Button
            variant="contained"
            sx={{
              fontSize: "0.8rem",
              backgroundColor: "var(--secondary-color)",
              color: "var(--text-color2)",
              padding: "0.5rem 1.5rem",
              transition: "transform 0.2s ease",
              "&:hover": {
                transform: "translateY(-2px)",
                backgroundColor: "var(--primary-color)",
              },
            }}
            onClick={handleSubmit}
          >
            {isEditMode ? "Update" : "Add User Import"}
          </Button>

          <SaveModal
            isOpen={isModalOpen}
            onClose={handleClose}
            modalTitle={isEditMode ? "Confirm Update" : "Confirm Addition"}
            modalContent={
              isEditMode
                ? "Are you sure you want to update this item? Please ensure the changes are correct before proceeding."
                : "Are you sure you want to add this item? Please review the details before confirming."
            }
            pageType={isEditMode ? "edit" : "add"}
            isNoNav={false}
            isError={false}
          />
        </Box> */}
      </form>
    </Container>
  );
}
