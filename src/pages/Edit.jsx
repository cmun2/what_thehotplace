import React from "react";
import styled from "styled-components";

const Edit = () => {
  return (
    <>
    <Base>
      <Box>
        <BarTxt1>Edit Information</BarTxt1>
        <BarTxt2>수정할 내용을 입력하세요.</BarTxt2>
        <ContentBox>
          <Title>HOT PLACE<TitleInput></TitleInput> </Title>
          <Image>IMAGE<ImageInput></ImageInput> </Image>
          <Content>REVIEW<ContentInput></ContentInput> </Content> 
        </ContentBox>
        <Btn>
          <CompleteBtn> 취소 </CompleteBtn>
          <CancelBtn> 수정완료 </CancelBtn>
        </Btn>
      </Box>
    </Base>
    </>
  )
};

export default Edit;
const BarTxt1 = styled.h1`
  color: #ff0068;
  margin: 8px;
`
const BarTxt2 = styled.p`
  color: rgb(160, 160, 160);
  margin: 10px;
`
const Btn = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ContentBox = styled.div`
  padding: 50px;
  margin: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: left;
`
const Base = styled.div`
  background-color: black;
  height: 100vh;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
`
const Box = styled.div`
  border-top: 9px solid #ff0068;
  margin: auto;
  width: 500px;
  text-align: center;
  //border: 2px solid white;
  //border-radius: 10px;
  background-color: black;
`
const Title = styled.div`
  font-size: medium;
  color:#ff0068;
`
const TitleInput = styled.input`
  border: 1px solid rgb(160, 160, 160);
  width: 400px;
  height: 40px;
  border-radius: 4px;
  padding-left: 10px;
  margin-bottom: 25px;
  margin-top: 4px;
  color: white;
`
const Image = styled.div`
  font-size: medium;
  color:#ff0068;
`
const ImageInput = styled.input`
  border: 1px solid rgb(160, 160, 160);
  width: 400px;
  height: 40px;
  border-radius: 4px;
  padding-left: 10px;
  margin-bottom: 25px;
  margin-top: 4px;
  color: white;
`
const Content = styled.div`
  font-size: medium;
  color:#ff0068;
`
const ContentInput = styled.input`
  border: 1px solid rgb(160, 160, 160);
  width: 400px;
  height: 40px;
  border-radius: 4px;
  padding-left: 10px;
  margin-top: 4px;
  color: white;
`

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