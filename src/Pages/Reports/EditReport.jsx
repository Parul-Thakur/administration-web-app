import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ReportForm from "./ReportForm";
import { scheduledData, templateData } from "./ReportData";
import { Divider, Typography } from "@mui/material";

export default function EditReport() {
  const { reportType, userId } = useParams();
  const [userData, setUserData] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const selectedData =
      reportType === "schedule" ? scheduledData : templateData;
    setData(selectedData);
    console.log("Selected Data:", selectedData); // Log selected data
    console.log("User ID from URL:", userId); // Log userId

    const id = parseInt(userId, 10);
    const user = selectedData.find((user) => user.id === id);
    console.log("Found User:", user); // Log found user

    if (user) {
      setUserData(user);
    } else {
      console.error("User not found for id:", id);
    }
  }, [reportType, userId]);

  const handleUpdateUser = (formData) => {
    const selectedData =
      reportType === "schedule" ? scheduledData : templateData;
    const updatedUsers = data.map((user) =>
      user.id === userData.id ? { ...user, ...formData } : user
    );
    console.log("Updated user data:", updatedUsers);
  };

  return (
    <>
      <Typography
        variant="h4"
        component="h4"
        gutterBottom
        style={{ padding: 0, margin: "4rem 2rem 0rem" }}
      >
       Report
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

      <div className="reportMain">
        {userData ? (
          <ReportForm
            isEditMode={true}
            existingData={userData} // Pass the specific user data to the form
            onSubmit={handleUpdateUser}
          />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
}
