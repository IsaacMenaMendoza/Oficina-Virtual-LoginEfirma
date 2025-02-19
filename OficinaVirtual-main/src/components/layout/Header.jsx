import React from 'react';
import { AppBar, Toolbar, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  const menuItems = [
    { title: 'Tesorería y Catastro', disabled: true, path: '/tesoreria' },
    { title: 'Dirección de Agua Potable', disabled: true, path: '/agua-potable' },
    { title: 'Protección Civil', disabled: true, path: '/proteccion-civil' },
    { title: 'Desarrollo Económico', disabled: false, path: '/desarrollo-economico' },
    { title: 'Desarrollo Urbano', disabled: true, path: '/desarrollo-urbano' },
    { title: 'Registro Civil', disabled: true, path: '/registro-civil' }
  ];

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: 'white', color: 'black', boxShadow: 'none', borderBottom: '1px solid #e0e0e0' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#1976d2' }}>
            Ventanilla Única Virtual Municipio
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ 
        bgcolor: '#1976d2', 
        py: 1,
        display: 'flex',
        justifyContent: 'center',
        gap: 2,
        overflowX: 'auto'
      }}>
        {menuItems.map((item, index) => (
          <Button
            key={index}
            variant="text"
            disabled={item.disabled}
            onClick={() => !item.disabled && navigate(item.path)}
            sx={{
              color: 'white',
              opacity: item.disabled ? 0.5 : 1,
              textTransform: 'none',
              whiteSpace: 'nowrap',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.1)'
              }
            }}
          >
            {item.title}
          </Button>
        ))}
      </Box>
    </>
  );
};