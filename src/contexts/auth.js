import { createContext, useState } from "react";

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

  const handleLogin = async (callback) => {
    await api
      .post("/auth/login", {
        email,
        password,
      })
      .then((r) => {
        localStorage.setItem("token", `Bearer ${r.data.token}`);
        callback();
      });
  };

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
