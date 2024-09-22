import React, { useState } from "react";
import NavbarMini from "../../../Components/NavbarMini/NavbarMini";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Container, Typography, Box, Button, IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CustomTable from "../../../Components/CustomTable/CustomTable";
import { printDocData } from "../Users/UserData";
import { motion } from "framer-motion";
function PrintDocs() {
  const [data, setData] = useState(printDocData);
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
      { Header: "Document Name", accessor: "docName" },
      { Header: "Received at", accessor: "receivedAt" },
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
              Print Documents
            </Typography>
          </Box>

          <Box>
            <CustomTable
              setData={setData}
              data={data}
              columns={columns}
              localStorageKey="printDocData"
              isAccessPage={true}
            />
          </Box>
        </Container>
      </motion.div>
    </div>
  );
}

export default PrintDocs;
