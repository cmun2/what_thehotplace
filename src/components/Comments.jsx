import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import commentSlice, { addComment } from "../redux/modules/commentSlice";

const Comments = () => {
  const startState = {
    id: uuidv4(),
    ment: "",
  };

  const [counters, setCounters] = useState(startState);
  //const { comments } = useSelector((state) => state.comment);

  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    //console.log(e.target.value);
    const { name, value } = e.target;
    setCounters({ ...counters, [name]: value, id: uuidv4() });
  };

  const onSubmitHandler = (e) => {
    //console.log(counter);
    e.preventDefault();
    if (counters === "") return;

    dispatch(
      addComment({
        counters,
      })
    );
    //console.log(e.counter);
    setCounters(startState);
  };

  const { comment } = useSelector((state) => state.counter);
  // console.log(comment)
  //console.log(comment);
  //const [counter, setCounter] = useSelector((state) => state.counter.comment)
  //console.log(comment);
  console.log(comment);
  return (
    <CommentsBody>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="ment"
          value={counters.ment}
          onChange={onChangeHandler}
        />
        <button>작성</button>
      </form>

      {comment.map((comment) => (
        <div key={comment.id}>
          {comment.ment}
          <span>
            <button>수정</button>
            <button>삭제</button>
          </span>
        </div>
      ))}
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
