// Notification.js
import React from 'react';
import { Snackbar, Alert, Button } from '@mui/material';
import { useState, useEffect } from 'react';

const Notification = ({ open, message, onClose }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      action={
        <Button color="inherit" onClick={onClose}>
          Close
        </Button>
      }
    >
      <Alert onClose={onClose} severity="success" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
