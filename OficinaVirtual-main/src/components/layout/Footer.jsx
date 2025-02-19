import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { AccessTime, Update } from '@mui/icons-material';

export const Footer = () => {
  const [sessionTime, setSessionTime] = useState('99:99');
  const [lastConnection, setLastConnection] = useState(new Date().toLocaleString());

  return (
    <Box sx={{ 
      position: 'fixed',
      bottom: 0,
      width: '100%',
      bgcolor: '#f5f5f5',
      padding: 1,
      borderTop: '1px solid #e0e0e0',
      display: 'flex',
      justifyContent: 'center',
      gap: 4
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <AccessTime fontSize="small" color="action" />
        <Typography variant="body2" color="text.secondary">
          Su sesión terminará en {sessionTime} por inactividad
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Update fontSize="small" color="action" />
        <Typography variant="body2" color="text.secondary">
          Fecha y hora de su última conexión: {lastConnection}
        </Typography>
      </Box>
    </Box>
  );
};