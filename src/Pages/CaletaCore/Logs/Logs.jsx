import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import CustomTable from "../../../Components/Common/CustomTable/CustomTable";
import { Box, Container, Typography } from "@mui/material";
import NavbarMini from "../../../Components/Common/NavbarMini/NavbarMini";
import {
  core_application_logsData,
  oxpd_application_logsData,
} from "./logsData";
// Sample column definitions for the tables
const coreLogsColumns = [
  { Header: "Error Code", accessor: "errorCode" },
  { Header: "Date and Time", accessor: "dateTime" },
  { Header: "Message", accessor: "message" },
];

const oxpdLogsColumns = [
  { Header: "Error Code", accessor: "errorCode" },
  { Header: "IP Address", accessor: "ipAddress" },
  { Header: "Date and Time", accessor: "dateTime" },
  { Header: "Message", accessor: "message" },
];

export default function Logs() {
  const location = useLocation();

  // State to hold table data
  const [coreLogsData, setCoreLogsData] = useState(core_application_logsData);
  const [oxpdLogsData, setOxpdLogsData] = useState(oxpd_application_logsData);

  // Determine which table to display based on the current path
  const isCoreLogsPage = location.pathname === "/core-application-logs";
  const isOxpdLogsPage = location.pathname === "/oxpd-application-logs";
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
        Logs
      </Typography>
      <NavbarMini />
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
          {isCoreLogsPage && (
            <>
              <Box
                sx={{
                  backgroundColor: "var(--background-color)",
                  padding: "1rem",
                  margin: "2rem 0 0",
                  color: "var(--text-color)",
                }}
              >
                <Typography variant="h8" component="h4" gutterBottom>
                  Core Application Logs
                </Typography>
              </Box>
              <Box>
                {/* Core Application Logs Table */}
                <CustomTable
                  columns={coreLogsColumns}
                  data={coreLogsData}
                  localStorageKey="coreApplicationLogsData"
                  setData={setCoreLogsData}
                  isLogPage={true}
                />
              </Box>
            </>
          )}
          {isOxpdLogsPage && (
            <>
              <Box
                sx={{
                  backgroundColor: "var(--background-color)",
                  padding: "1rem",
                  margin: "2rem 0 0",
                  color: "var(--text-color)",
                }}
              >
                <Typography variant="h8" component="h4" gutterBottom>
                  OXPD Application Logs
                </Typography>
              </Box>
              <Box>
                {/* OXPD Application Logs Table */}
                <CustomTable
                  columns={oxpdLogsColumns}
                  data={oxpdLogsData}
                  localStorageKey="oxpdApplicationLogsData"
                  setData={setOxpdLogsData}
                  isLogPage={true}
                />
              </Box>
            </>
          )}
        </Container>
      </motion.div>
    </>
  );
}
