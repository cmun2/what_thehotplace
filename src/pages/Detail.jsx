import Comments from "../components/Comments";
import styled from "styled-components";
import { useState, useRef } from "react";
import axios from "axios";


const Detail = () => {
  // 1. const [data, setData] = useState([]);

  // 2. const dataId = useRef(0);
  
  const onDelete = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다.`);
    axios.delete(`http://localhost:3001/${targetId}`);
  //3. const newHotPlaceList = data.filter((it) => it.id !== targetId);
  //4. setData(newHotPlaceList); //setData를 사용하면서 state가 변경되어 삭제가 반영됨.
  }

  return (
    <>
      <DetailBody>
        <h2>하하</h2>
        <Img>나의 핫플 사진</Img>
        <p>어쩌라고 핫플이나 가</p>
        <div>
          <button>돌아가기</button>
          <button>게시글 수정</button>
        </div>
      </DetailBody>
      <DeliteButton>
        <button 
          type="button"
          // onClick={()=>{
          //     if (window.confirm(`${id}의 게시글을 정말 삭제하시겠습니까?`)) {
          //       onDelete(id); //id는 onCreate에서 불러와야함
          //     } //"예"를 누르면 삭제되는 기능 
          //   }}
            >
            게시글 삭제
            </button>
        </DeliteButton>
      <Comments />
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
  width: 60%;
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
    background-color: purple;
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
`;

//이미지 임시
const Img = styled.div`
  height: 40%;
  width: 50%;
  background-color: purple;
  text-align: center;
  padding: 10px;
`;
const DeliteButton = styled.div`
  /* width: 4%; */
  margin-left: 75%;
  margin-top: 10px;
  background-color: #a5f9b991;
  border-radius: 5px;
  border: 0px;
  padding: 5px;
  width: 85px;
`;
