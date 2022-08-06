// src/Detail.jsx

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Detail = () => {

  const [posts, setPosts] = useState(null);

	// axios를 통해서 get 요청을 하는 함수를 생성합니다.
	// 비동기처리를 해야하므로 async/await 구문을 통해서 처리합니다.
  const fetchPosts = async () => {
    const { data } = await axios.get("http://localhost:3001/posts");
    setPosts(data); // 서버로부터 fetching한 데이터를 useState의 state로 set 합니다.
  };
	
	// 생성한 함수를 컴포넌트가 mount 됐을 떄 실행하기 위해 useEffect를 사용합니다.
  useEffect(() => {
		// effect 구문에 생성한 함수를 넣어 실행합니다.
    fetchPosts();
  }, []);

	// data fetching이 정상적으로 되었는지 콘솔을 통해 확인합니다.
  console.log(posts); // App.js:16


  return (
    <>
      <DetailBody>
        <h2></h2>
        <Img>나의 핫플 사진</Img>
        <p>어쩌라고 핫플이나 가</p>
        <div>
          <button>돌아가기</button>
          <button>게시글 수정</button>
        </div>
      </DetailBody>
      <DeliteButton>게시글 삭제</DeliteButton>
      <CommentsBody>
        <p><input></input><button>작성</button></p>
        <div>댓글들<span><button>수정</button><button>삭제</button></span></div>
      </CommentsBody>
    </>
  );
};

export default Detail;

const DetailBody = styled.div`
//아이템 중앙 정렬
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;

  width: 80%;
  height: 600px;
  margin: auto;
  border-radius: 10px;
  background-color: red;
  h2 {
      margin: 0px auto 10px auto;
      width: 90%;
      height: 38px;
      text-align: center;
      padding: 10px;
      border-radius: 5px;
      background-color:purple;
    }
  p {
    font-size: 15px;
    width: 80%;
    height: 40%;
    margin-top: 10px;
    background-color: purple;
  }
  div {
    margin: 7px;
      button {
        background-color: #a5f9b991;
        border-radius: 5px;
        border: 0px;
        padding: 5px;
        margin-left: 5px;
        width: 100px;
        }
  }
`

//이미지 임시
const Img = styled.div`
  height: 40%;
  width: 80%;
  background-color: purple;
  text-align: center;
  padding: 10px;
`
const DeliteButton = styled.button`
  width: 8%;
  margin-left: 76%;
  margin-top: 10px;
  background-color: #a5f9b991;
  border-radius: 5px;
  border: 0px;
  padding: 5px;
  width: 100px;
`

const CommentsBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  background-color: yellow;
  width: 80%;
  height: 200px;
  margin: auto;
  margin-top: 10px;
  p {
    margin: 10px;
    width: 100%;
    display: flex;
    input {
      width:85%;
      margin: auto;
      margin-left: 15px;
    }
    button {
      margin-right: 10px;
      background-color: #a5f9b991;
      border-radius: 5px;
      border: 0px;
      padding: 5px;
      margin-left: 5px;
      width: 50px;
    }
  }
  div {
    width: 96%;
    height: 37px;
    background-color: red;
    display: flex;
    justify-content: space-between;
    text-align: center;
    button {
      background-color: #a5f9b991;
      border-radius: 5px;
      border: 0px;
      padding: 5px;
      width: 50px;
      margin: 5px;
    }
  }
`


