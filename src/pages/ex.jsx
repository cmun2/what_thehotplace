// src/App.jsx

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getDetail } from "../redux/modules/detailSlice";

const Ex = () => {
  const dispatch = useDispatch();
  const { detail }= useSelector((state) => state.getdetail);
  console.log(detail)


  useEffect(() => {
    dispatch(__getDetail(1));
  }, [dispatch]);

  return (
    <div>
      
    </div>
  );
};

export default Ex;