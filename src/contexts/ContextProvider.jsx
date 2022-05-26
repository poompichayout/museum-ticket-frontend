import React, { createContext, useContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const checkLoggedIn = () => {
    return new Promise((resolve) => {
      const tokens = localStorage.getItem("tokens");
      if (tokens && jwtDecode(tokens).exp * 1000 < Date.now()) {
        localStorage.removeItem("tokens");
        setUser(null);
        delete axios.defaults.headers.common["Authorization"];
      } else {
        if (tokens) {
          setUser(jwtDecode(tokens));
        }
        axios.defaults.headers.common["Authorization"] = "Bearer " + tokens;
      }
      resolve();
    });
  };

  useEffect(() => {
    const check = async () => {
      await checkLoggedIn();
    };
    check();
  }, []);

  const login = (user) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };
  
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
