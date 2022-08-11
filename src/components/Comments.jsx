import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import commentSlice, { addComment } from "../redux/modules/commentSlice";
import axios from "axios";
import Pagination from "../components/Pagination";
import { __getComments } from "../redux/modules/commentsSlice";
import DetailComments from "./DetailComments";
import { useParams, useNavigate } from "react-router-dom";
//import commentSlice, { addComment } from "../redux/modules/commentSlice";
//import { __getComments } from "../redux/modules/commentsSlice";
//import Pagination from "../components/Pagination";
//import InfiniteScroll from "../components/InfiniteScroll";

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

  const dispatch = useDispatch();
  const { id } = useParams();
  // const offset = (page - 1) * limit;
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage] = useState(5); //how many per page

  // const fetchComments = async () => {
  //   const { data } = await axios.get("http://localhost:3001/comment/");
  //   setCountings(data);
  // };

  // console.log(countings);
  const commentInput = useRef();

  const selectComment = useSelector((state) => state.comments.comment);
  // console.log(selectComment);

  useEffect(() => {
    dispatch(__getComments(id));
  }, []);

  // useEffect(() => {
  //   fetchComments(); //update 될때마다 mount, 이렇게만하면 loop가 끝나지 않음
  // }, []);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setCounts({ ...counts, [name]: value, id: uuidv4(), postId: parseInt(id) });
  };
  //const offset = (page - 1) * limit;
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

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (commentInput.current.value.length < 10) {
      alert("10글자 이상 입력해주세요!");
      setCounts(startState);
      return;
    }

    if (counts === "") return;
    await axios.post("http://localhost:3001/comment", counts);
    dispatch(__getComments(id));
    // fetchComments();
    // setCountings(selectComment);
    setCounts(startState);
  };

  const onClickDeleteButtonHandler = async (commentId) => {
    await axios.delete(`http://localhost:3001/comment/${commentId}`);
    dispatch(__getComments(id));
    // setCountings(selectComment);
    //fetchComments();
  };
  // console.log(selectComment);

  // useEffect(() => {
  //   fetchComments();
  // }, []);

  //currentPost 가져오기
  const indexOfLastPost = page * limit;
  const indexOfFirstPost = indexOfLastPost - limit;
  const currentCountings = selectComment.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  // const currentCountings = countings.slice(indexOfFirstPost, indexOfLastPost);
  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = countings.slice(indexOfFirstPost, indexOfLastPost); //

  //페이지 바꾸기
  //const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit); //true, false 반전시켜주는 함수

  const [localContent, setLocalContent] = useState(""); //textarea의 input을 핸들링할 state

  const handleQuitEdit = () => {
    //수정상태에서 나갈때 함수
    setIsEdit(false); //isEdit을 false로 만들어준 다음에
    setLocalContent(counts);
  };

  const onEdit = (commentId, newComment) => {
    //특정 일기 데이터를 수정하는 함수/ targetId(=commentId)를 수정할것임
    fetchComments(
      counts.map((it) => it.id === commentId)
        ? { ...it, comment: newComment }
        : it //일치하는 함수 1개 = 수정대상
    ); //it은 원본 값. target이 아닌 값은 it = 원본값을 갖게됨
  };

  const localContentInput = useRef(); //5글자 미만일때 input창 포커싱

  const handleEdit = () => {
    //수정완료를 눌렀을 때 처리되는 함수
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }
  };
  // if (window.confirm(`댓글을 수정하시겠습니까?`)) {
  //   onEdit(counts.id, localContent); //"예" 누르면 수정완료
  //   toggleIsEdit(); //수정폼 닫기
  // }

  return (
    <CommentsBody>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="ment"
          value={counts.ment}
          onChange={onChangeHandler}
          ref={commentInput}
        />
        <button disabled={counts.ment === ""}>작성</button>
      </form>

      {currentCountings?.map((count) => (
        <div key={count.id}>
          {isEdit ? (
            <>
              <textarea
                ref={localContentInput}
                value={localContent}
                onChange={(e) => setLocalContent(e.target.value)}
              />
            </>
          ) : (
            <>{count.ment}</>
          )}
          <span>
            {isEdit ? (
              <>
                <button onClick={handleQuitEdit}>수정 취소</button>
                <button onClick={handleEdit}>수정 완료</button>
              </>
            ) : (
              <>
                <button onClick={toggleIsEdit}>수정</button>
                <button
                  type="button"
                  onClick={() => onClickDeleteButtonHandler(count.id)}
                >
                  삭제
                </button>
              </>
            )}
          </span>
        </div>
      ))}
      <footer>
        <Pagination
          total={selectComment.length}
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
  /* overflow: auto; */
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
