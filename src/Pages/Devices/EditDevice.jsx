import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { devicesData } from "./devicesData"; // Imported devicesData
import NavbarMini from "../../Components/NavbarMini/NavbarMini";
import DeviceForm from "./DeviceForm";
import { Typography } from "@mui/material";

export default function EditDevice() {
  const { deviceId } = useParams();
  const [deviceData, setDeviceData] = useState(null);

  useEffect(() => {
    const id = parseInt(deviceId, 10);
    const device = devicesData.find((device) => device.id === id);
    setDeviceData(device);
  }, [deviceId]);

  const handleUpdateUser = (formData) => {
    const updatedDevices = devicesData.map((device) =>
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
        Devices
      </Typography>
      <NavbarMini />
      <div className="main">
        {deviceData ? (
          <DeviceForm
            isEditMode={true}
            existingData={deviceData} // Passing the correct deviceData
            onSubmit={handleUpdateUser}
          />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
}
