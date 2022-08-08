import styled from "styled-components";


let Box = styled.div`
    width: 100%;
    background-color: black;
    height: 200px;
    color: hotpink;
    //가운데 정렬
    display : flex;
    justify-content : center;
    align-items : center;
`

function Header() {
    return (
        <>
            <Box>
                <h3>로고임</h3>
            </Box>
        </>
    )
}

export default Header;