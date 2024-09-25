import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { devicesData } from "./devicesData"; // Imported devicesData
import NavbarMini from "../../../Components/Common/NavbarMini/NavbarMini";
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
        Devices
      </Typography>
      <NavbarMini />
      <motion.div
        className="main"
        variants={tableVariants}
        initial="hidden"
        animate="visible"
      >
        {deviceData ? (
          <DeviceForm
            isEditMode={true}
            existingData={deviceData} // Passing the correct deviceData
            onSubmit={handleUpdateUser}
          />
        ) : (
          <div>Loading...</div>
        )}
      </motion.div>
    </>
  );
}
