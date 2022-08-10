import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const Edit = () => {
  const Detail = useSelector((state) => state.counter.detail);

  const [editDetail, setEditDetail] = useState({
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

  // 수정버튼 이벤트 핸들러 추가 👇
  const onClickEditButtonHandler = (id, edit) => {
    axios.patch(`http://localhost:3001/list/${id}`, edit);
  };

  return (
    <>
      <Base>
        <Box>
          <BarTxt1>Edit Information</BarTxt1>
          <BarTxt2>수정할 내용을 입력하세요.</BarTxt2>
          <ContentBox>
            <Title>
              HOT PLACE
              <TitleInput
                value={editDetail.title}
                onChange={(ev) => {
                  setEditDetail({
                    title: ev.target.value,
                  });
                }}
              ></TitleInput>{" "}
            </Title>
            <Image value={Detail.img}>
              IMAGE
              <img
                style={{ width: "450px", height: "200px" }}
                src={editDetail.imgFile}
              />
            </Image>
            <Content>
              REVIEW<ContentInput value={Detail.body}></ContentInput>{" "}
            </Content>
          </ContentBox>
          <Btn>
            <Link to={`/detail/${Detail.id}`}>
              <CompleteBtn> 취소 </CompleteBtn>
            </Link>
            <Link to={`/detail/${Detail.id}`}>
              <CancelBtn
                onClick={() => onClickEditButtonHandler(Detail.id, editDetail)}
              >
                {" "}
                수정완료{" "}
              </CancelBtn>
            </Link>
          </Btn>
        </Box>
      </Base>
    </>
  );
};

export default Edit;

const BarTxt1 = styled.h1`
  color: #ff0068;
  margin: 8px;
`;
const BarTxt2 = styled.p`
  color: rgb(160, 160, 160);
  margin: 10px;
`;
const Btn = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentBox = styled.div`
  padding: 50px;
  margin: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: left;
  img {
    max-width: 100%;
  }
`;
const Base = styled.div`
  background-color: black;
  height: 100vh;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
`;
const Box = styled.div`
  border-top: 9px solid #ff0068;
  margin: auto;
  width: 500px;
  text-align: center;
  //border: 2px solid white;
  //border-radius: 10px;
  background-color: black;
`;
const Title = styled.div`
  font-size: medium;
  color: #ff0068;
`;
const TitleInput = styled.input`
  border: 1px solid rgb(160, 160, 160);
  width: 400px;
  height: 40px;
  border-radius: 4px;
  padding-left: 10px;
  margin-bottom: 25px;
  margin-top: 4px;
  color: white;
`;
const Image = styled.div`
  font-size: medium;
  color: #ff0068;
`;
const ImageInput = styled.input`
  border: 1px solid rgb(160, 160, 160);
  width: 400px;
  height: 40px;
  border-radius: 4px;
  padding-left: 10px;
  margin-bottom: 25px;
  margin-top: 4px;
  color: white;
`;
const Content = styled.div`
  font-size: medium;
  color: #ff0068;
`;
const ContentInput = styled.input`
  border: 1px solid rgb(160, 160, 160);
  width: 400px;
  height: 40px;
  border-radius: 4px;
  padding-left: 10px;
  margin-top: 4px;
  color: white;
`;

const CompleteBtn = styled.button`
  width: 120px;
  padding: 10px;
  margin: 5px 0px 0px 20px;
  border: 2px solid #ff0068;
  border-radius: 10px;
  background-color: #ff0068;
  color: white;
`;

const CancelBtn = styled.button`
  width: 120px;
  padding: 10px;
  margin: 5px 0px 0px 20px;
  border: 2px solid #ff0068;
  border-radius: 10px;
  background-color: #ff0068;
  color: white;
`;
