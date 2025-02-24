import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../components/login/login";
import { DesarrolloEconomico } from "../components/desarrollo-economico/DesarrolloEconomico";

export const AppRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          isAuthenticated ? (
            <Navigate to="/desarrollo-economico" />
          ) : (
            <Login setIsAuthenticated={setIsAuthenticated} />
          )
        }
      />
      <Route
        path="/desarrollo-economico"
        element={
          isAuthenticated ? <DesarrolloEconomico /> : <Navigate to="/" />
        }
      />
    </Routes>
  );
};
