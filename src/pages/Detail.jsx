// src/Detail.jsx

import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Comments from "../components/Comments";
import Header from "../components/Heaedr";

const Detail = () => {

  return (
    <>
    <Header/>
      <DetailBody>
        <h2>핫플 제목</h2>
        <Img>나의 핫플 사진</Img>
        <p>어쩌라고 핫플이나 가</p>
        <div>
          <Link to="/"><button>돌아가기</button></Link>
          <Link to="/edit"><button>게시글 수정</button></Link>
        </div>
      </DetailBody>
      <DeliteButton>게시글 삭제</DeliteButton>
      <Comments/>
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

  border-top: 9px solid #ff0068;
  width: 50%;
  height: 530px;
  margin: 10px auto auto auto;
  border-radius: 10px;
  background-color: #000000dc;
  border: 1px solid none;
  box-shadow: 6px 6px 6px 6px #0000ff19;
  color: #ff0068;
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
    font-size: 16px;
    width: 80%;
    height: 30%;
    margin-top: 10px;
  }
  div {
    margin: 7px;
      button {
        width: 120px;
        padding: 10px;
        border: 2px solid #ff0068;
        border-radius: 10px;
        background-color: #ff0068;
        color: white;
        margin-left: 15px;
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
  width: 120px;
  padding: 10px;
  border: 2px solid #ff0068;
  border-radius: 10px;
  background-color: #ff0068;
  color: white;
`