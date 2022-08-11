// src/Detail.jsx

import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { Link, useParams } from 'react-router-dom';
import Comments from "../components/Comments";
import Header from "../components/Heaedr";
import { useSelector, useDispatch } from "react-redux";
import { __getDetail } from "../redux/modules/detailSlice";

const Detail = () => {
  const dispatch = useDispatch();
  const { detail }= useSelector((state) => state.getdetail);

  useEffect(() => {
    dispatch(__getDetail(params.id));
  }, [dispatch]);

  const params = useParams()
 
  return (
    <>
    <Header/>
      <DetailBody>
        <h2>{detail.title}</h2>
        <img style={{ width: "450px", height: "200px" }} src={detail.imgFile}/>
        <p>{detail.body}</p>
        <div>
          <Link to="/"><button>목록으로</button></Link>
          <Link to={`/edit/`}><button>수정하기</button></Link>
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
  img {
    max-width: 95%;
  }
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