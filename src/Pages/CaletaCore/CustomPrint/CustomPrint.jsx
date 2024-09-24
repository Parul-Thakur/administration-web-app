import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Container,
  Typography,
  Box,
  TextField,
  Autocomplete,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Divider,
} from "@mui/material";
import CustomTable from "../../../Components/Common/CustomTable/CustomTable";
import { singleUserLogons } from "../Cashier/userData";
import { customData } from "./customData";
import UserDetailsModal from "./UserDetailsModal";
import SaveModal from "../../../Components/Common/SaveModal";
import ReportRadioBtn from "../Reports/ReportRadiobtn";

const printQueue = [
  "Caleta Print",
  "Import",
  " Do not Import",
  "Import and Lock",
];

export default function CustomPrint() {
  const [data, setData] = useState(customData);
  const [formData, setFormData] = useState({
    selectedOption1: "1",
    selectedOption2: "6",
    hostname: "",
    delimiter: "",
    delimiterIndex: "",
    searchValue: "",
    line: "",
    startI: "",
    endI: "",
    users: "",
    devices: "",
  });
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleChange = (event) => {
    const { name: inputName, value: inputValue } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [inputName]: inputValue,
    }));
    if (inputName === "selectedOption1" && inputValue === "1") {
      setFilteredUsers(singleUserLogons);
    }
  };
  const [modalOpen, setIsModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState([]);

  const handleClick = (id) => {
    const selectedData = customData.find((item) => item.id === id);
    handleViewClick(selectedData);
  };

  const handleViewClick = (data) => {
    if (data && Array.isArray(data.users)) {
      setSelectedData(data.users); // Extract the users array from the object
      setIsModalOpen(true);
    } else {
      console.error(
        "Expected an object with a users array, but received:",
        data
      );
    }
  };
  const [isModalOpen, setModalOpen] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };
  const handleClose = () => {
    setModalOpen(false);
  };
  const columns = React.useMemo(
    () => [
      {
        Header: "Condition",
        accessor: "condition",
      },
      {
        Header: "Outcome Type",
        accessor: "outcomeType",
      },
      {
        Header: "Output",
        accessor: "output",
        Cell: ({ row }) => (
          <Button
            onClick={() => handleViewClick(row.original)}
            sx={{
              fontSize: "0.8rem",
              color: "var(--btn-text)",
              padding: "0.5rem 1.5rem",
              transition: "transform 0.2s ease",
              backgroundColor: "var(--btn-bg)",
              borderRadius: "1rem",
              "&:hover": {
                backgroundColor: "var(--btn-bg)",
              },
            }}
          >
            View
          </Button>
        ),
      },
    ],
    []
  );

  const option1 = [
    { value: "1", label: "Username Equals to" },
    { value: "2", label: "Hostname Equals to" },
    { value: "3", label: "Print Queue Equals to" },
    { value: "4", label: "Username at" },
    { value: "5", label: "Custom Position" },
  ];

  const option2 = [
    { value: "6", label: "Delegate Print To Users" },
    { value: "7", label: "Direct Print To Devices" },
  ];
  const tableVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  return (
    <>
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
        Custom Print
      </Typography>
      <Divider
        orientation="horizontal"
        flexItem
        sx={{
          margin: " 0.5rem",
          backgroundColor: "var(--text-head)",
          opacity: "0.3",
        }}
      />
      <motion.div
        className="reportMain"
        variants={tableVariants}
        initial="hidden"
        animate="visible"
      >
        <Container
          // component={Paper}
          elevation={3}
          style={{ padding: 0, margin: "0 0 3rem" }}
        >
          <Box
            sx={{
              backgroundColor: "var(--background-color)",
              padding: "1rem",
              margin: "2rem 0 0",
              color: "var(--text-color)",
            }}
          >
            <Typography variant="h8" component="h4" gutterBottom>
              Add Custom Print Settings
            </Typography>
          </Box>
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                boxShadow: "var(--box-shadow)",
                backgroundColor: "var(--color)",
                borderRadius: "8px",
                marginBottom: "2rem",
                padding: "2rem 0rem 3rem 2rem",
              }}
            >
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  <ReportRadioBtn
                    label="Print Condition*"
                    options={option1}
                    selectedValue={formData.selectedOption1} // Use state for first group
                    handleChange={(e) =>
                      handleChange({
                        target: {
                          name: "selectedOption1",
                          value: e.target.value,
                        },
                      })
                    }
                  />
                </Grid>
                {formData.selectedOption1 === "1" && (
                  <Grid item xs={12} md={6}>
                    <Autocomplete
                      freeSolo
                      options={filteredUsers.map((user) => user.userLogon)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="User Logon*"
                          variant="outlined"
                          size="small"
                          InputProps={{
                            ...params.InputProps,
                            style: {
                              fontSize: "0.8rem",
                              color: "var(--text-color)",
                              backgroundColor: "var(--color)",
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
                      )}
                    />
                  </Grid>
                )}
                {formData.selectedOption1 === "2" && (
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      size="small"
                      label="PC Hostname*"
                      variant="outlined"
                      name="hostname"
                      value={formData.hostname}
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
                )}
                {formData.selectedOption1 === "3" && (
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth variant="outlined" size="small">
                      <InputLabel
                        style={{
                          fontSize: "0.8rem",
                          color: "var(--text-color)",
                        }}
                      >
                        Print Queue*
                      </InputLabel>
                      <Select
                        size="small"
                        name="printQueue"
                        value={formData.printQueue}
                        onChange={handleChange}
                        label="  Print Queue*"
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
                        {printQueue.map((p) => (
                          <MenuItem
                            key={p}
                            value={p}
                            style={{
                              fontSize: "0.8rem",
                              color: "var(--text-color)",
                              backgroundColor: "var(--color)",
                            }}
                          >
                            {p}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                )}
                {formData.selectedOption1 === "4" && (
                  <>
                    <Grid item xs={12} md={4}>
                      <TextField
                        fullWidth
                        size="small"
                        label="Delimiter*"
                        variant="outlined"
                        name="delimiter"
                        value={formData.delimiter}
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
                    <Grid item xs={12} md={4}>
                      <TextField
                        fullWidth
                        size="small"
                        label="Delimiter Index*"
                        variant="outlined"
                        name="delimiterIndex"
                        value={formData.delimiterIndex}
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
                  </>
                )}
                {formData.selectedOption1 === "5" && (
                  <>
                    <Grid item xs={12} md={4}>
                      <TextField
                        fullWidth
                        size="small"
                        label="Search Value*"
                        variant="outlined"
                        name="searchValue"
                        value={formData.searchValue}
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
                    <Grid item xs={12} md={4}>
                      <TextField
                        fullWidth
                        size="small"
                        label="Line Number*"
                        variant="outlined"
                        name="line"
                        value={formData.line}
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
                    <Grid item xs={12} md={2}>
                      <TextField
                        fullWidth
                        size="small"
                        label="Start Index*"
                        variant="outlined"
                        name="startI"
                        value={formData.line}
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
                    <Grid item xs={12} md={2}>
                      <TextField
                        fullWidth
                        size="small"
                        label="End Index*"
                        variant="outlined"
                        name="endI"
                        value={formData.endI}
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
                  </>
                )}
              </Grid>
            </Box>

            <Box
              sx={{
                boxShadow: "var(--box-shadow)",
                backgroundColor: "var(--color)",
                borderRadius: "8px",
                marginBottom: "2rem",
                padding: "2rem 0rem 3rem 2rem",
              }}
            >
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  <ReportRadioBtn
                    label="Output Condition**"
                    options={option2}
                    selectedValue={formData.selectedOption2} // Use state for second group
                    handleChange={(e) =>
                      handleChange({
                        target: {
                          name: "selectedOption2",
                          value: e.target.value,
                        },
                      })
                    }
                  />
                </Grid>
                {formData.selectedOption2 === "6" && (
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      size="small"
                      label="Users*"
                      variant="outlined"
                      name="users"
                      value={formData.users}
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
                )}
                {formData.selectedOption2 === "7" && (
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      size="small"
                      label="Devices*"
                      variant="outlined"
                      name="devices"
                      value={formData.devices}
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
                )}
              </Grid>
            </Box>
          </form>
          <Divider
            orientation="horizontal"
            flexItem
            sx={{
              margin: " 0.5rem",
              backgroundColor: "var(--text-head)",
              opacity: "0.3",
            }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
            }}
          >
            <Button
              // variant="contained"
              sx={{
                fontSize: "0.8rem",
                color: "var(--text-color)",
                padding: "0.5rem 1.5rem",
                transition: "transform 0.2s ease",
                borderRadius: "1rem",
                "&:hover": {
                  backgroundColor: "var(--hover3)",
                },
              }}
              onClick={handleSubmit}
            >
              Add Print Configuration
            </Button>

            <SaveModal
              isOpen={isModalOpen}
              onClose={handleClose}
              modalTitle="Confirm Addition"
              modalContent="Are you sure you want to add this item? Please review the details before confirming."
              pageType="add"
              isNoNav={true}
              isError={false}
            />
          </Box>

          <Box
          // sx={{
          //   padding: "3rem",
          //   backgroundColor: "var(--color)",
          //   color: "var(--text-color)",
          //   borderRadius: " 1rem  ",
          //   boxShadow: "var(--box-shadow)",
          // }}
          >
            <Box
              sx={{
                backgroundColor: "var(--background-color)",
                padding: "1rem",
                color: "var(--text-color)",
              }}
            >
              <Typography variant="h8" component="h4" gutterBottom>
                List of all printed items
              </Typography>
            </Box>
            <CustomTable
              columns={columns}
              data={data}
              localStorageKey="customData"
              setData={setData}
              isCustomPage={true}
            />
            <UserDetailsModal
              open={modalOpen}
              onClose={() => setIsModalOpen(false)}
              data={selectedData}
              columns={[
                { Header: "User Logon", accessor: "userLogon" },
                { Header: "Email", accessor: "email" },
                { Header: "Name", accessor: "name" },
              ]}
            />
          </Box>
        </Container>
      </motion.div>
    </>
  );
}
