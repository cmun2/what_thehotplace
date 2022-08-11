import React, { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (callback, url) => {
  const [countings, setCountings] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchComments = async () => {
    setLoading(true); //fetching 진행중
    const response = await axios.get(url);
    callback(response);
    setLoading(false); //fetching 끝
  };

  useEffect(() => {
    fetchComments(); //update 될때마다 mount, 이렇게만하면 loop가 끝나지 않음
  }, []);

  return loading;
};

export default useFetch;
