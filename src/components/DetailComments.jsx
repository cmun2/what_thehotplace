import React from "react";
import { useSelector } from "react-redux/es/exports";
import { useParams, useNavigate } from "react-router-dom";

export const DetailComments = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const comments = useSelector((state) => state.comments.comment);
  return null;
};

export default DetailComments;
