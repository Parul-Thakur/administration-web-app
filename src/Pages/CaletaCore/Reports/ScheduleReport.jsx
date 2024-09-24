import React, { useState } from "react";
import { scheduledData } from "./ReportData";
// import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import { Typography, Box } from "@mui/material";
import CustomTable from "../../../Components/Common/CustomTable/CustomTable";

export default function ScheduleReport() {
  const [data, setData] = useState(scheduledData);
  console.log(data);

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Source Type",
        accessor: "type",
      },

      {
        Header: "	Frequency",
        accessor: "frequency",
      },
      {
        Header: "Last Sent",
        accessor: "lastSent",
      },
    ],
    []
  );
  return (
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
          List of all scheduled reports
        </Typography>
      </Box>
      <Box>
        <CustomTable
          columns={columns}
          data={data}
          localStorageKey="scheduledData"
          setData={setData}
          isScheduledReportPage={true}
        />
      </Box>
    </>
  );
}
