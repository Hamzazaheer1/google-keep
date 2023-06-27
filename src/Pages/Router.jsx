import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import Profile from "./Profile";
import Notes from "./Notes";
import Dashboard from "./Dashboard";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/notes" element={<Notes />} />
    </Routes>
  );
};
