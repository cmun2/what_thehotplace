// src/Detail.jsx

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Comments from "../components/Comments";
import Header from "../components/Heaedr";
import { useSelector, useDispatch } from "react-redux";
import { getDetail } from "../redux/modules/commentSlice";
import axios from "axios";

const Detail = () => {
  const dispatch = useDispatch();
  const Detail = useSelector((state) => state.counter.detail);

  const [getDetail, setEditDetail] = useState({
    title: Detail.title,
  });

  const fetchDetail = async (id) => {
    const { data } = await axios.get(`http://localhost:3001/list/${id}`);
    setEditDetail(data); // 서버로부터 fetching한 데이터를 useState의 state로 set 합니다.
  };

  useEffect(() => {
    // effect 구문에 생성한 함수를 넣어 실행합니다.
    fetchDetail(Detail.id);
  }, []);

  const onDelete = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다.`);
    axios.delete(`http://localhost:3001/${targetId}`);

    return (
      <>
        <Header />
        <DetailBody>
          <h2>{getDetail.title}</h2>
          <img
            style={{ width: "450px", height: "200px" }}
            src={getDetail.imgFile}
          />
          <p>{getDetail.body}</p>
          <div>
            <Link to="/">
              <button>목록으로</button>
            </Link>
            <Link to={`/edit/${getDetail.id}`}>
              <button onClick={() => dispatch(getDetail(Detail))}>
                수정하기
              </button>
            </Link>
          </div>
        </DetailBody>
        <DeliteButton>게시글 삭제</DeliteButton>
        <Comments />
      </>
    );
  };
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
`;

//이미지 임시
const Img = styled.div`
  height: 40%;
  width: 50%;
  background-color: purple;
  text-align: center;
  padding: 10px;
`;
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
`;
