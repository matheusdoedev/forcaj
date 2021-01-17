import { createContext, useState, useEffect } from "react";

import api from "../services/api";

export const AuthContext = createContext();

export const AuthContextComponent = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [roles, setRoles] = useState([]);

  const handleSignIn = async (event, callback) => {
    event.preventDefault();

    await api
      .post("/auth/signIn", {
        name,
        email,
        password,
        photoUrl,
        roles,
      })
      .then(() => {
        setName("");
        setEmail("");
        setPassword("");
        setPhotoUrl("");
        setRoles("");
        callback();
      });
  };

  const handleLogin = async (event, callback) => {
    await api
      .post("/auth/login", {
        email,
        password,
      })
      .then((r) => {
        localStorage.setItem("token", `Bearer ${r.data.token}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogout = async () => {};

  const handleLogins = async () => {};

  const handleResentTokenByEmail = async () => {};

  const handleConfirmAccount = async () => {};

  const handleRestPasswordByEmail = async () => {};

  const handleNewPassword = async () => {};

  return (
    <AuthContext.Provider
      value={{
        handleSignIn,
        handleLogin,
        name,
        email,
        password,
        photoUrl,
        roles,
        setName,
        setEmail,
        setPassword,
        setPhotoUrl,
        setRoles,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
