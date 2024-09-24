import React, { useState } from "react";
import { templateData } from "./ReportData";
// import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import { Typography, Box } from "@mui/material";
import CustomTable from "../../../Components/Common/CustomTable/CustomTable";

export default function TemplateReport() {
  const [data, setData] = useState(templateData);

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Period",
        accessor: "period",
      },
      {
        Header: "Group By",
        accessor: "groupBy",
      },
      {
        Header: "Last Generated",
        accessor: "lastGenerated",
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
          List of all template reports
        </Typography>
      </Box>
      <Box>
        <CustomTable
          columns={columns}
          data={data}
          localStorageKey="templateData"
          setData={setData}
          isTemplateReportPage={true}
        />
      </Box>
    </>
  );
}
