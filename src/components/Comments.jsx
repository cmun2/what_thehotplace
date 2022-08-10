import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import commentSlice, { addComment } from "../redux/modules/commentSlice";
//import { __getComments } from "../redux/modules/commentsSlice";
import axios from "axios";
import Pagination from "../components/Pagination";
import InfiniteScroll from "../components/InfiniteScroll";

const Comments = () => {
  const startState = {
    id: uuidv4(),
    ment: "",
  };

  const [counts, setCounts] = useState(startState);
  const [countings, setCountings] = useState([]);
  //const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [limit] = useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage] = useState(5); //how many per page

  const fetchComments = async () => {
    //setLoading(true); //fetching 진행중
    const { data } = await axios.get("http://localhost:3001/comment");
    setCountings(data);
    //setLoading(false); //fetching 끝
  };

  useEffect(() => {
    fetchComments(); //update 될때마다 mount, 이렇게만하면 loop가 끝나지 않음
  }, []);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setCounts({ ...counts, [name]: value, id: uuidv4() });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (counts === "") return;
    await axios.post("http://localhost:3001/comment", counts);
    fetchComments();
    setCounts(startState);
  };

  const onClickDeleteButtonHandler = async (commentId) => {
    await axios.delete(`http://localhost:3001/comment/${commentId}`);
    fetchComments();
  };
  // useEffect(() => {
  //   fetchComments();
  // }, []);

  //currentPost 가져오기
  const indexOfLastPost = page * limit;
  const indexOfFirstPost = indexOfLastPost - limit;
  const currentCountings = countings.slice(indexOfFirstPost, indexOfLastPost);
  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = countings.slice(indexOfFirstPost, indexOfLastPost); //

  //페이지 바꾸기
  //const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <CommentsBody>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="ment"
          value={counts.ment}
          onChange={onChangeHandler}
        />
        <button disabled={counts.ment === ""}>작성</button>
      </form>

      {currentCountings?.map((count) => (
        <div key={count.id}>
          {/* <span>{count.id}</span> */}
          {count.ment}
          <span>
            <button>수정</button>
            <button
              type="button"
              onClick={() => onClickDeleteButtonHandler(count.id)}
            >
              삭제
            </button>
          </span>
        </div>
      ))}
      <footer>
        <Pagination
          total={countings.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </footer>
    </CommentsBody>
  );
};

export default Comments;

const CommentsBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  border: 1px solid #000000c6;
  width: 60%;
  height: 200px;
  margin: auto;
  margin-top: 10px;
  form {
    margin: 10px;
    width: 100%;
    display: flex;
    input {
      width: 90%;
      margin: auto;
      margin-left: 15px;
      border: 1px solid #000000c6;
      padding-bottom: 13px;
      border-radius: 10px;
    }
    button {
      margin-right: 10px;
      background-color: #000000c6;
      color: #f82c7a;
      border-radius: 5px;
      border: 0px;
      padding: 5px;
      margin-left: 5px;
      width: 50px;

      &:hover {
        background-color: #f82c7a;
        color: #000000c6;
      }
      &[disabled] {
        background-color: gray;
        cursor: revert;
        transform: revert;
        color: black;
      }
    }
  }
  div {
    width: 96%;
    height: 50px;
    background-color: #eee;
    display: flex;
    justify-content: space-between;
    text-align: center;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    margin-top: 10px;
    button {
      background-color: #000000c6;
      color: #f82c7a;
      border-radius: 5px;
      border: 0px;
      padding: 5px;
      width: 50px;
      margin: 10px;
    }
  }
`;
// const Sbox = styled.div`
//   padding: 20px;
//   background-color: #000000c6;
//   color: #f82c7a;
//   font-weight: bold;
// `;

// const S2box = styled.div`
//   padding: 20px;
//   background-color: aliceblue;
// `;
