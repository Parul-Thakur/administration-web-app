import React, { useState } from "react";
import { Container, Typography, Box, Divider } from "@mui/material";
import CustomTable from "../../Components/CustomTable/CustomTable";
import serverData from "./ServerData";
import { motion } from "framer-motion";

export default function Server() {
  const [data, setData] = useState(serverData); // Use the data from ServerData.js

  const columns = React.useMemo(
    () => [
      {
        Header: "Hostname",
        accessor: "hostname",
      },
      {
        Header: "IP Address",
        accessor: "ipaddress",
      },
      {
        Header: "Status",
        accessor: "status",
      },
    ],
    []
  );
  const tableVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };
  return (
    <>
      <Typography
        variant="h4"
        component="h4"
        gutterBottom
        style={{ padding: 0, margin: "4rem 2rem 0rem" }}
      >
        Server
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
          <Box
            sx={{
              backgroundColor: "var(--background-color)",
              padding: "1rem",
              margin: "2rem 0 0",
              color: "var(--text-color)",
            }}
          >
            <Typography variant="h8" component="h4" gutterBottom>
              List of all Servers
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
            <CustomTable
              columns={columns}
              data={data}
              localStorageKey="serverData"
              setData={setData}
            />
          </Box>
        </Container>
      </motion.div>
    </>
  );
}
