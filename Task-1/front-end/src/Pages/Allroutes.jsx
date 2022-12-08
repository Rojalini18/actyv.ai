import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Registration from "../Components/Registration";
import UserList from "./UserList";

const Allroutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
    </>
  );
};

export default Allroutes;
