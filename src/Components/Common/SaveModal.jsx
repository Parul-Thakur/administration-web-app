import React, { useState } from "react";
import {
  Modal,
  Box,
  Button,
  Typography,
  CircularProgress,
  Backdrop,
} from "@mui/material";
import { motion } from "framer-motion";
import CancelIcon from "@mui/icons-material/Cancel";
import successUpdate from "../../Images/core/sync.png";
import successAdd from "../../Images/core/window.png";
import successDelete from "../../Images/core/SuccessDelete.png";
import errorImage from "../../Images/core//ErrorImage.png"; 
import Notification from "../Common/Notification"; 
import { useNavigate } from "react-router-dom"; 

const SaveModal = ({
  isOpen,
  onClose,
  buttonText = "OKAY",
  modalTitle,
  modalContent,
  pageType,
  isNoNav,
  isError,
}) => {
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [loading, setLoading] = useState(false); 
  const [notificationMessage, setNotificationMessage] = useState(""); 
  const navigate = useNavigate();

  const handleConfirm = () => {
    // Close the modal first
    onClose();

    setLoading(true); 

    // Simulate a network request or processing
    setTimeout(() => {
      setLoading(false); 

      // Set the notification message
      const getMessage = () => {
        if (isError) return "Please complete all required fields.";
        return "Added Successfully."; // Change this as needed based on your context
      };

      setNotificationMessage(getMessage());
      setNotificationOpen(true);

      // Navigate if no error
      if (!isNoNav && !isError) {
        setTimeout(() => navigate(-1), 1000); 
      }
    }, isError ? 2000 : 3000);
  };

  const getModalContent = () => {
    if (isError) {
      return {
        image: errorImage,
        title: modalTitle || "Action Failed",
        content: modalContent || "Please complete all required fields.",
      };
    }
    switch (pageType) {
      case "edit":
        return {
          image: successUpdate,
          title: modalTitle || "Update Successful",
          content: modalContent || "The item has been successfully updated.",
        };
      case "add":
        return {
          image: successAdd,
          title: modalTitle || "Addition Successful",
          content: modalContent || "The new item has been successfully added.",
        };
      case "delete":
        return {
          image: successDelete,
          title: modalTitle || "Deletion Successful",
          content: modalContent || "The item has been successfully deleted.",
        };
      default:
        return {
          image: successAdd,
          title: modalTitle || "Action Successful",
          content: modalContent || "The action has been successfully completed.",
        };
    }
  };

  const { image, title, content } = getModalContent();

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          component={motion.div}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          sx={{
            position: "fixed",
            top: "20%",
            left: "41%",
            transform: "translate(-41%, -25%)",
            width: "80%",
            maxWidth: "400px",
            bgcolor: "var(--sidebar-color)",
            boxShadow: "var(--box-shadow)",
            p: 4,
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 1300,
          }}
        >
          <Box sx={{ width: "60%", mb: 2 }}>
            <img src={image} alt={isError ? "Error" : "Success"} style={{ width: "100%", borderRadius: "8px" }} />
          </Box>
          <Typography id="modal-title" variant="h6" sx={{ fontWeight: "bold" }}>{title}</Typography>
          <Typography id="modal-description" sx={{ mt: 2, textAlign: "center" }}>{content}</Typography>
          <Box mt={5} display="flex" justifyContent="space-between">
            <Button
              variant="contained"
              sx={{
                fontSize: "0.8rem",
                backgroundColor: "var(--btn-bg)",
                color: "var(--btn-text)",
                padding: "0.5rem 1.5rem",
                transition: "transform 0.2s ease",
                "&:hover": { transform: "translateY(-2px)" },
              }}
              onClick={handleConfirm}
            >
              {buttonText}
            </Button>
            <Button
              variant="outlined"
              sx={{
                marginLeft: "4rem",
                fontSize: "0.8rem",
                color: "var(--btn-bg)",
                border: "1px solid var(--btn-bg)",
                transition: "transform 0.2s ease",
                "&:hover": { transform: "translateY(-2px)" },
              }}
              onClick={onClose}
            >
              <CancelIcon sx={{ fontSize: "1rem", marginRight: "0.5rem", color: "var(--btn-bg)" }} />
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
      {loading && (
        <Backdrop open={loading} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, color: "#fff", backdropFilter: "blur(5px)" }}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <Notification open={notificationOpen} message={notificationMessage} onClose={() => setNotificationOpen(false)} />
    </div>
  );
};

export default SaveModal;
