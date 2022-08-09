import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getListThunk } from "../redux/modules/users";


const Tedo = styled.div`
    border: 1px solid hotpink;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`


const Card = styled.div`
   display: flex;
   flex-direction: column;
   margin: 50px 50px 30px;
   border-radius: 15px;
   border: 2px solid black;
   overflow: hidden;
`

const CardImag = styled.div`
   background-color: hotpink;
   width: 450px;
   height: 200px;
`

const CardBody = styled.div`
    width: 450px;   
   height: 150px;
   padding: 10px;
   display: flex;
   flex-direction: column;
`

const Cen = styled.div`
    display: flex;
    justify-content: center;
`


function List() {


    const dispatch = useDispatch();
    const list = useSelector((state) => state.users.list)

    // console.log(list)


    useEffect(() => {
        dispatch(getListThunk());
    },[]);

    return (
        <>
            <Tedo>
                {
                    list.map(function (a, i) {
                        return (
                            <Card key={a.id}>
                                <CardImag>{a.img}</CardImag>
                                <CardBody>
                                    <Cen><h3>{a.title}</h3></Cen>
                                    <p>{a.coments}</p>
                                </CardBody>
                            </Card>
                        )
                    })
                }

            </Tedo>

        </>
    )
}



export default List;

