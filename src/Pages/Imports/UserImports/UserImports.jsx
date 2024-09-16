import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container, Typography, Box, Paper } from "@mui/material";
import CustomTable from "../../../Components/CustomTable/CustomTable";
import NavbarMini from "../../../Components/NavbarMini/NavbarMini";
import { userImportData } from "../ImportData";
export default function UserImports() {
  const [data, setData] = useState(userImportData);
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Latest Run",
        accessor: "latestRun",
      },
      {
        Header: "Source",
        accessor: "source",
      },
      {
        Header: "Type",
        accessor: "type",
      },
    ],
    []
  );
  return (
    // <motion.div
    //   initial={{ y: "-50%", opacity: 0, scale: 0.8 }}
    //   animate={{ y: "0%", opacity: 1, scale: 1 }}
    //   exit={{ y: "50%", opacity: 0, scale: 1.2 }}
    //   transition={{ duration: 0.8, ease: "easeInOut" }}
    // >
    <>
      <Typography
        variant="h4"
        component="h4"
        gutterBottom
        style={{ padding: 0, margin: "4rem 2rem 2rem" }}
      >
        Imports
      </Typography>
      <NavbarMini />

      <div className="reportMain">
        <Container elevation={3} style={{ padding: 0, margin: "0 0 3rem" }}>
          <Box
            sx={{
              backgroundColor: "var(--background-color)",
              padding: "1rem",
              margin: "2rem 0 0",
              color: "var(--text-grey)",
            }}
          >
            <Typography variant="h8" component="h4" gutterBottom>
              List of all user imports
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
              localStorageKey="userImportData"
              setData={setData}
              isImportPage={true}
            />
          </Box>
        </Container>
      </div>
      {/* </motion.div> */}
    </>
  );
}
