import React, { useState } from "react";
import { Container, Typography, Box, Paper, Divider } from "@mui/material";
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

  return (
    <motion.div
      initial={{ y: "-50%", opacity: 0, scale: 0.8 }}
      animate={{ y: "0%", opacity: 1, scale: 1 }} //
      exit={{ y: "50%", opacity: 0, scale: 1.2 }} //
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
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
      <div className="main">
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
              color: "var(--text-grey)",
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
          //   color: "var(--text-grey)",
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
      </div>
    </motion.div>
  );
}
