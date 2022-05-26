import React, { createContext, useContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";

const AuthContext = createContext(null);

const initialState = {
  authenticate: false,
  userData: {
    email: "",
    firstName: "",
    lastName: "",
    roles: [],
  },
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkLoggedIn = () => {
    return new Promise((resolve) => {
      const tokens = localStorage.getItem("tokens");
      if (tokens && jwtDecode(tokens).exp * 1000 < Date.now()) {
        localStorage.removeItem("tokens");
        setUser(initialState.userData);
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
      setLoading(true);
      await checkLoggedIn();
      setLoading(false);
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
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
