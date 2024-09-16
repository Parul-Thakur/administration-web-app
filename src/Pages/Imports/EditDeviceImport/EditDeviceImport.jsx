import React, { useEffect, useState } from "react";
import { deviceImportData } from "../ImportData";
import { useParams } from "react-router-dom";
import NavbarMini from "../../../Components/NavbarMini/NavbarMini";
import DeviceImportForm from "../DeviceImportForm";
import { Divider, Typography } from "@mui/material";

export default function EditDeviceImport() {
  const { deviceId } = useParams();
  const [deviceData, setDeviceData] = useState(null);

  useEffect(() => {
    const id = parseInt(deviceId, 10);
    const device = deviceImportData.find((device) => device.id === id);
    setDeviceData(device);
  }, [deviceId]);

  const handleUpdateDevice = (formData) => {
    const updatedDevices = deviceImportData.map((device) =>
      device.id === deviceData.id ? { ...device, ...formData } : device
    );
    console.log("Updated device data:", updatedDevices);
  };

  return (
    <>
      <Typography
        variant="h4"
        component="h4"
        gutterBottom
        style={{ padding: 0, margin: "4rem 2rem 0rem" }}
      >
        Device Imports
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
        {deviceData ? (
          <DeviceImportForm
            isEditMode={true}
            existingData={deviceData}
            onSubmit={handleUpdateDevice}
          />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
}
