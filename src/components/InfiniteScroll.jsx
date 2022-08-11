import axios from "axios";
import { useInView } from "react-intersection-observer";
import React, { useCallback, useEffect } from "react";
import { useState } from "react";

const InfiniteScroll = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const [ref, inView] = useInView();

  const getComments = useCallback(async () => {
    setLoading(true);
    await axios
      .get(`http://localhost:3001/comment/page=${page}&limit=5`)
      .then((res) => {
        setItems((prevState) => [...prevState, res]);
      });
    setLoading(false);
  }, [page]);

  // getComments가 바뀔때 함수실행
  useEffect(() => {
    getComments();
  }, [getComments]);

  useEffect(() => {
    if (inView && !loading) {
      setPage((prevState) => prevState + 1);
    }
  }, [inView, loading]);

  return (
    <div>
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          {items.length - 1 == idx ? (
            <div ref={ref}>{item.content}</div>
          ) : (
            <div>{item.content}</div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default InfiniteScroll;
