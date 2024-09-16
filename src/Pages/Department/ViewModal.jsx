import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CustomTable from "../../Components/CustomTable/CustomTable";

function ViewModal({ open, handleClose, entity, entityType }) {
  console.log(entity, entityType);
  const group_name = entity?.group_name || "Default Group Name";
  const device_name = entity?.device_name || "Default Device Name";
  const cost_code_name = entity?.cost_code_name || "Default Cost Code Name";

  const columns = React.useMemo(
    () => [
      {
        Header: "User Logon",
        accessor: "user_logon",
      },
      {
        Header: "User Name",
        accessor: "name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
    ],
    []
  );

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "var(--color)",
        }}
      >
        <Typography variant="h6" sx={{ color: "var(--text-head)" }}>
          Members of {entity?.department_name || group_name || device_name || cost_code_name} {entityType}
        </Typography>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ backgroundColor: "var(--color)" }}>
        <CustomTable
          data={entity?.users || []}
          columns={columns}
          localStorageKey={`view_${entity?.id}_users`}
          isCustomModalPage={true}
        />
      </DialogContent>
    </Dialog>
  );
}

export default ViewModal;
