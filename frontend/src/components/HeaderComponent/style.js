import styled from 'styled-components';

import { Row, Col } from 'antd';

export const WrappedHeader = styled(Row)`
    padding: 12px 50px;
    background-color:#fff;
    // background-color: rgb(167, 167, 167);
`

// export const WrappedSearch = styled(Col)`
//     color:green;
//     bolder-radius:20px;
// `



export const WrappedLogo = styled.a`
    font-size:2.2rem;
    font-family:Parkavenue, cursive;
    font-weight:bold;
    color:#a77d44;
    text-align:left;
    margin-right:40px;
    text-decoration: none;
    &:hover {
        color: #a77d44;
    }
`

export const Wrapped = styled.div`
    font-family: 'AntTeam', sans-serif;
    font-size: 16px;
    margin:auto;
    justify-content: center;
    align-items: center;
    text-align:center;

    max-width:1400px;
`

export const WrappedA = styled.a`
    color:#000000;
    &:hover{
        color:#a77d44;
    }
`


export const WrappedHeaderText = styled(Col)`
    font-size: 16px;
    padding-left:5%;
    text-align:left;
    line-height: 40px;
    border-bottom: 1px solid #e5e5e5 ;
    
`

export const WrappedFlex = styled.div`
    display: flex;
    margin-left:30px;
`

export const WrappedIcon = styled.div`
   font-size:1.8rem;
   margin-left:10px;
   

`


export const WrappedJustified = styled(Col)`
   
   
`




export const Navbar = styled.div`
    margin:0 5%;
    margin-bottom:10px;
    display: flex;
    font-size:18px;
    justify-content: space-between;
    align-items: center;
    background-color: #be9660; /* Màu nền của thanh navbar */
    color: white; /* Màu chữ */
    
    border-radius:30px;
    text-weight:bold;
`

export const LeftSidea = styled.a`
    color: white;
    // margin-right: 15px; /* Khoảng cách giữa các mục trong navbar */
    text-decoration: none;
    padding: 15px 20px;
    font-weight: bold;
    &:hover{
        padding: 15px 20px;
        background-color:#a77d44;
    }
`

export const LeftSideHome = styled.a`
    color: white;
    // margin-right: 15px; /* Khoảng cách giữa các mục trong navbar */
    text-decoration: none;
    padding: 15px 30px;
    padding-right:20px;
    font-weight: bold;
    &:hover{
        padding: 15px 30px;
        padding-right:20px;
        background-color:#a77d44;
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
    }
`

export const RightSidea = styled.a`
    color: white;
    font-weight: bold;
    text-decoration: none;
    padding: 15px 30px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    background-color:#E4002B;
    &:hover{
        padding: 15px 30px;
        
        background-color:#850f1a;
    }

`
export const RightSide = styled.div`
    display: flex;
`