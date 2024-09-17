import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import CustomTable from "../../Components/CustomTable/CustomTable";
import { Box, Container,Paper, Typography } from "@mui/material";
import NavbarMini from "../../Components/NavbarMini/NavbarMini";
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

  return (
    <motion.div
      initial={{ y: "-50%", opacity: 0, scale: 0.8 }} // Start above the viewport, partially transparent and scaled down
      animate={{ y: "0%", opacity: 1, scale: 1 }} // Move to its original position, full opacity, and original scale
      exit={{ y: "50%", opacity: 0, scale: 1.2 }} // Exit by moving down off the screen, fading out, and scaling up
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="main">
        <div className="main">
          <NavbarMini />
          <Container
            component={Paper}
            elevation={3}
            style={{ padding: 0, margin: "0 0 3rem" }}
          >
            {isCoreLogsPage && (
              <>
                <Box
                  sx={{
                    backgroundColor: "var(--search-bg)",
                    padding: "1rem",
                    marginBottom: "-1px",
                    color: "var(--text-grey)",
                  }}
                >
                  <Typography variant="h10" component="h4" gutterBottom>
                    Core Application Logs
                  </Typography>
                </Box>
                <Box
                  sx={{
                    padding: "2rem",
                    backgroundColor: "var(--color)",
                    color: "var(--text-grey)",
                  }}
                >
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
                    backgroundColor: "var(--search-bg)",
                    padding: "1rem",
                    marginBottom: "-1px",
                    color: "var(--text-grey)",
                  }}
                >
                  <Typography variant="h10" component="h4" gutterBottom>
                    OXPD Application Logs
                  </Typography>
                </Box>
                <Box
                  sx={{
                    padding: "2rem",
                    backgroundColor: "var(--color)",
                    color: "var(--text-grey)",
                  }}
                >
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
        </div>
      </div>
    </motion.div>
  );
}
