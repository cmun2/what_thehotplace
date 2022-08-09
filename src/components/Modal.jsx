import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";
// import { addNumber } from "../redux/modules/users";
import axios from "axios";

import { addNumber, getListThunk } from "../redux/modules/users";



const Open = styled.button`
    background-color: black;
    border-radius: 12px;
    height: 40px;
    width: 240px;
    color: hotpink;
    margin: auto;
    display: block;
    margin-top: 100px;
`


const ModalBackground = styled.div`
    position: fixed;
    top:0; left: 0; bottom: 0; right: 0;
     background: rgba(0, 0, 0, 0.8);
     display: flex;
     justify-content: center;
     align-items: center;
`

const ModalBox = styled.div`
    background-color: white;
    border-radius: 10px;
    width: 40%;
    height: 75%;
`


const Logo = styled.div`
    width: 100%;
    background-color: black;
    height: 80px;
    color: hotpink;
    display : flex;
    justify-content : center;
    align-items : center;
`


const InputOne = styled.input`
    border-radius: 6px;
    height: 250px;
    padding-left: 10px;
    width: 300px;
    border: 1px solid hotpink;
    margin-top: 10px;
`

const InputTwo = styled.input`
    border-radius: 6px;
    height: 35px;
    padding-left: 10px;
    width: 300px;
    border: 1px solid hotpink;
    margin-top: 10px;
`
const InputThr = styled.input`
    border-radius: 6px;
    height: 120px;
    padding-left: 10px;
    width: 300px;
    border: 1px solid hotpink;
    margin-top: 10px;
`

const ModalButton = styled.button`
    background-color: black;
    color: hotpink;
    width: 100px;
    height: 40px;
    border-radius: 12px;
    margin-bottom: 50px;
    display :inline-block;
    margin: 10px;
`

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`

const Name = styled.label`
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-top: 20px;
    
`

const Zxc = styled.div`
    text-align: center;
    margin-top: 30px;
`
const Photo = styled.button`
    border: 1px solid black;
    margin-top: 10px;
    margin-left: 220px;
    color: hotpink;
    background-color: black;
    width: 70px;
    height: 25px;
    border-radius: 8px;
`




function Modal() {

    let [modal, setModal] = useState(false)


    const dispatch = useDispatch();
    const qwe = useSelector((state) => state.users)

    console.log(qwe)

    const [inputs, setInputs] = useState({
        title: '',
        coments: '',
      });
    
      const { title, coments } = inputs; // 비구조화 할당을 통해 값 추출
    
      const onChange = (e) => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
        setInputs({
          ...inputs, // 기존의 input 객체를 복사한 뒤
          [name]: value // name 키를 가진 값을 value 로 설정
        });
      };

      console.log(title, coments)


      const onSubmitHandler = (inputs) => {
        if (title, coments=== "") return;
        axios.post("http://localhost:3001/list", inputs);
        setInputs('');
      };

    return (
        <div>
            <Open onClick={() => { setModal(true) }}>모달창 열기</Open>
            {
                modal === true ? <>
                    <ModalBackground>
                        <ModalBox>
                            <Logo>로고임</Logo>
                            <Box>
                                <form>
                                    <label htmlFor="profile-upload" />
                                    <input type="file" id="profile-upload" accept="image/*" />
                                </form>
                                <InputTwo name="title" placeholder="핫플레이스 이름" onChange={onChange} value={title}></InputTwo>
                                <InputThr name="coments" placeholder="닉네임" onChange={onChange} value={coments}></InputThr>
                            </Box>
                            <Zxc>
                                <ModalButton onClick={() => { setModal(!modal) }}>취소</ModalButton>
                                <ModalButton onClick={()=> {onSubmitHandler(inputs); alert("작성 완료!!"); setModal(!modal)}}>작성하기</ModalButton>
                            </Zxc>
                        </ModalBox>
                    </ModalBackground></> : null
            }
        </div >
    )
}


export default Modal;