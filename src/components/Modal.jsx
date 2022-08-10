import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";
// import { addNumber } from "../redux/modules/users";
import axios from "axios";

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
    height: 60%;
    max-width: 700px;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
`


const Logo = styled.div`
    width: 100%;
    background-color: black;
    height: 60px;
    color: hotpink;
    display : flex;
    justify-content : center;
    align-items : center;
`


const InputOne = styled.input`
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
`

const Name = styled.label`
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-top: 20px;
    
`

const Btslice = styled.div`
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

    let [imgesrc, setImgesrc] = useState('');


    const dispatch = useDispatch();
    const qwe = useSelector((state) => state.users)

    console.log(qwe)

    const [inputs, setInputs] = useState({
        title: '',
        body: '',
    });

    const { title, body } = inputs; // 비구조화 할당을 통해 값 추출

    const onChange = (e) => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        });
    };

    const onSubmitHandler = async (inputs) => {
        if (title, body === "") return;
        await axios.post("http://localhost:3001/list", inputs);
        dispatch(getListThunk());
        setInputs('');
        setImgesrc('');
        console.log(inputs)
    };


    const encodeFileToBase64 = async (a) => {
        const reader = new FileReader();
        reader.readAsDataURL(a)
        return new Promise((resolve) => {
            reader.onload = () => {
                setImgesrc(reader.result);
                setInputs({
                    ...inputs,
                    imgFile: reader.result,
                })
                resolve();
            };
        });
    };


    return (
        <div>
            <Open onClick={() => { setModal(true) }}>모달창 열기</Open>
            {
                modal === true ? <>
                    <ModalBackground>
                        <ModalBox>
                            <Logo>로고임</Logo>
                                    <img style={{width:"45%", height:"30%", marginTop:"5px", border:"10px solid hotpink;"}} src={imgesrc}/>
                                <InputOne  name="image" type="file" accept="image/*" onChange={(e) => {
                                    const { value } = encodeFileToBase64(e.target.files[0])
                                    setInputs({
                                        ...inputs,
                                        imgFile: value
                                    })
                                }} />
                                
                                <InputTwo name="title" placeholder="핫플레이스 이름" onChange={onChange} value={title} />
                                <InputThr name="body" placeholder="리뷰를 10글자 이상 작성해주세요!!" onChange={onChange} value={body} />
                                <Btslice>
                                    <ModalButton onClick={() => { setModal(!modal) }}>취소</ModalButton>
                                <ModalButton onClick={() => { onSubmitHandler(inputs); alert("작성 완료!!"); setModal(!modal); }}>작성하기</ModalButton>
                                </Btslice>
                        </ModalBox>
                    </ModalBackground></> : null
            }
        </div >
    )
}
export default Modal;