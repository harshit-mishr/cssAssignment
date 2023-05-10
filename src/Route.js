import React from "react";
import "./styles.css";
import Login from "./Login/Login";
import { Route, Routes } from "react-router-dom";
export default function Rout() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}
