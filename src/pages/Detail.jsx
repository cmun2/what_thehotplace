// src/Detail.jsx

import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Comments from "../components/Comments";
import Header from "../components/Heaedr";
import { useSelector } from "react-redux";

const Detail = () => {

  const  Detail  = useSelector((state) => state.counter.detail);
  console.log(Detail[0].title)
  return (
    <>
    <Header/>
      <DetailBody>
        <h2>{Detail[0].title}</h2>
        <Img>{Detail[0].img}</Img>
        <p>{Detail[0].body}</p>
        <div>
          <Link to="/"><button>목록으로</button></Link>
          <Link to="/edit"><button>수정하기</button></Link>
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