// src/Detail.jsx

import React, {useState} from "react";
import styled from "styled-components";
import { __addComment } from "../redux/modules/todosSlice";
import { Link } from 'react-router-dom'
import axios from "axios"; // axios import 합니다.

const Detail = () => {

  return (
    <>
      <DetailBody>
        <h2>핫플 제목</h2>
        <Img>나의 핫플 사진</Img>
        <p>어쩌라고 핫플이나 가</p>
        <div>
          <Link to="/"><button>돌아가기</button></Link>
          <Link to="/edit/${detail.id}"><button>게시글 수정</button></Link>
        </div>
      </DetailBody>
      <DeliteButton>게시글 삭제</DeliteButton>
      <CommentsBody>
        <form>
          <p><input/><button>작성</button></p>
          <div>댓글들<span><button>수정</button><button>삭제</button></span></div>
        </form>
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

  width: 50%;
  height: 600px;
  margin: auto;
  border-radius: 10px;
  background-color: #ffe3e366;
  border: 1px solid none;
  box-shadow: 6px 6px 6px 6px #0000ff19;
  h2 {
      margin: 5px auto 10px auto;
      width: 90%;
      height: 45px;
      text-align: center;
      padding: 10px;
      border-radius: 5px;
    }
  p {
    padding: 5px;
    font-size: 15px;
    width: 80%;
    height: 40%;
    margin-top: 10px;
  }
  div {
    margin: 7px;
      button {
        background-color: #cef4d691;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 255, .2);
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
  width: 50%;
  background-color: purple;
  text-align: center;
  padding: 10px;
`
const DeliteButton = styled.button`
  width: 8%;
  margin-left: 63%;
  margin-top: 15px;
  background-color: #cef4d691;
  
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 255, .2);
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
  background-color: #f9f99040;
  box-shadow: 6px 6px 6px 6px #0000ff19;
  border: 1px solid none;
  border-radius: 5px;
  width: 50%;
  height: 200px;
  margin: auto;
  margin-top: 10px;
  form {
    width:96%;
  }
  p {
    margin: 10px 0px 10px 10px;
    width: 100%;
    display: flex;
    input {
      width:85%;
      margin: auto;
      margin-left: 15px;
      border: 1px solid black;
    }
    button {
      margin-right: 20px;
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 255, .2);
      background-color: #cef4d691;
      border-radius: 5px;
      border: 0px;
      padding: 5px;
      margin-left: 5px;
      width: 50px;
    }
  }
  div {
    width: 100%;
    height: 43px;
    background-color: #ffff7388;
    border: 1px solid none;
    padding: 3px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    text-align: center;
    font-size: 14px;
    button {
      background-color: #cef4d691;
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 255, .2);
      border-radius: 5px;
      border: 0px;
      padding: 5px;
      width: 50px;
      margin: 5px;
    }
  }
`


