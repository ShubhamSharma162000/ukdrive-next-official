"use client";

import React, { createContext, useEffect, useState, useCallback } from "react";
import api from "../lib/api";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const refreshUser = useCallback(async () => {
    try {
      const res = await api.get("/api/v1/user/getuserimformation");
      console.log(res);
      setUser(res.data.data);
      setIsAuthenticated(true);
    } catch (err) {
      setUser(null);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshUser();
  }, [refreshUser]);

  const logout = async () => {
    try {
      await api.post("/api/v1/auth/logout");
    } finally {
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        setIsAuthenticated,
        loading,
        logout,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
