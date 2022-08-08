import Comments from "../components/Comments";
import styled from "styled-components";

const Detail = () => {
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
      <DeliteButton>게시글 삭제</DeliteButton>
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
const DeliteButton = styled.button`
  /* width: 4%; */
  margin-left: 75%;
  margin-top: 10px;
  background-color: #a5f9b991;
  border-radius: 5px;
  border: 0px;
  padding: 5px;
  width: 85px;
`;
