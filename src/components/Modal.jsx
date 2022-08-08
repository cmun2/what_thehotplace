import styled from "styled-components";
import { useState } from "react";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";
import { addNumber } from "../redux/modules/users";



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

    let list = useSelector((state) => state)
    console.log(list.users)  

    const[title, setTitle] = useState('');
    const[coments, setComents] = useState('');
    const[img, setImg] = useState('');

    const dispatch = useDispatch();


    const onChangeHandler1 = (evnet) => {
        const { value } = evnet.target;
        setImg(value);
    };

    const onChangeHandler2 = (evnet) => {
        const { value } = evnet.target;
        setTitle(value);
    };

    const onChangeHandler3 = (evnet) => {
        const { value } = evnet.target;
        setComents(value);
    };

    console.log(title, coments, img)


    const onSubmitHandler = () => {
        if (title === "") return; // 아무것도 입력하지 않았을 때 dispatch 하지 않음
    
        dispatch(
            addNumber({
            title,
            coments,
            img,
          })
        );
          setTitle('')
          setComents('')
          setImg('')
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
                                <InputOne onChange={onChangeHandler1} type={'text'} placeholder="사진 들어갈곳" value={img}></InputOne>
                                <Photo>사진 추가</Photo>
                                <InputTwo onChange={onChangeHandler2} type={'text'} placeholder="핫플레이스 이름" value={title}></InputTwo>
                                <InputThr onChange={onChangeHandler3} type={'text'} placeholder="리뷰!" value={coments}></InputThr>
                            </Box>
                            <Zxc>
                                <ModalButton onClick={() => { setModal(!modal) }}>취소</ModalButton>
                                <ModalButton onClick={onSubmitHandler}>작성하기</ModalButton>
                            </Zxc>
                        </ModalBox>
                    </ModalBackground></> : null
            }
        </div >
    )
}


export default Modal;