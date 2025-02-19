import React from 'react';
import { Box, Paper } from '@mui/material';
import { AppRoutes } from '../../routes/AppRoutes';

export const MainContent = () => {
  return (
    <Box sx={{ 
      marginLeft: '250px', 
      padding: 3,
      minHeight: 'calc(100vh - 176px)', // 112px header + 64px footer
      bgcolor: '#f5f5f5',
      width: '100%'
    }}>
      <Paper sx={{ padding: 3, minHeight: '100%' }}>
        <AppRoutes />
      </Paper>
    </Box>
  );
};