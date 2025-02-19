import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DesarrolloEconomico } from '../components/desarrollo-economico/DesarrolloEconomico';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DesarrolloEconomico />} />
      <Route path="/desarrollo-economico" element={<DesarrolloEconomico />} />
    </Routes>
  );
};