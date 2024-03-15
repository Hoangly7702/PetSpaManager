import { Input } from "antd";
import styled from "styled-components";


export const WrappedInputStyle = styled(Input)`
    border-top:none;
    border-left:none;
    border-right:none;
    border-bottom:solid 2px #2c2c2e;
    &:focus{
        border-bottom:solid 2px #2c2c2e;
        background:#eff8ff;
    }
    &:hover{
        border-bottom:solid 2px black;
        
    }
`