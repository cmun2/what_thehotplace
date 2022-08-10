import React from "react";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import Edit from "../pages/Edit";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/edit" element={<Edit />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
