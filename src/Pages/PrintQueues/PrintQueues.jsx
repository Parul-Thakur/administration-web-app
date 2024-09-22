import React, { useState } from "react";
import { motion } from "framer-motion";
import queueData from "./queueData";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import {
  Container,
  Grid,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Button,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import CustomTable from "../../Components/CustomTable/CustomTable";
import SaveModal from "../../Components/SaveModal";

function PrintQueues() {
  const [data, setData] = useState(queueData);
  const type = ["Pre Pay", "Invoice"];
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
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "IP Address",
        accessor: "ipAddress",
      },
      {
        Header: "Type",
        accessor: "type",
      },
    ],
    []
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
        Print Queue
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
          {/* ======================Add print=========================================== */}
          <Box
            sx={{
              backgroundColor: "var(--background-color)",
              padding: "1rem",
              margin: "2rem 0 0",
              color: "var(--text-color)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h10" component="h4" gutterBottom>
              Add Print Queue
            </Typography>
            <Button
              variant="outlined"
              sx={{
                fontSize: "0.8rem",
                color: "var(--text-color)",
                borderColor: "var(--btn-bg)",
                padding: "0.5rem 1.5rem",
                transition: "transform 0.2s ease",
                "&:hover": {
                  transform: "translateY(5px)",
                  color: "var(--text-color)",
                },
              }}
              // onClick={handleCancel}
            >
              <SystemUpdateAltIcon sx={{ marginRight: "1rem" }} /> Import Print
              Queues
            </Button>
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
            <form onSubmit={handleSubmit}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    size="small"
                    label="IP Address"
                    variant="outlined"
                    name="ipaddress"
                    // value={formData.ipaddress}
                    // onChange={handleChange}
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
                    label="IP Address"
                    variant="outlined"
                    name="ipaddress"
                    // value={formData.ipaddress}
                    // onChange={handleChange}
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
                  <FormControl fullWidth variant="outlined" size="small">
                    <InputLabel
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--text-color)",
                      }}
                    >
                      Type
                    </InputLabel>
                    <Select
                      size="small"
                      name="type"
                      // value={formData.server}
                      // onChange={handleChange}
                      label="Type"
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
                      {type.map((t) => (
                        <MenuItem
                          key={t}
                          value={t}
                          style={{
                            fontSize: "0.8rem",
                            color: "var(--text-color)",
                            backgroundColor: "var(--color)",
                          }}
                        >
                          {t}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Button
                    variant="contained"
                    sx={{
                      fontSize: "0.8rem",
                      backgroundColor: "var(--btn-bg)",
                      color: "var(--btn-text)",
                      padding: "0.5rem 1.5rem",
                      transition: "transform 0.2s ease",
                      "&:hover": {
                        transform: "translateY(-2px)",
                      },
                    }}
                    onClick={handleSubmit}
                  >
                    Add User Import
                  </Button>
                  <SaveModal
                    isOpen={isModalOpen}
                    onClose={handleClose}
                    modalTitle="Confirm Addition"
                    modalContent="Are you sure you want to add this item? Please review the details before confirming."
                    pageType="add"
                    isNoNav={false}
                    isError={false}
                  />
                </Grid>
              </Grid>
            </form>
          </Box>

          {/* =================================queue table============================== */}
          <Box
            sx={{
              backgroundColor: "var(--background-color)",
              padding: "1rem",
              margin: "3rem 0 0",
              color: "var(--text-color)",
            }}
          >
            <Typography variant="h10" component="h4" gutterBottom>
              List of all print queues
            </Typography>
          </Box>
          <Box>
            <CustomTable
              columns={columns}
              data={data}
              localStorageKey="queueData"
              setData={setData}
              isPrintQueue={true}
            />
          </Box>
        </Container>
      </motion.div>
    </>
  );
}

export default PrintQueues;
