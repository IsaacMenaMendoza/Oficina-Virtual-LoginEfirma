import React from 'react';
import { Typography, Paper, Box } from '@mui/material';

export const DesarrolloEconomico = () => {
  return (
    <Paper elevation={3} sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Desarrollo Económico
      </Typography>
      <Box>
        <Typography paragraph>
          Bienvenido al módulo de Desarrollo Económico. Aquí podrá realizar trámites
          relacionados con el desarrollo económico del municipio.
        </Typography>
      </Box>
    </Paper>
  );
};