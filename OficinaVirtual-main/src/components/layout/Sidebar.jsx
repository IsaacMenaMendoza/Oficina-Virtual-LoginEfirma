import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Person, History, Assignment } from '@mui/icons-material';

export const Sidebar = () => {
  const menuItems = [
    { text: 'Perfil', icon: <Person /> },
    { text: 'Mi Historial de Trámites', icon: <History /> },
    { text: 'Mis trámites en Proceso', icon: <Assignment /> }
  ];

  return (
    <Box sx={{ 
      width: 250,
      bgcolor: '#1976d2',
      color: 'white',
      height: '100%',
      position: 'fixed',
      left: 0,
      top: 112, // Altura del header + menú
      bottom: 0,
      overflowY: 'auto'
    }}>
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ 
              '&:hover': { 
                bgcolor: 'rgba(255, 255, 255, 0.1)' 
              }
            }}>
              <ListItemIcon sx={{ color: 'white' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};