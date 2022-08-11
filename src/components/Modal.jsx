import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";
import axios from "axios";
import { useRef } from "react";

import { getListThunk } from "../redux/modules/users";

const Open = styled.button`
  background-color: black;
  border-radius: 12px;
  height: 40px;
  width: 240px;
  color: hotpink;
  margin: auto;
  display: block;
  margin-top: 100px;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 40%;
  height: 60%;
  max-width: 700px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  width: 100%;
  background-color: black;
  height: 60px;
  color: hotpink;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputOne = styled.input`
  margin-top: 10px;
`;

const InputTwo = styled.input`
  border-radius: 6px;
  height: 35px;
  padding-left: 10px;
  width: 300px;
  border: 1px solid hotpink;
  margin-top: 10px;
`;
const InputThr = styled.input`
  border-radius: 6px;
  height: 120px;
  padding-left: 10px;
  width: 300px;
  border: 1px solid hotpink;
  margin-top: 10px;
`;

const ModalButton = styled.button`
  background-color: black;
  color: hotpink;
  width: 100px;
  height: 40px;
  border-radius: 12px;
  margin-bottom: 50px;
  display: inline-block;
  margin: 10px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.label`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-top: 20px;
`;

const Btslice = styled.div`
  text-align: center;
  margin-top: 30px;
`;
const Photo = styled.button`
  border: 1px solid black;
  margin-top: 10px;
  margin-left: 220px;
  color: hotpink;
  background-color: black;
  width: 70px;
  height: 25px;
  border-radius: 8px;
`;

function Modal() {
  //모달창 띄우기
  let [modal, setModal] = useState(false);
  //이미지 미리보기
  let [imgesrc, setImgesrc] = useState("");

  //타이틀 옵저버
  const TitleInput = useRef();

  //바디 옵저버 달기
  const bodyInput = useRef();

  //리덕스 데이터 가져오기
  const dispatch = useDispatch();
  const qwe = useSelector((state) => state.users);
  //console.log(qwe)

  //입력받을 인풋값 저장
  const [inputs, setInputs] = useState({
    title: "",
    body: "",
  });

  // 비구조화 할당을 통해 값 추출
  const { title, body } = inputs;
  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  //입력받은 인풋값들 POST요청으로 보내기
  const onSubmitHandler = async (inputs) => {
    if (imgesrc === "") {
      //이미지 확인
      alert("이미지가 없습니다 !!"); //없으면 알림
      onReset();
      return;
    }

    if (
      bodyInput.current.value.length < 10 ||
      TitleInput.current.value.length === 0
    ) {
      //글자수 제한
      alert("다시 한번 확인해주세요 !!");
      onReset(); //다시 초기값으로 돌리기
      return;
    }
    await axios.post("http://localhost:3001/list", inputs);
    dispatch(getListThunk()); //작성완료시 바로 붙기
    setInputs(""); //작성완료시 빈칸으로 되기
    setImgesrc(""); //작성완료시 빈칸으로 되기
    alert("작성완료 !!"); //post 완료시 알람
    console.log(inputs);
  };

  //이미지 문자화 및 다시 이미지화 작업
  const encodeFileToBase64 = async (a) => {
    const reader = new FileReader();
    reader.readAsDataURL(a);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImgesrc(reader.result);
        setInputs({
          ...inputs,
          imgFile: reader.result,
        });
        resolve();
      };
    });
  };

  const onReset = () => {
    setInputs({
      ...inputs,
      title: "",
      body: "",
      imgesrc: "",
    });
  };

  return (
    <div>
      <Open
        onClick={() => {
          setModal(true);
        }}
      >
        모달창 열기
      </Open>
      {modal === true ? (
        <>
          <ModalBackground>
            <ModalBox>
              <Logo>로고임</Logo>
              <img
                style={{
                  width: "45%",
                  height: "30%",
                  marginTop: "5px",
                  backgroundColor: "hotpink",
                  borderRadius: "12px",
                  border: "2px solid black",
                }}
                src={imgesrc}
              />
              <InputOne
                name="image"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const { value } = encodeFileToBase64(e.target.files[0]);
                  setInputs({
                    ...inputs,
                    imgFile: value,
                  });
                }}
              />

              <InputTwo
                name="title"
                placeholder="핫플레이스 이름"
                onChange={onChange}
                value={title}
                ref={TitleInput}
              />
              <InputThr
                name="body"
                placeholder="리뷰를 10글자 이상 작성해주세요!!"
                onChange={onChange}
                value={body}
                ref={bodyInput}
              />
              <Btslice>
                <ModalButton
                  onClick={() => {
                    setModal(!modal);
                    onReset();
                  }}
                >
                  취소
                </ModalButton>
                <ModalButton
                  onClick={() => {
                    onSubmitHandler(inputs);
                    setModal(!modal);
                  }}
                >
                  작성하기
                </ModalButton>
              </Btslice>
            </ModalBox>
          </ModalBackground>
        </>
      ) : null}
    </div>
  );
}
export default Modal;
