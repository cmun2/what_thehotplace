import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getListThunk } from "../redux/modules/users";
import { Link } from 'react-router-dom';

const Tedo = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 35px;
`


const Card = styled.div`
   display: flex;
   flex-direction: column;
   margin: 50px 50px 30px;
   border-radius: 15px;
   border: 2px solid hotpink;
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

const Titlecen = styled.div`
    display: flex;
    justify-content: center;
`


function List() {


    const dispatch = useDispatch();
    const list = useSelector((state) => state.users.list)

    // console.log(list)


    useEffect(() => {
        dispatch(getListThunk());
    }, []);
    const Detail = useSelector((state) => state.getdetail.detail);

    return (
        <>
            <Tedo>
                {
                    list.map(function (a) {
                        return (
                            
                                <Card key={a.id}>
                                    <CardImag><img style={{ width: "450px", height: "200px" }} src={a.imgFile} /></CardImag>
                                    <CardBody>
                                        <Titlecen><Link to={`/detail/${a.id}`}><h3 to={`/edit/${Detail.id}`}>{a.title}</h3></Link></Titlecen>
                                        <p>{a.body}</p>
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

