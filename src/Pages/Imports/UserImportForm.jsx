import React, { useState, useEffect } from "react";
import DynamicRadioButton from "../../Components/DynamicRadioButton ";
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
  Button,
  Typography,
  Box,
  Paper,
  OutlinedInput,
  InputAdornment,
  Autocomplete,
} from "@mui/material";

import ActionButtonWithModal from "../../Components/ActionButtonWithModal/ActionButtonWithModal";
import ReportRadioBtn from "../Reports/ReportRadiobtn";
const disabledaccounts = ["Import", " Do not Import", "Import and Lock"];
const newusersemailtemplate = ["HR", "Finance", "IT", "Marketing"];
const imports = ["None", "Pre Pay", "Invoice"];
const options = ["Add Users", "Modify Users", "Delete Users", "Add OU"];

export default function UserImportForm({ isEditMode, existingData, onSubmit }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(userData);

  const [formData, setFormData] = useState({
    selectedOptions: [],
    name: "",
    newusersemailtemplate: "",
    runType: "option1",
    specificuser: false,
    searchuser: "",
    accesskey: false,
    pin: false,
    sourceType: "optionA",
    filepath: "",
    header: "",
    userlogon: "",
    csvname: "",
    email: "",
    csvdescription: "",
    csvaccesscode: "",
    csvdepartment: "",
    csvcostcode: "",
    server: "",
    useraccount: "",
    ssl: false,
    password: "",
    confirmpassword: "",
    searchroot: "",
    searchfilter: "",
    disabledaccounts: "",
    description: false,
    accesscode: false,
    department: false,
    costcode: false,
    descriptionText: "",
    accesscodeText: "",
    departmentText: "",
    costcodeText: "",
  });
  const runTypeOptions = [
    { value: "option1", label: "Manual" },
    { value: "option2", label: "One Time" },
    { value: "option3", label: "Hourly" },
    { value: "option4", label: "Daily" },
    { value: "option5", label: "Weekly" },
    { value: "option6", label: "Monthly" },
  ];

  const sourceTypeOptions = [
    { value: "optionA", label: "CSV File" },
    { value: "optionB", label: "Active Directory" },
    { value: "optionC", label: "Azure Active Directory" },
  ];

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
  const commonTextFieldProps = {
    InputLabelProps: {
      shrink: true,
      style: {
        fontSize: "0.8rem",
        color: "var(--text-grey)",
      },
    },
    fullWidth: true,
    InputProps: {
      style: {
        fontSize: "0.8rem",
        color: "var(--text-grey)",
        height: "2.5rem",
      },
    },
    sx: {
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
    },
  };
  return (
    <Container
      // component={Paper}
      elevation={3}
      style={{ padding: 0, margin: "0 0 3rem" }}
    >
      {/*================================== User Details Section ===================================================*/}
      <form onSubmit={handleSubmit}>
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
                  New Users Email Template
                </InputLabel>
                <Select
                  size="small"
                  name=" newusersemailtemplate"
                  value={formData.newusersemailtemplate}
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
                  {newusersemailtemplate.map((temp) => (
                    <MenuItem
                      key={temp}
                      value={temp}
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--text-grey)",
                        backgroundColor: "var(--color)",
                      }}
                    >
                      {temp}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={12}>
              <ReportRadioBtn
                options={runTypeOptions}
                label="Run Type"
                name="runType"
                selectedValue={formData.runType}
                handleChange={handleChange}
              />
            </Grid>
            {["option1", "option3", "option4", "option5", "option6"].includes(
              formData.runType
            ) && (
              <Grid container spacing={2} sx={{ margin: "2rem .5rem 0" }}>
                <Grid item xs={12} md={4}>
                  <TextField
                    label="Start Date"
                    type="date"
                    {...commonTextFieldProps}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    label="End Date"
                    type="date"
                    {...commonTextFieldProps}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    label="Time"
                    type="time"
                    {...commonTextFieldProps}
                  />
                </Grid>
              </Grid>
            )}

            {formData.runType === "option2" && (
              <Grid container spacing={3} sx={{ margin: "2rem .5rem 0" }}>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Start Date"
                    type="date"
                    {...commonTextFieldProps}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Start Time"
                    type="time"
                    {...commonTextFieldProps}
                  />
                </Grid>
              </Grid>
            )}
            {/* <Grid item xs={12} md={12}>
              <DynamicRadioButton options={runTypeOptions} label="Run Type" />
            </Grid> */}
          </Grid>
        </Box>

        {/*======================= Options Section=============================================================== */}
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
          {formData["Add Users"] && (
            <>
              <Grid container alignItems="center">
                <Grid item xs={12} md={4} sx={{ padding: "0 0 1rem" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.specificuser}
                        onChange={handleChange}
                        name="specificuser"
                        sx={{
                          color: "var(--text-grey)",
                          "&.Mui-checked": {
                            color: "var(--btn-bg)",
                          },
                          padding: 1,
                        }}
                      />
                    }
                    label="Apply settings from a specific user"
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
                <Grid item xs={12} md={8} sx={{ padding: "0 0 1rem" }}>
                  <Autocomplete
                    freeSolo
                    options={filteredUsers.map((user) => user.name)}
                    onInputChange={(event, newInputValue) =>
                      setFormData({ ...formData, searchuser: newInputValue })
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Search User"
                        variant="outlined"
                        size="small"
                        InputProps={{
                          ...params.InputProps,
                          style: {
                            fontSize: "0.8rem",
                            color: "var(--text-grey)",
                            backgroundColor: formData.specificuser
                              ? ""
                              : "var(--grey)",
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
                            borderColor: "var(--btn-bg)",
                          },
                        }}
                      />
                    )}
                    disabled={!formData.specificuser} // Disable if checkbox is not checked
                  />
                </Grid>
              </Grid>
              <Grid container alignItems="center" sx={{ padding: "0 0 1rem" }}>
                <Grid item xs={12} md={6}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.accesskey}
                        onChange={handleChange}
                        name="accesskey"
                        sx={{
                          color: "var(--text-grey)",
                          "&.Mui-checked": {
                            color: "var(--btn-bg)",
                          },
                        }}
                      />
                    }
                    label="Generate First Access Key"
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
                <Grid item xs={12} md={6}>
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
                        }}
                      />
                    }
                    label="Generate PIN"
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
            </>
          )}
          <Grid item xs={12} md={12} mt={2}>
            <ReportRadioBtn
              options={sourceTypeOptions}
              label="Source Type*"
              name="sourceType"
              selectedValue={formData.sourceType}
              handleChange={handleChange}
            />
          </Grid>
          {formData.sourceType === "optionA" && (
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
                      label="User Logon"
                      variant="outlined"
                      name="userlogon"
                      value={formData.userlogon}
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
                      label="Name"
                      variant="outlined"
                      name="csvname"
                      value={formData.csvname}
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
                      label="Email"
                      variant="outlined"
                      name="email"
                      value={formData.email}
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
                      label="Description"
                      variant="outlined"
                      name="csvdescription"
                      value={formData.csvdescription}
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
                      label="Access Code"
                      variant="outlined"
                      name="csvaccesscode"
                      value={formData.csvaccesscode}
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
                      label="Department"
                      variant="outlined"
                      name="csvdepartment"
                      value={formData.csvdepartment}
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
                      label="Cost Code"
                      variant="outlined"
                      name="csvcostcode"
                      value={formData.csvcostcode}
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
          {formData.sourceType === "optionB" && (
            <>
              {/*======================= Active Directory Properties Section================================ */}
              <Box
                sx={{
                  backgroundColor: "var(--color)",
                  padding: "1rem",
                  margin: "2rem 0 0",
                  color: "var(--text-grey)",
                }}
              >
                <Typography variant="h10" component="h4" gutterBottom>
                  Active Directory Properties
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
                      label="Server*"
                      variant="outlined"
                      name="server"
                      value={formData.server}
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
                      label="User Account*"
                      variant="outlined"
                      name="useraccount"
                      value={formData.useraccount}
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
                      label="Password*"
                      variant="outlined"
                      type="password"
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
                          borderColor: "var(--primary-color)",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      size="small"
                      label="Confirm Password*"
                      variant="outlined"
                      name="confirmpassword"
                      type="password"
                      value={formData.confirmpassword}
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
                      label="Search Root *"
                      variant="outlined"
                      name="searchroot"
                      value={formData.searchroot}
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
                      label="Search Filter"
                      variant="outlined"
                      name="searchfilter"
                      value={formData.searchfilter}
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
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.ssl}
                          onChange={handleChange}
                          name="ssl"
                          sx={{
                            color: "var(--text-grey)",
                            "&.Mui-checked": {
                              color: "var(--btn-bg)",
                            },
                          }}
                        />
                      }
                      label="Use SSL Connection"
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
              {/*======================= Active Directory Configuration Section================================ */}
              <Box
                sx={{
                  backgroundColor: "var(--color)",
                  padding: "1rem",
                  margin: "2rem 0 0",
                  color: "var(--text-grey)",
                }}
              >
                <Typography variant="h10" component="h4" gutterBottom>
                  Active Directory Configuration
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
                <Grid item xs={12} md={4}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "3rem",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "0.8rem",
                        color: "var(--text-grey)",
                      }}
                    >
                      Disabled Accounts
                    </Typography>
                    <FormControl
                      variant="outlined"
                      sx={{
                        flexGrow: 1,
                        maxWidth: "30rem",
                      }}
                    >
                      <InputLabel
                        style={{
                          fontSize: "0.8rem",
                          color: "var(--text-grey)",
                        }}
                      >
                        Disabled Accounts
                      </InputLabel>
                      <Select
                        size="small"
                        name="disabledaccounts"
                        value={formData.disabledaccounts}
                        onChange={handleChange}
                        label="Do not import"
                        style={{
                          fontSize: "0.8rem",
                          color: "var(--text-grey)",
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
                          "& .MuiSelect-icon": {
                            color: "var(--text-grey)",
                          },
                        }}
                      >
                        {disabledaccounts.map((a) => (
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
                  </Box>
                </Grid>
              </Box>
              {/*======================= Optional Fields Section================================ */}
              <Box
                sx={{
                  backgroundColor: "var(--color)",
                  padding: "1rem",
                  margin: "2rem 0 0",
                  color: "var(--text-grey)",
                }}
              >
                <Typography variant="h10" component="h4" gutterBottom>
                  Optional Fields
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
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.description}
                          onChange={handleChange}
                          name="description"
                          sx={{
                            color: "var(--text-grey)",
                            "&.Mui-checked": {
                              color: "var(--btn-bg)",
                            },
                          }}
                        />
                      }
                      label="Description"
                      labelPlacement="end"
                      sx={{
                        color: "var(--text-grey)",
                        display: "flex",
                        alignItems: "center",
                        "& .MuiTypography-root": {
                          fontSize: "0.8rem",
                        },
                      }}
                    />
                    {formData.description && (
                      <TextField
                        name="descriptionText"
                        value={formData.descriptionText}
                        onChange={handleChange}
                        placeholder="Enter description"
                        variant="outlined"
                        size="small"
                        fullWidth
                        sx={{
                          marginTop: "0.5rem",
                          "& .MuiInputBase-root": {
                            fontSize: "0.8rem",
                            color: "var(--text-grey)",
                          },
                        }}
                      />
                    )}
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.accesscode}
                          onChange={handleChange}
                          name="accesscode"
                          sx={{
                            color: "var(--text-grey)",
                            "&.Mui-checked": {
                              color: "var(--btn-bg)",
                            },
                          }}
                        />
                      }
                      label="Access Code"
                      labelPlacement="end"
                      sx={{
                        color: "var(--text-grey)",
                        display: "flex",
                        alignItems: "center",
                        "& .MuiTypography-root": {
                          fontSize: "0.8rem",
                        },
                      }}
                    />
                    {formData.accesscode && (
                      <TextField
                        name="accesscodeText"
                        value={formData.accesscodeText}
                        onChange={handleChange}
                        placeholder="Enter access code"
                        variant="outlined"
                        size="small"
                        fullWidth
                        sx={{
                          marginTop: "0.5rem",
                          "& .MuiInputBase-root": {
                            fontSize: "0.8rem",
                            color: "var(--text-grey)",
                          },
                        }}
                      />
                    )}
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.department}
                          onChange={handleChange}
                          name="department"
                          sx={{
                            color: "var(--text-grey)",
                            "&.Mui-checked": {
                              color: "var(--btn-bg)",
                            },
                          }}
                        />
                      }
                      label="Department"
                      labelPlacement="end"
                      sx={{
                        color: "var(--text-grey)",
                        display: "flex",
                        alignItems: "center",
                        "& .MuiTypography-root": {
                          fontSize: "0.8rem",
                        },
                      }}
                    />
                    {formData.department && (
                      <TextField
                        name="departmentText"
                        value={formData.departmentText}
                        onChange={handleChange}
                        placeholder="Enter department"
                        variant="outlined"
                        size="small"
                        fullWidth
                        sx={{
                          marginTop: "0.5rem",
                          "& .MuiInputBase-root": {
                            fontSize: "0.8rem",
                            color: "var(--text-grey)",
                          },
                        }}
                      />
                    )}
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.costcode}
                          onChange={handleChange}
                          name="costcode"
                          sx={{
                            color: "var(--text-grey)",
                            "&.Mui-checked": {
                              color: "var(--btn-bg)",
                            },
                          }}
                        />
                      }
                      label="Cost Code"
                      labelPlacement="end"
                      sx={{
                        color: "var(--text-grey)",
                        display: "flex",
                        alignItems: "center",
                        "& .MuiTypography-root": {
                          fontSize: "0.8rem",
                        },
                      }}
                    />
                    {formData.costcode && (
                      <TextField
                        name="costcodeText"
                        value={formData.costcodeText}
                        onChange={handleChange}
                        placeholder="Enter cost code"
                        variant="outlined"
                        size="small"
                        fullWidth
                        sx={{
                          marginTop: "0.5rem",
                          "& .MuiInputBase-root": {
                            fontSize: "0.8rem",
                            color: "var(--text-grey)",
                          },
                        }}
                      />
                    )}
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
            addText="Add user"
            // icon={PersonAddAlt1Icon}
          />
        </div>
      </form>
    </Container>
  );
}
