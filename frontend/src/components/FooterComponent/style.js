import { Row } from "antd";
import styled from "styled-components";

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

export const WrappedFooter = styled.div`
    
    background-color: #292a2d;
    background-image: url(//bizweb.dktcdn.net/100/458/454/themes/869149/assets/banner-6.jpg?1691834528344);
    background-position: top center;
    background-repeat: no-repeat;
    padding: 70px 0 0

    margin:auto;
    margin-top: 35px;
    
`


export const WrappedFooterRow = styled(Row)`
    font-family: 'AntTeam', sans-serif;
    font-size: 16px;
    margin:auto;
    justify-content: center;
    // align-items: center;
    text-align:left;
    max-width:1400px;
    padding:6rem 0;
    // margin-left:15%;
    // margin-right:15%;
    color:#fff;
`