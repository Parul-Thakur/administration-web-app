import React, { useState } from "react";

import ClearIcon from "@mui/icons-material/Clear";
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
import NavbarMini from "../../../Components/Common/NavbarMini/NavbarMini";
import CustomTable from "../../../Components/Common/CustomTable/CustomTable";
import { devicesGroupsData } from "./devicesData";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { motion } from "framer-motion";

export default function DeviceGroups() {
  const [data, setData] = useState(devicesGroupsData);
  console.log(data);
  const tableVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  const [formData, setFormData] = useState({
    groupsJoin: "",
  });
  const columns = React.useMemo(
    () => [
      {
        Header: "Group Name",
        accessor: "name",
      },
      {
        Header: "Action",
        accessor: "id",
        Cell: ({ row }) => (
          <Button
            variant="outlined"
            sx={{
              fontSize: "0.8rem",
              color: "var(--text-color)",
              borderColor: "var(--btn-bg)",
              transition: "transform 0.2s ease",
              "&:hover": {
                borderColor: "red",
                transform: "translateY(5px)",
                color: "red",
              },
            }}
            onClick={() => handleExitGroup(row.original.name)}
          >
            <ExitToAppIcon
              sx={{
                fontSize: "1rem",
                marginRight: ".5rem",
              }}
            />
            Exit
          </Button>
        ),
      },
    ],
    []
  );

  const handleJoinGroup = () => {
    if (formData.groupsJoin.trim() !== "") {
      setData([...data, { name: formData.groupsJoin }]);
      setFormData({ ...formData, groupsJoin: "" });
    }
  };
  const handleExitGroup = (groupName) => {
    // Handle the logic to remove the group from the list
    setData(data.filter((d) => d.name !== groupName));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
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
        Devices
      </Typography>
      <NavbarMini isEditMode={true} />
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
                margin: "2rem 0 0",
                color: "var(--text-color)",
              }}
            >
              <Typography variant="h10" component="h4" gutterBottom>
                Add Groups
              </Typography>
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
              {/* ==============================ADDGROUPS============================================================ */}

              <Box
                sx={{
                  padding: "3rem",
                  backgroundColor: "var(--color)",
                  color: "var(--text-color)",
                  borderRadius: "1rem",
                  boxShadow: "var(--box-shadow)",
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Grid container spacing={2}>
                  {/* TextField for Groups */}
                  <Grid item xs={12} sm={8} md={8}>
                    <TextField
                      fullWidth
                      size="small"
                      label="Groups"
                      variant="outlined"
                      name="groupsJoin"
                      value={formData.groupsJoin}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          groupsJoin: e.target.value,
                        })
                      }
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="clear input"
                              onClick={() =>
                                setFormData({ ...formData, groupsJoin: "" })
                              }
                              edge="end"
                              size="small"
                              sx={{
                                color: "var(--text-color)",
                                "&:hover": {
                                  color: "var(--btn-bg)", // Change color on hover
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
                        flex: 1,
                        fontSize: "0.8rem",
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "var(--grey)", // Default border color
                          },
                          "&:hover fieldset": {
                            borderColor: "var(--btn-bg)", // Hover border color
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "var(--btn-bg)", // Focused border color
                          },
                        },
                      }}
                    />
                  </Grid>

                  {/* Button to Join */}
                  <Grid item xs={12} sm={2} md={2}>
                    <Button
                      variant="outlined"
                      sx={{
                        fontSize: "0.8rem",
                        padding: "0.5rem 1rem",
                        color: "var(--text-color)", // Button text color
                        borderColor: "var(--grey)", // Button border color
                        width: "100%", // Full width
                      }}
                      onClick={handleJoinGroup}
                    >
                      Join
                    </Button>
                  </Grid>
                </Grid>
              </Box>

              {/* ==============================GROUPS TABLE============================================================ */}
              <Box sx={{ marginTop: "5rem" }}>
                <CustomTable
                  columns={columns}
                  data={data}
                  localStorageKey="DevicesGroupsData"
                  setData={setData}
                  isDeviceGroupsPage={true}
                  handleExitGroup={handleExitGroup}
                />
              </Box>
            </Box>
          </form>
        </Container>
      </motion.div>
    </div>
  );
}
