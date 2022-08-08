import styled from "styled-components";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from 'react-router-dom';

const Tedo = styled.div`
    border: 1px solid hotpink;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`


const Card = styled.div`
   border: 1px solid black;
   display: flex;
   flex-direction: column;
   margin: 15px 80px 15px 15px;
   padding: 10px;
   border-radius: 10px;
`

const CardImag = styled.div`
   background-color: green;
   width: 450px;
   height: 200px;
`

const CardBody = styled.div`
    background-color: yellow;
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

    return (
    
        <Tedo>
            <Card>
                <CardImag>
                </CardImag>
                <CardBody>
                    <Cen><Link to="/Detail"><h3>강남 카페</h3></Link></Cen>
                    <p>너무너무 이뻐요 너무너무 이뻐요 너무너무 이뻐요  너무너무 이뻐요 너무너무 이뻐요 너무너무 이뻐요 너무너무 이뻐요  너무너무 이뻐요 너무너무 이뻐요 너무너무 이뻐요 너무너무 이뻐요  너무너무 이뻐요</p>
                </CardBody>
            </Card>
            <Card>
                <CardImag>
                </CardImag>
                <CardBody>
                    <Cen><h3>강남 카페</h3></Cen>
                    <p>너무너무 이뻐요 너무너무 이뻐요 너무너무 이뻐요  너무너무 이뻐요 너무너무 이뻐요 너무너무 이뻐요 너무너무 이뻐요  너무너무 이뻐요 너무너무 이뻐요 너무너무 이뻐요 너무너무 이뻐요  너무너무 이뻐요</p>
                </CardBody>
            </Card>
            <Card>
                <CardImag>
                </CardImag>
                <CardBody>
                    <Cen><h3>강남 카페</h3></Cen>
                    <p>너무너무 이뻐요 너무너무 이뻐요 너무너무 이뻐요  너무너무 이뻐요 너무너무 이뻐요 너무너무 이뻐요 너무너무 이뻐요  너무너무 이뻐요 너무너무 이뻐요 너무너무 이뻐요 너무너무 이뻐요  너무너무 이뻐요</p>
                </CardBody>
            </Card>
            <Card>
                <CardImag>
                </CardImag>
                <CardBody>
                    <Cen><h3>강남 카페</h3></Cen>
                    <p>너무너무 이뻐요 너무너무 이뻐요 너무너무 이뻐요  너무너무 이뻐요 너무너무 이뻐요 너무너무 이뻐요 너무너무 이뻐요  너무너무 이뻐요 너무너무 이뻐요 너무너무 이뻐요 너무너무 이뻐요  너무너무 이뻐요</p>
                </CardBody>
            </Card>
            
        </Tedo>
    )
}

export default List;

