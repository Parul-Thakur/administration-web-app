import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import CustomTable from "./CustomTable/CustomTable";

function EntityPage({
  entityData: initialEntityData,
  entityName,
  entityLabel,
  viewModalComponent: ViewModalComponent,
  manageModalComponent: ManageModalComponent,
  tableColumns,
  localStorageKey,
  onUpdate,
  allUsers,
}) {
  const [entityData, setEntityData] = useState(initialEntityData);
  const [selectedEntity, setSelectedEntity] = useState(null);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [isManageOpen, setIsManageOpen] = useState(false);
  const [name, setName] = useState("");
  const [notification, setNotification] = useState({
    open: false,
    message: "",
    severity: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleAddGroup = () => {
    if (name.trim() === "") {
      setNotification({
        open: true,
        message: "Text field must be filled!",
        severity: "warning",
      });
    } else {
      // Perform your add group logic here
      setNotification({
        open: true,
        message: `${entityName} added successfully!`,
        severity: "success",
      });
      setName("");
    }
  };

  const handleCloseNotification = () => {
    setNotification({ open: false, message: "", severity: "" });
  };
  useEffect(() => {
    const savedEntities = JSON.parse(localStorage.getItem(localStorageKey));
    if (savedEntities) {
      setEntityData(savedEntities);
    } else {
      setEntityData(initialEntityData);
    }
  }, [initialEntityData, localStorageKey]);

  const handleOpenViewModal = (entity) => {
    setSelectedEntity(entity);
    setIsViewOpen(true);
  };

  const handleOpenManageModal = (entity) => {
    setSelectedEntity(entity);
    setIsManageOpen(true);
  };

  const handleCloseModals = () => {
    setIsViewOpen(false);
    setIsManageOpen(false);
    setSelectedEntity(null);
  };

  const updateEntities = (updatedEntities) => {
    setEntityData(updatedEntities);
    localStorage.setItem(localStorageKey, JSON.stringify(updatedEntities));
    if (onUpdate) onUpdate(updatedEntities);
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "var(--background-color)",
          padding: "1rem",
          margin: "2rem 0 0",
          color: "var(--text-color)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h8" component="h4" gutterBottom>
          Add {entityLabel}
        </Typography>
      </Box>
      <Box
        sx={{
          padding: "3rem",
          backgroundColor: "var(--color)",
          color: "var(--text-color)",
          borderRadius: " 1rem  ",
          boxShadow: "var(--box-shadow)",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                size="small"
                label={`${entityLabel} Name`}
                variant="outlined"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                InputProps={{
                  style: {
                    fontSize: "0.8rem",
                    color: "var(--text-color)",
                  },
                }}
                InputLabelProps={{
                  style: {
                    fontSize: "0.8rem",
                    color: "var(--text-color)",
                  },
                }}
                sx={{
                  fontSize: "0.8rem",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "var(--grey)",
                    },
                    "&:hover fieldset": {
                      borderColor: "var(--btn-bg)",
                    },
                  },
                  "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "var(--btn-bg)",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
                onClick={handleAddGroup}
                variant="outlined"
                sx={{
                  fontSize: "0.7rem",
                  backgroundColor: "var(--btn-bg)",
                  color: "var(--btn-text)",
                  padding: "0.5rem 1rem",
                  transition: "transform 0.2s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Add {entityLabel}
              </Button>
            </Grid>
          </Grid>
          <Snackbar
            open={notification.open}
            autoHideDuration={3000}
            onClose={handleCloseNotification}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert
              onClose={handleCloseNotification}
              severity={notification.severity}
              sx={{ width: "100%" }}
            >
              {notification.message}
            </Alert>
          </Snackbar>
        </form>
      </Box>

      <Box
        sx={{
          backgroundColor: "var(--background-color)",
          padding: "1rem",
          margin: "3rem 0 0",
          color: "var(--text-color)",
        }}
      >
        <Typography variant="h10" component="h4" gutterBottom>
          List of all {entityLabel}s
        </Typography>
      </Box>
      <Box
      // sx={{
      //   padding: "3rem",
      //   backgroundColor: "var(--color)",
      //   color: "var(--text-color)",
      //   borderRadius: " 1rem  ",
      //   boxShadow: "var(--box-shadow)",
      // }}
      >
        <CustomTable
          data={entityData}
          onView={handleOpenViewModal}
          onManage={handleOpenManageModal}
          columns={tableColumns}
          localStorageKey={localStorageKey}
          isDCGPage={true}
        />
      </Box>

      <ViewModalComponent
        open={isViewOpen}
        handleClose={handleCloseModals}
        entity={selectedEntity || {}}
        entityName={entityName}
        entityLabel={entityLabel}
      />
      <ManageModalComponent
        open={isManageOpen}
        handleClose={handleCloseModals}
        entity={selectedEntity}
        allUsers={allUsers}
        updateEntities={updateEntities}
        entityName={entityName}
        entityLabel={entityLabel}
      />
    </>
  );
}

export default EntityPage;
