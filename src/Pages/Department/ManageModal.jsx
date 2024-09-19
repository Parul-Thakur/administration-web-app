import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Button,
  Typography,
  Box,
} from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import CloseIcon from "@mui/icons-material/Close";
import CustomTable from "../../Components/CustomTable/CustomTable";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningIcon from "@mui/icons-material/Warning";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import SaveModal from "../../Components/SaveModal";

const ManageModal = ({
  open,
  handleClose,
  entity,
  entityType,
  allUsers = [],
  updateEntities,
  entityLabel,
  entityName,
}) => {
  const [selectedUsers, setSelectedUsers] = useState(entity?.users || []);
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const [modalProps, setModalProps] = useState({});
  const [availableUsers, setAvailableUsers] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };

  useEffect(() => {
    if (entity) {
      setSelectedUsers(entity.users || []);
    }
  }, [entity]);

  useEffect(() => {
    const unselectedUsers = allUsers.filter(
      (user) =>
        !selectedUsers.some(
          (selected) => selected.user_logon === user.userlogon
        )
    );
    setAvailableUsers(unselectedUsers);
  }, [allUsers, selectedUsers]);

  const handleAddUser = (user) => {
    if (!selectedUsers.some((u) => u.user_logon === user.userlogon)) {
      setSelectedUsers([...selectedUsers, { ...user, id: Date.now() }]);
    }
  };

  const handleUpdateEntity = () => {
    if (!entity || !entity.users) {
      console.error("Entity or its users are undefined.");
      return;
    }
    if (selectedUsers.length === entity.users.length) {
      setModalProps({
        icon: WarningIcon,
        color: "orange",
        title: "Warning",
        message: `You haven't added any members. Do you want to go back to the ${entityType}?`,
        buttonText: `Back to ${entityType}`,
      });
      setIsCustomModalOpen(true);
      return;
    }

    const updatedEntity = {
      ...entity,
      users: selectedUsers,
    };

    const entityKey = entityType?.toLowerCase() || "";
    const savedEntities =
      JSON.parse(localStorage.getItem(`${entityKey}s`)) || [];

    const updatedEntities = savedEntities.map((e) =>
      e.id === updatedEntity.id ? updatedEntity : e
    );

    localStorage.setItem(`${entityKey}s`, JSON.stringify(updatedEntities));
    updateEntities(updatedEntities);

    setModalProps({
      icon: CheckCircleIcon,
      color: "green",
      title: "Success",
      message: `Members have been added successfully to the ${entityType}.`,
      buttonText: "Close",
    });
    setIsCustomModalOpen(true);
  };

  const handleCustomModalClose = () => {
    setIsCustomModalOpen(false);
    handleClose();
  };

  const userColumns = React.useMemo(
    () => [
      { Header: "User Logon", accessor: "userlogon" },
      { Header: "User Name", accessor: "name" },
      { Header: "Email", accessor: "email" },
      {
        Header: "Select",
        Cell: ({ row }) => (
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleAddUser(row.original)}
            disabled={selectedUsers.some(
              (u) => u.userlogon === row.original.userlogon
            )}
            startIcon={<AddCircleOutlineIcon />}
            sx={{
              borderRadius: "15px",
              fontSize: "0.8rem",
              backgroundColor: "var(--btn-bg)",
              color: "var(--btn-text)",
              padding: "0.5rem 1.5rem",
              transition: "transform 0.2s ease",
              "&:hover": {
                transform: "translateY(-2px)",
              },
            }}
          >
            Add
          </Button>
        ),
      },
    ],
    [selectedUsers]
  );

  return (
    <>
      <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "var(--sidebar-color)",
          }}
        >
          <Typography variant="h6" sx={{ color: "var(--text-head)" }}>
            Manage Members in {entityType} {entityLabel}
          </Typography>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "var(--text-color)",
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: "var(--sidebar-color)" }}>
          <Box mb={2}>
            <CustomTable
              data={availableUsers}
              columns={userColumns}
              localStorageKey={`manage_${entity?.id}_available_users`}
              isCustomModalPage={true}
              entityType={entityType}
            />
          </Box>
        </DialogContent>
        <DialogActions
          sx={{
            width: "100%",
            backgroundColor: "var(--sidebar-color)",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
              backgroundColor: "var(--sidebar-color)",
            }}
          >
            <Button
              // variant="contained"
              sx={{
                fontSize: "0.8rem",
                color: "var(--text-color)",
                padding: "0.5rem 1.5rem",
                transition: "transform 0.2s ease",
                borderRadius: "1rem",
                "&:hover": {
                  backgroundColor: "var(--grey)", // Hover effect
                },
              }}
              onClick={handleSubmit}
            >
              <ControlPointIcon sx={{ marginRight: "0.5rem" }} /> Save
            </Button>
            <SaveModal
              // onClick={handleUpdateEntity}
              isOpen={isModalOpen}
              onClose={handleClose}
              buttonText="Confirm"
              modalTitle="Add Members"
              modalContent="Are you sure you want to add the selected members?"
              pageType="add"
              isNoNav={true}
              isError={false}
            />
          </Box>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ManageModal;
